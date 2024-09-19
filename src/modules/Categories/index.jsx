import React, {createContext, useEffect, useState} from "react";
import { useCatagories } from "./core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import CreateCategories from "./components/CreateCategories";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateCategories from "./components/UpdateCategories";
import { useProductItem } from "../ProductItem/core/hook";
import TableGlobal from "../widget/DataTable";
import {categoryColumn} from "./components/table/column";
import {FilterComponent} from "../widget/SearchCustom";
export const CategoriesContext = createContext();
const Categories = () => {
  const { getCategories } = useCatagories();
  const { getProductItem } = useProductItem();
  const [searchCategory,setSearch] = useState("");
  const { listCategories } = useSelector((state) => state.categories);
  const [showCreateCategory, setCreateCategory] = useState(false);
  const [showUpdateCategory, setUpdateCategory] = useState(false);

  const [catchCategory, setCatchCategory] = useState(null);
  const handleSearch = (e)=>{
    setSearch(e.target.value);
  }
  const handleShowCreateCategory = () => {
    setCreateCategory(true);
  };
  const handleCloseCreateCategory = () => {
    setCreateCategory(false);
  };
  const handleShowUpdateCategory = (uuid) => {
    setCatchCategory(uuid);
    setUpdateCategory(true);
  };
  const handleCloseUpdateCategory = () => {
    setUpdateCategory(false);
  };
  const filterCategory = listCategories.filter((item)=>{
    return item.category.name.toLowerCase().includes(searchCategory.toLowerCase());
  })
  console.log(filterCategory)
  useEffect(() => {
    getCategories();
    getProductItem();
  }, []);
  // console.log(listCategories);
  // const categoriesDelete = (uuid) => {
  //   deleteCategories(uuid);
  // };

  // if (loadingList) {
  //   return <Loading />;
  // }

  return (
      <CategoriesContext.Provider value={{setUpdateCategory,setCatchCategory}}>
        <div className=" mx-2 mt-5">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold">Categories</h2>{" "}
              {/*<Link*/}
              {/*    className="me-3 btn btn-dark m-auto py-3"*/}
              {/*    onClick={() => handleShowCreateCategory()}*/}
              {/*>*/}
              {/*  <FiPlus/>*/}
              {/*  New Category Item*/}
              {/*</Link>*/}
            </div>
            <FilterComponent onFilter={handleSearch} filterText={searchCategory} create={handleShowCreateCategory} placeholder={"Search Category..."}/>
            <hr/>
            <TableGlobal data={filterCategory} columns={categoryColumn}/>
            <ModalComponent
                show={showCreateCategory}
                handleClose={handleCloseCreateCategory}
                title="Create Category"
                bodyModal={<CreateCategories handleClose={handleCloseUpdateCategory} />}
            />
            <ModalComponent
                show={showUpdateCategory}
                handleClose={handleCloseUpdateCategory}
                title="Update Category"
                bodyModal={<UpdateCategories uuid={catchCategory} handleClose ={handleCloseUpdateCategory}/>}
            />
          </div>
        </div>
      </CategoriesContext.Provider>

  );
};

export default Categories;
