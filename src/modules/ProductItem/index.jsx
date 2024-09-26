import React, { createContext, useEffect, useMemo, useState } from "react";
import { useProductItem } from "./core/hook";
import { useSelector } from "react-redux";
import CreateProductItem from "./components/CreateProductItem";
import UpProItem from "./components/UpProItem";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import TableGlobal from "../widget/DataTable";
import { ProductItemColunm } from "./components/table/colProductItem";
import ProductItemPagination from "./components/proPagination";
import { FilterComponent } from "../widget/SearchCustom";

export const ProductItemContext = createContext();

const ProductItem = () => {
  const { getProductItem } = useProductItem();
  const { productItemList } = useSelector((state) => state.productItem);
  console.log(productItemList)
  const options = useMemo(() => [
    { id: "All", name: "All Category" },
    ...productItemList.map(item => ({
      id: item.product.category.id,
      name: item.product.category.name,
    }))
        .filter((item, index, self) => self.findIndex(i => i.name === item.name) === index) // Remove duplicates by name
  ], []);

  const [searchName, setSearchName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreateProductItem, setCreateProductItem] = useState(false);
  const [showUpdateProductItem, setUpdateProductItem] = useState(false);
  const [catchProductItem, setCatchProductItem] = useState(null);

  const handleShowCreateProductItem = () => setCreateProductItem(true);
  const handleCloseCreateProductItem = () => setCreateProductItem(false);
  const handleCloseUpdateProductItem = () => setUpdateProductItem(false);

  const handleSearch = (e) => setSearchName(e.target.value);
  const handleSelectCategory = (e) => setSelectedCategory(e.target.value);

  const filteredItems = useMemo(() => {
    return productItemList.filter((item) => {
      const matchesSearch = item.product.name.toLowerCase().includes(searchName.toLowerCase());
      console.log(matchesSearch)
      const matchesCategory = selectedCategory === "All" || item.product.category.name === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchName]);

  useEffect(() => {
    getProductItem();
  }, []);

  return (
      <ProductItemContext.Provider value={{ setSelectedCategory, setUpdateProductItem }}>
        <div className="mt-5 mx-4">
          <h2 className="fw-bold">All Product Items</h2>
          <hr />
          <FilterComponent
              create={handleShowCreateProductItem}
              placeholder={"Search Product Here..."}
              filterText={searchName}
              onFilter={handleSearch}
              dropdown={false}
              value={selectedCategory}
              options={options}
              onChange={handleSelectCategory}
              optionLabel={"name"}
          />
          <TableGlobal
              columns={ProductItemColunm}
              data={filteredItems}
              productPagination={ProductItemPagination}
          />
          <ModalComponent
              show={showCreateProductItem}
              handleClose={handleCloseCreateProductItem}
              title="Create Product Item"
              bodyModal={<CreateProductItem handleClose={handleCloseCreateProductItem} />}
          />
          <ModalComponent
              show={showUpdateProductItem}
              handleClose={handleCloseUpdateProductItem}
              title="Update Product Item"
              bodyModal={<UpProItem id={catchProductItem} handleClose={handleCloseUpdateProductItem} />}
          />
        </div>
      </ProductItemContext.Provider>
  );
};

export default ProductItem;
