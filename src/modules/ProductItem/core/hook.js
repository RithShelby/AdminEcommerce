import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setLoadingProduct,
  setProductItem,
  setProductItembyId,
  setUpdateProductItem,
} from "./productItemSlice";
import {
  reGetProductItem,
  reqCreateProductItem,
  reqDeleteProductItem,
  reqUpdateProductItem,
  reShowProductItem,
} from "./request";
import { useNavigate } from "react-router-dom";

const useProductItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProductItem = (page = 0) => {
    dispatch(setLoadingProduct(true));
    reGetProductItem(page)
      .then((response) => {
        dispatch(setProductItem(response.data));
        dispatch(setCurrentPage(page));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoadingProduct(false));
      });
  };
  const showProductItembyId = (id) => {
    return reShowProductItem(id)
      .then((response) => {
        console.log(response.data.data);
        dispatch(setProductItembyId(response.data.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const createProductItem = (payload) => {
    return reqCreateProductItem(payload)
      .then((res) => {
        getProductItem();
        alert("Successfully created product");
        navigate("/product-items");
        console.log(res.data.data);
        // window.location.href = "/product-items";
      })
      .catch((err) => console.log(err));
  };
  const updateProductItem = (id, payload) => {
    return reqUpdateProductItem(id, payload)
      .then((res) => {
        dispatch(setUpdateProductItem(res.data.data));
        alert("Successfully updated product");
        navigate("/product-items");
        window.location.href = "/product-items";
      })
      .catch((err) => console.log(err));
  };
  const deleteProductItem = (id) => {
    return reqDeleteProductItem(id, false) // Send status as false
      .then((res) => {
        alert("Successfully deleted");
        window.location.href = "/product-items"; // Redirect to product items page
      })
      .catch((error) => {
        console.error("Error deleting product item:", error);
        alert("Failed to delete product item. Please try again.");
      });
  };
  return {
    getProductItem,
    showProductItembyId,
    // createProductItem,
    // updateProductItem,
    // deleteProductItem,
  };
};
export { useProductItem };
