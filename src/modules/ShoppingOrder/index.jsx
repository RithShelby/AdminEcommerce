import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useShoppingOrder } from "./core/hook";
import Loading from "../loading";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateShopOrder from "./components/UpdateShopOrder";
import CreateByCart from "./components/CreateByCart";
import TableGlobal from "../widget/DataTable";
import {ShopOrderColumn} from "./components/table/column";
import {FilterComponent} from "../widget/SearchCustom";
export const ShopOrderContext = createContext();
const ShoppingOrder = () => {
  const { getShoppingOrder, deleteShoppingOrder } = useShoppingOrder();
  const { listShoppingOrder } = useSelector((state) => state.shoppingOrders);
  console.log(listShoppingOrder)
  console.log(listShoppingOrder)
  const [showCreateShopOrder, setCreateShopOrder] = useState(false);
  const [showUpdateShopOrder, setUpdateShopOrder] = useState(false);
  const [catchShopOrder, setCatchShopOrder] = useState(null);
  const handleShowCreateShopOrder = () => {
    setCreateShopOrder(true);
  };
  const handleCloseCreateShopOrder = () => {
    setCreateShopOrder(false);
  };
  const handleShowUpdateShopOrder = (id) => {
    setCatchShopOrder(id);
    setUpdateShopOrder(true);
  };
  const handleCloseUpdateShopOrder = () => {
    setUpdateShopOrder(false);
  };
  useEffect(() => {
    getShoppingOrder();
  }, []);
  const handleDelete = (id) => {
    deleteShoppingOrder(id);
  };
  return (
      <ShopOrderContext.Provider value={{}}>
        <div className=" mt-5 mx-2 ">
          <div>
            <h2 className="fw-bold">Shopping Order By User</h2>
            <hr/>
            <FilterComponent create={handleShowCreateShopOrder} search={false}/>
          </div>
          <TableGlobal data={listShoppingOrder} columns={ShopOrderColumn}/>
          <ModalComponent
              show={showCreateShopOrder}
              handleClose={handleCloseCreateShopOrder}
              title="Order By ShopCart"
              bodyModal={<CreateByCart handleClose={handleCloseCreateShopOrder}/>}
          />
          <ModalComponent
              show={showUpdateShopOrder}
              onHide={handleCloseUpdateShopOrder}
              title="Update Shop Order"
              bodyModal={<UpdateShopOrder id={catchShopOrder}/>}
          />
        </div>
      </ShopOrderContext.Provider>

  );
};

export default ShoppingOrder;
