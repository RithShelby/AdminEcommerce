import React, { useEffect, useState } from "react";
import { useCatagories } from "./core/hook";
import { useSelector } from "react-redux";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiPhoneFindLine } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import Loading from "../loading";
import { FiPlus } from "react-icons/fi";
import CreateCategories from "./components/CreateCategories";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateCategories from "./components/UpdateCategories";
import { useProductItem } from "../ProductItem/core/hook";

const Categories = () => {
  const { getCategories } = useCatagories();
  const { getProductItem } = useProductItem();
  const { productItemList } = useSelector((state) => state.productItem);
  const { listCategories } = useSelector((state) => state.categories);
  // const { loadingList } = useSelector((state) => state.loading);
  const [showCreateCategory, setCreateCategory] = useState(false);
  const [showUpdateCategory, setUpdateCategory] = useState(false);

  const [catchCategory, setCatchCategory] = useState(null);
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
  useEffect(() => {
    getCategories();
    getProductItem();
  }, []);
  console.log(productItemList, "=========================================");
  // console.log(listCategories);
  // const categoriesDelete = (uuid) => {
  //   deleteCategories(uuid);
  // };

  // if (loadingList) {
  //   return <Loading />;
  // }

  return (
    <div className=" mx-2 mt-5">
      <div className="col-lg-12">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold">Categories</h2>{" "}
          <Link
            className="me-3 btn btn-dark m-auto py-3"
            onClick={() => handleShowCreateCategory()}
          >
            <FiPlus />
            New Category Item
          </Link>
        </div>
        <hr />
        <table className="table mt-4 table-dark">
          <thead>
            <tr>
              <th>Category name</th>
              <th>Item name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listCategories.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="w-25 text-uppercase">{item.category.name}</td>
                  <td>
                    <div className="dropend ">
                      <IoIosArrowDropdown
                        className="fs-4"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu ms-3">
                        {item.items.map((i) => (
                          <li key={i.id}>
                            <Link
                              className="dropdown-item"
                              to={`/categories/${i.uuid}`}
                            >
                              {i.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <Link
                      className="nav-link"
                      to="#"
                      onClick={() =>
                        handleShowUpdateCategory(item.category.uuid)
                      }
                    >
                      <AiTwotoneEdit className="mx-2 icon_hover text-light" />
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ModalComponent
          show={showCreateCategory}
          onHide={handleCloseCreateCategory}
          title="Create Category"
          bodyModal={<CreateCategories close={handleCloseCreateCategory} />}
        />
        <ModalComponent
          show={showUpdateCategory}
          onHide={handleCloseUpdateCategory}
          title="Update Category"
          bodyModal={<UpdateCategories uuid={catchCategory} />}
        />
      </div>
    </div>
  );
};

export default Categories;
