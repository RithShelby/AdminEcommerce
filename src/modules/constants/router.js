import Categories from "../Categories/index";
import CategoryById from "../Categories/components/CategoryById";
import OrderStatus from "../OrderStatus/index";
import Payments from "../payment/index";
import PaymentType from "../paymentType/index";
import Product from "../Product/index";
import ProductDetail from "../Product/components/ProductDetail";
import UserReviewByProduct from "../Product/components/UserReviewByProduct";
import ProductItem from "../ProductItem/index";
import PItemDetail from "../ProductItem/components/PItemDetail";
import ReviewProduct from "../productUserReview/index";
import Roles from "../Roles/index";
import ShowRole from "../Roles/components/ShowRole";
import ShippingMethod from "../ShippingMethod/index";
import ShoppingCart from "../ShoppingCart";
import ShoppingOrder from "../ShoppingOrder/index";
// import Users from "../Users/index";
import AdminProfile from "../Users/components/AdminProfile";
import ShowUuid from "../Users/components/ShowUuid";
import Users from "../Users";
import Overview from "../home";

const routs = [
  {
    path: "/",
    exact: true,
    component: Overview,
    permission: "list-overview",
  },
  {
    path: "/users",
    exact: true,
    component: Users,
    permission: "list-user",
  },
  {
    path: "/users/:uuid",
    exact: true,
    component: ShowUuid,
  },
  {
    path: "/roles",
    exact: true,
    component: Roles,
    permission: "list-role",
  },
  {
    path: "/roles/:id",
    exact: true,
    component: ShowRole,
  },
  {
    path: "/products",
    exact: true,
    component: Product,
    // permission: "list-product",
  },
  {
    path: "/product-detail/:uuid",
    exact: true,
    component: ProductDetail,
  },
  {
    path: "/product-items",
    exact: true,
    component: ProductItem,
  },
  {
    path: "/product_items/:id",
    exact: true,
    component: PItemDetail,
  },
  {
    path: "/category",
    exact: true,
    component: Categories,
  },
  {
    path: "/categories/:uuid",
    exact: true,
    component: CategoryById,
  },
  {
    path: "/shopping-cart",
    exact: true,
    component: ShoppingCart,
    // permission: "list-shopping",
  },
  {
    path: "/shopping-order",
    exact: true,
    component: ShoppingOrder,
  },
  {
    path: "/shipping-method",
    exact: true,
    component: ShippingMethod,
  },
  {
    path: "/payment-type",
    exact: true,
    component: PaymentType,
  },
  {
    path: "/payment",
    exact: true,
    component: Payments,
  },
  {
    path: "/order-line",
    exact: true,
    component: OrderStatus,
  },
  {
    path: "/admin-profile",
    exact: true,
    component: AdminProfile,
  },
  {
    path: "/user-review",
    exact: true,
    component: ReviewProduct,
  },
  {
    path: "/user-review-product/:uuid",
    exact: true,
    component: UserReviewByProduct,
  },
];

export { routs };
