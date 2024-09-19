import {useSelector } from "react-redux";
import { useUsers } from "./core/hook";
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Search from "../Search&Select/searchData";
import SelectData from "../Search&Select/selectData";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import { Usercolumns } from "./components/table/userCol";
import TableGlobal from "../widget/DataTable";
import { useRoles } from "../Roles/core/hook";
import {useSweetAlert} from "../SweetAlert";
import {FilterComponent} from "../widget/SearchCustom";

export const UserContext = createContext();

const Users = () => {
  const { getUsers } = useUsers();
  const { list } = useSelector((state) => state.users);
  const { listRole } = useSelector((state) => state.roles);
  const { getRoles } = useRoles();
  const [searchUser, setUser] = useState("");
  const [selectUser, setSelectUser] = useState("");
  const [createModalUser, setCreateModalUser] = useState(false);
  const [updateModalUser, setUpdateModalUser] = useState(false);
  const [catchUserData, setCatchUserData] = useState(null);

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);
  const handleShowCreateModal = () => {
    setCreateModalUser(true);
  };
  const handleCloseCreateModal = () => {
    setCreateModalUser(false);
  };
  const handleShowUpdate = (uuid) => {
    setCatchUserData(uuid);
    setUpdateModalUser(true);
  };
  const handleCloseUpdate = () => setUpdateModalUser(false);
  const handleSearchUser = (e) => {
    setUser(e.target.value);
  };
  const handleSelectUser = (e) => {
    const { value } = e.target;
    setSelectUser(value);
  };
  const filterUser = list.filter((item) => {
    const matchesSearch = item?.name
      ?.toLowerCase()
      .includes(searchUser.toLowerCase());
    const matchesRole =
      !selectUser ||
      selectUser === "all" ||
      item?.roleEntity?.id === parseInt(selectUser);
    return matchesSearch && matchesRole;
  });
  // if (loadingList) return <Loading />;

  // const statusToggler = async (uuid, status) => {
  //   await toggleStatus(uuid, status);
  //   window.location.href = "/users";
  // };

  return (
    <UserContext.Provider value={{ setCatchUserData, setUpdateModalUser }}>
      <div className="mt-5 mx-3">
        <h2 className="fw-bold ">All Users</h2>
        <FilterComponent filterText={searchUser} onFilter={handleSearchUser} create={handleShowCreateModal} placeholder={"Search User Here..." } />
        {/*<div className="row rounded-3 ">*/}
        {/*  <div className="col-sm-4 m-auto my-3">*/}
        {/*    <Search*/}
        {/*      value={searchUser}*/}
        {/*      onChange={handleSearchUser}*/}
        {/*      placeholder={"Search User"}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-sm-5 m-auto my-3">*/}
        {/*    <SelectData onchange={handleSelectUser}>*/}
        {/*      <option value="all">All Roles</option>*/}
        {/*      {listRole.map((role, index) => (*/}
        {/*        <option key={index} value={role.id}>*/}
        {/*          {role.name}*/}
        {/*        </option>*/}
        {/*      ))}*/}
        {/*    </SelectData>*/}
        {/*  </div>*/}
        {/*  <div className="col-sm-2 m-auto">*/}
        {/*    <Link*/}
        {/*      className="btn btn-dark w-100 py-3"*/}
        {/*      onClick={() => handleShowCreateModal()}*/}
        {/*    >*/}
        {/*      <FiPlus />*/}
        {/*      New User*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <TableGlobal columns={Usercolumns} data={filterUser} />
        <hr />
        <ModalComponent
          show={createModalUser}
          title="Create User"
          handleClose={handleCloseCreateModal}
          bodyModal={<CreateUser handleClose={handleCloseCreateModal} />}
        />
        <ModalComponent
          show={updateModalUser}
          handleClose={handleCloseUpdate}
          title="Update User"
          bodyModal={<UpdateUser handleClose={handleCloseUpdate} uuid={catchUserData} />}
        />
      </div>
    </UserContext.Provider>
  );
};

export default Users;
