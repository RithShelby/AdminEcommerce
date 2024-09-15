import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/core/authSlice";
import usersSlice from "../Users/core/usersSlice";
import roleSlice from "../Roles/core/roleSlice";
import productSlice from "../Product/core/productSlice";
import productItemSlice from "../ProductItem/core/productItemSlice";
import paymentSlice from "../payment/core/paymentSlice";
import categorieSlice from "../Categories/core/categorieSlice";
import paymentTypeSlice from "../paymentType/core/paymentTypeSlice";
import varitionOptionSlice from "../VariationOption/core/varitionOptionSlice";
import fileSlice from "../file/core/fileSlice";
import loadingSlice from "../loading/core/loadingSlice";
import shoppingCartSlice from "../ShoppingCart/core/shoppingCartSlice";
import reviewProductSlice from "../productUserReview/core/reviewProductSlice";
import shippingMethodSlice from "../ShippingMethod/core/shippingMethodSlice";
import orderStatusSlice from "../OrderStatus/core/orderStatusSlice";
import shoppingOrderSlice from "../ShoppingOrder/core/shoppingOrderSlice";
// import FilterSlice from "../FilterData/core/FilterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    roles: roleSlice,
    products: productSlice,
    reviewProducts: reviewProductSlice,
    productItem: productItemSlice,
    categories: categorieSlice,
    payments: paymentSlice,
    paymentTypes: paymentTypeSlice,
    variationOpions: varitionOptionSlice,
    files: fileSlice,
    loading: loadingSlice,
    shoppingOrders: shoppingOrderSlice,
    shoppingCart: shoppingCartSlice,
    shippingMethod: shippingMethodSlice,
    orderStatus: orderStatusSlice,
    // filter: fileSlice,
  },
});
