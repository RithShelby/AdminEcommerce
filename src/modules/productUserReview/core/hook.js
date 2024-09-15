import { useDispatch } from "react-redux";
import {
  reqCreateReviewProduct,
  reqDeleteReviewProduct,
  reqReviewProduct,
  reqUpdateUserReview,
} from "./request";
import { setListReview } from "./reviewProductSlice";
import { useNavigate } from "react-router-dom";

const useReviewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getReviewProduct = (ratingValue) => {
    return reqReviewProduct(ratingValue)
      .then((res) => {
        dispatch(setListReview(res.data.data));
      })
      .catch((err) => console.log(err));
  };
  const getCreateReviewProduct = (payload) => {
    return reqCreateReviewProduct(payload)
      .then(() => {
        getReviewProduct();
        alert("Create Successful!");
        window.location.href = "/user-review";
      })
      .catch((err) => alert(err));
  };

  const getUpdateUserReview = (id, payload) => {
    return reqUpdateUserReview(id, payload)
      .then(() => {
        alert("Update Successful!");
        navigate("/user-review");
        window.location.href = "/user-review";
      })
      .catch((err) => alert(err));
  };

  const getDeletedProductReview = (id) => {
    return reqDeleteReviewProduct(id)
      .then(() => {
        alert("deleted successfully!!!");
        window.location.href = "/user-review";
      })
      .catch((err) => console.log(err));
  };

  return {
    getReviewProduct,
    getCreateReviewProduct,
    getDeletedProductReview,
    getUpdateUserReview,
  };
};

export { useReviewProduct };
