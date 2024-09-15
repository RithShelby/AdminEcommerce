import Doughnut from "./dashboard/doughnut";
import React, { useEffect } from "react";
import { FcBusiness, FcBusinessContact } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import BarChart from "./dashboard/BarChart";
import { useSelector } from "react-redux";
import { useUsers } from "../Users/core/hook";
import { useShoppingOrder } from "../ShoppingOrder/core/hook";
import { useProductItem } from "../ProductItem/core/hook";

const Overview = () => {
  const { getUsers } = useUsers();
  const { list } = useSelector((state) => state.users);
  const { getProductItem } = useProductItem();
  const { productItemList } = useSelector((state) => state.productItem);
  const { getShoppingOrder } = useShoppingOrder();
  const { listShoppingOrder } = useSelector((state) => state.shoppingOrders);
  const totalUser = list.length;
  const totalShopOrder = listShoppingOrder.length;
  const totalProductItem = productItemList.length;
  useEffect(() => {
    getUsers();
    getShoppingOrder();
  }, []);
  return (
    <div className="row mx-3 mt-5">
      <div className="col-lg-12 mb-5">
        <h2 className="fw-bold">Overview</h2>
      </div>
      <div className="col-lg-3">
        <div className="card border border-0 rounded-5  ">
          <div className="d-flex flex-row justify-content-evenly align-items-center py-5 border border-0 ">
            <div>
              <FcBusiness className="fs-1 text-success" />
            </div>
            <div className="fw-bold text-secondary">
              <p className="m-auto fs-2">{totalShopOrder}</p>
              <p className="m-auto">Sales</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        {" "}
        <div className="card border border-0 rounded-5  ">
          <div className=" d-flex flex-row justify-content-evenly align-items-center py-5 border border-0">
            <div>
              <FcBusinessContact className="fs-1 text-success" />
            </div>
            <div className="fw-bold  text-secondary">
              <p className="m-auto fs-2">{totalUser}</p>
              <p className="m-auto">Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        {" "}
        <div className="card border border-0 rounded-5 ">
          <div className=" d-flex flex-row justify-content-evenly align-items-center py-5 border border-0 ">
            <div>
              <FaShoppingCart className="fs-1 text-warning" />
            </div>
            <div className="fw-bold  text-secondary">
              <p className="m-auto fs-2">{totalProductItem}</p>
              <p className="m-auto">Product Item Stock</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        {" "}
        <div className="card border border-0 rounded-5 ">
          <div className=" d-flex flex-row justify-content-evenly align-items-center py-5 border border-0 ">
            <div>
              <SiCashapp className="fs-1 text-danger" />
            </div>
            <div className="fw-bold  text-secondary">
              <p className="m-auto fs-2">1K</p>
              <p className="m-auto">Total Profit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 col-md-6 col-sm-12 rounded-5 mt-5   ">
        <BarChart />
      </div>

      <div className="col-md-6 col-md-6 col-sm-12 rounded-5 mt-5 px-5 ">
        <Doughnut />
      </div>
    </div>
  );
};

export default Overview;
