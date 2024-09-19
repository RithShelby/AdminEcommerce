import { useDispatch } from "react-redux";
import {
  setCategoryOption,
  setDeleteProduct,
  setListProduct,
  setLoading,
  setProductByUuid,
  setProductReview,
  setUpdateProduct,
  setUploadImg,
} from "./productSlice";
import {
  reqCreateProduct,
  reqDeleteProduct,
  reqGetProducts,
  reqShowProductByUuid,
  reqUpdateProduct,
  reqUploadFile,
  reqUserReview,
} from "./request";
import { useNavigate } from "react-router-dom";
import { setLoadingList } from "../../loading/core/loadingSlice";

const useProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProducts = () => {
    reqGetProducts().then((res) => {
      dispatch(setListProduct(res.data.data));
      dispatch(setCategoryOption(res.data.data));
    });
  };
  const getCreateProducts = (payload) => {
    return reqCreateProduct(payload)
      .then((res) => {
        getProducts();
        window.location.href = "/products";
      })
      .catch(() => alert("Create Product Failure"));
  };
  const showProductByUuid = (uuid) => {
    return reqShowProductByUuid(uuid).then((res) => {
      dispatch(setProductByUuid(res.data.data.product));
    });
  };

  const showUserReview = (uuid) => {
    return reqUserReview(uuid).then((res) => {
      // console.log(res.data.data);
      dispatch(setProductReview(res.data.data));
    });
  };

  const updateProductByUuid = async (uuid, payload) => {
    // dispatch(setLoadingList(true));
    return await reqUpdateProduct(uuid, payload)
      .then((res) => {
        dispatch(setUpdateProduct(res.data.data));
        alert("Update Product Success!");
        window.location.href = "/products";
      })
      .catch(() => alert("Update Product Failure"));
  };

  const deleteProduct = (uuid, status) => {
    // dispatch(setLoadingList(true));
    return reqDeleteProduct(uuid, status)
      .then(() => {
        // dispatch(setLoadingList(false));
        alert("Status Updated Successfully!");
        window.location.href = "/products";
      })
      .catch((err) => console.log(err));
  };

  const uploadImage = (file) => {
    return reqUploadFile(file).then((res) => {
      console.log(res);
      dispatch(setUploadImg(res.data.data.uri));
      alert("Upload success!");
    });
  };

  return {
    getProducts,
    // getCreateProducts,
    showProductByUuid,
    showUserReview,
    // updateProductByUuid,
    // deleteProduct,
    // uploadImage,
  };
};

export { useProducts };
