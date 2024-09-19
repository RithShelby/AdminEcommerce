import React, {createContext, useEffect, useState} from "react";
import { useShopCart } from "./core/hook";
import { useSelector } from "react-redux";
import CreateShopCart from "./components/CreateShopCart";
import Loading from "../loading";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import TableGlobal from "../widget/DataTable";
import {columnCart} from "./components/table/column";
import {useProductItem} from "../ProductItem/core/hook";
import {FilterComponent} from "../widget/SearchCustom";
export const ShoppingCartContext = createContext();
const ShoppingCart = () => {
  const { getShopCart } = useShopCart();
  const { getProductItem } = useProductItem();
  const { shopCartList } = useSelector((state) => state.shoppingCart);

  const { loadingList } = useSelector((state) => state.loading);
  const [searchCart, setSearchCart] = useState("");
  const [selectCart, setSelectCart] = useState("");
  const [showCreateModal, setCreateModal] = useState(false);
  const handleShowCreateModal = () => {
    setCreateModal(true);
  };
  const handleCloseCreateModal = () => {
    setCreateModal(false);
  };
  const handleSearchCart = (e) => {
    setSearchCart(e.target.value);
  };

  const handleSelectCart = (e) => {
    setSelectCart(e.target.value);
  };

  const filterItem = shopCartList
    .flatMap((cart) => cart.shoppingCartItems)
    .filter((shopItem) => {
      const matchSearch = shopItem.productItem.product.name
        .toLowerCase()
        .includes(searchCart.toLowerCase());
      const matchSelect =
        !selectCart ||
        (shopItem &&
          shopItem.productItem &&
          shopItem.productItem.product.name &&
          shopItem.id === parseInt(selectCart));
      return matchSearch && matchSelect;
    });
const handleClear = ()=>{
  if(searchCart){
    setSearchCart("");
  }
}
  useEffect(() => {
    getShopCart();
    getProductItem();
  }, []);

  if (loadingList) return <Loading />;

  return (
      <ShoppingCartContext.Provider value={{setSelectCart,searchCart}}>
        <div className="mt-5 mx-2">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold">Shopping Cart</h2>
          </div>
              <FilterComponent
                  create={handleShowCreateModal}
                  placeholder={"Search Here..."}
                  filterText={searchCart}
                  onClear={handleClear}
                  onFilter={(e)=> setSearchCart(e.target.value)}
              />
            <TableGlobal data={filterItem} columns={columnCart}/>

            <ModalComponent
                show={showCreateModal}
                handleClose={handleCloseCreateModal}
                title="Create Shopping Cart"
                bodyModal={<CreateShopCart handleClose={handleCloseCreateModal}/>}
            />
        </div>
      </ShoppingCartContext.Provider>

  );
};

export default ShoppingCart;
