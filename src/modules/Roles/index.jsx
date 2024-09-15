import React, { createContext, useEffect, useState } from "react";
import { useRoles } from "./core/hook";
import { useSelector } from "react-redux";
import { RiPhoneFindLine } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  HiOutlineBarsArrowDown,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import Loading from "../loading";
import Search from "../Search&Select/searchData";
import SelectData from "../Search&Select/selectData";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreateRole from "./components/CreateRole";
import UpdateRole from "./components/UpdateRole";
import TableGlobal from "../widget/DataTable";
import { RoleColumn } from "./components/table/colRole";
import { HasPermission } from "../components/HasPermission";
import { PermissionModal } from "./components/permission/PermissionModal";
import ShowRole from "./components/ShowRole";

export const RoleContext = createContext();

const Roles = () => {
  const { getRoles, getDeleteRole } = useRoles();
  const { listRole } = useSelector((state) => state.roles);
  const { loadingList } = useSelector((state) => state.loading);
  const [searchRole, setSearchRole] = useState("");
  const [selectRole, setSelectRole] = useState("");
  const [showCreateRole, setShowCreateRole] = useState(false);
  const [showUpdateRole, setShowUpdateRole] = useState(false);
  const [showRoleById, setShowRoleById] = useState(false);
  const [catchRole, setCatchRole] = useState(null);
  const handleShowCreateModal = () => {
    setShowCreateRole(true);
  };
  const handleCloseCreateModal = () => {
    setShowCreateRole(false);
  };
  const handleShowUpdateModal = (id) => {
    setCatchRole(id);
    setShowUpdateRole(true);
  };
  const handleCloseUpdateModal = () => {
    setShowUpdateRole(false);
  };
  const handleShowRoleById = (id) => {
    setShowRoleById(true);
  };
  const handleCloseRoleById = () => {
    setShowRoleById(false);
  };
  const handleRole = (e) => {
    setSearchRole(e.target.value);
  };
  const handleSelectRole = (e) => {
    setSelectRole(e.target.value);
  };
  const filterRole = listRole.filter((item) => {
    // Check if item and item.name are defined before calling toLowerCase()
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchRole.toLowerCase());
    // Check if item, item.product, and item.product.category are defined
    const matchesRole =
      !selectRole || (item && item.name, item.id === parseInt(selectRole));

    return matchesSearch && matchesRole;
  });
  useEffect(() => {
    getRoles();
  }, []);

  const handleDelete = (id) => {
    getDeleteRole(id);
  };
  // if (loadingList) return <Loading />;
  return (
    <RoleContext.Provider
      value={{ setCatchRole, setShowUpdateRole, setShowRoleById }}
    >
      <div className="my-5 py-5 mx-3">
        <h2 className="fw-bold">All Roles</h2>
        <hr />
        <div className="row rounded-3">
          <div className="col-sm-4 m-auto ">
            <Search
              value={searchRole}
              onChange={handleRole}
              placeholder={"Search Role"}
            />
          </div>
          <div className="col-sm-5 m-auto my-3">
            <SelectData value={selectRole} onchange={handleSelectRole}>
              <option value="">All Roles</option>
              {listRole.map((role, index) => (
                <option key={index} value={role.id}>
                  {role.name}
                </option>
              ))}
            </SelectData>
          </div>
          <div className="col-sm-2 m-auto">
            {" "}
            <Link
              onClick={() => handleShowCreateModal()}
              className="btn btn-dark w-100 py-3"
            >
              <FiPlus />
              New Roles
            </Link>
            {/* <HasPermission permission="create-role"></HasPermission> */}
          </div>
        </div>
        <TableGlobal columns={RoleColumn} data={filterRole} />
        <ModalComponent
          show={showCreateRole}
          onHide={handleCloseCreateModal}
          title="Create Role"
          bodyModal={<CreateRole />}
        />
        <ModalComponent
          show={showUpdateRole}
          onHide={handleCloseUpdateModal}
          title="Update Role"
          bodyModal={<UpdateRole id={catchRole} />}
        />
        <ModalComponent
          show={showRoleById}
          onHide={handleCloseRoleById}
          title="Permissions Role"
          bodyModal={<ShowRole id={catchRole} />}
        />
      </div>
    </RoleContext.Provider>
  );
};

export default Roles;
