import { AppstoreOutlined } from "@ant-design/icons";
import { AiOutlineShoppingCart, AiOutlineSkin } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { LuUserCog2 } from "react-icons/lu";

const items = [
  {
    path: "/",
    key: "sub1",
    title: "Dashboard",
    exact: true,
    icon: <AppstoreOutlined/>,
    permission: "list-overview",
  },
  {
    path: "/users",
    key: "sub2",
    title: "Users",
    exact: true,
    icon: <FiUsers />,
    permission: "list-user",
  },
  {
    path: "/roles",
    key: "sub3",
    title: "Roles",
    exact: true,
    icon: <LuUserCog2 />,
    permission: "list-role",
  },
  {
    key: "sub4",
    title: "Product",
    exact: true,
    icon: <AiOutlineSkin />,
    permission: "list-product",
    childrenMenu: [
      {
        key: "9",
        title: "All Products",
        path: "/products",
        // permission: "view-products",
      },
      {
        key: "10",
        title: "All Product Items",
        path: "/product-items",
        // permission: "view-product-items",
      },
      {
        key: "11",
        title: "Category",
        path: "/category",
        // permission: "view-category",
      },
    ],
  },
  {
    key: "sub5",
    title: "Shopping",
    exact: true,
    icon: <AiOutlineShoppingCart />,
    permission: "list-shopping",
    childrenMenu: [
      {
        key: "12",
        title: "Shopping Cart",
        path: "/shopping-cart",
        // permission: "view-shopping-cart",
      },
      {
        key: "13",
        title: "Shop Order",
        path: "/shopping-order",
        // permission: "view-shop-order",
      },
      {
        key: "14",
        title: "Shipping Method",
        path: "/shipping-method",
        // permission: "view-shipping-method",
      },
      {
        key: "15",
        title: "Payment",
        path: "/payment",
        // permission: "view-payment",
      },
      {
        key: "16",
        title: "Payment Type",
        path: "/payment-type",
        // permission: "view-payment-type",
      },
      {
        key: "17",
        title: "Order Line",
        path: "/order-line",
        // permission: "view-order-line",
      },
    ],
  },
];

export { items };
