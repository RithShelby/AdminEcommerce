import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCatagories } from "../core/hook";
import { useSelector } from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { RiPhoneFindLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import ModalComponent from "../../modalCreateAndUpdate/modalCom";
import UpdateCategories from "./UpdateCategories";

const CategoryById = () => {
  const { uuid } = useParams();
  const { showCategoryById, deleteCategories } = useCatagories();
  const { listCategoriesById } = useSelector((state) => state.categories);
  useEffect(() => {
    showCategoryById(uuid);
  }, []);
  const categoriesDelete = (uuid) => {
    deleteCategories(uuid);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="d-flex align-items-center text-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </th>
          <th>ID</th>
          <th scope="row">Name</th>
          <th scope="row">Descriptiony</th>
          <th scope="row">ParentName</th>
          <th scope="row">ParentDescription</th>
          <th scope="row">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </td>
          <td>{listCategoriesById ? listCategoriesById.id : "Loading"}</td>
          <td>{listCategoriesById ? listCategoriesById.name : "Loading"}</td>
          <td>
            {listCategoriesById ? listCategoriesById.description : "Loading"}
          </td>
          <td>
            {listCategoriesById ? listCategoriesById.parentName : "Loading"}
          </td>
          <td>
            {listCategoriesById
              ? listCategoriesById.parentDescription
              : "Loading"}
          </td>
          <td className="d-flex">
            <Link to="#" className="nav-link">
              <AiTwotoneEdit className=" icon_hover" />
            </Link>
            <Link to="#" className="nav-link">
              <GoTrash
                className="icon_hover "
                onClick={() => {
                  categoriesDelete(listCategoriesById.uuid, "status");
                }}
              />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    // <div key={uuid}>
    //   <p>{listCategoriesId ? listCategoriesId.name : "Loading"}</p>
    //   <p>{listCategoriesId ? listCategoriesId.description : "Loading"}</p>
    //   <p>{listCategoriesId ? listCategoriesId.parentName : "Loading"}</p>
    //   <p>{listCategoriesId ? listCategoriesId.parentDescription : "Loading"}</p>
    // </div>
  );
};

export default CategoryById;
