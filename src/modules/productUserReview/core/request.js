import axios from "axios";

const reqReviewProduct = (ratingValue = 0) => {
  return axios.get(`products/user-review?ratingValue=${ratingValue}`);
};

const reqCreateReviewProduct = (payload) => {
  return axios.post(`products/user-review`, payload);
};

const reqUpdateUserReview = (id, payload) => {
  return axios.put(`products/user-review-update/${id}`, payload);
};

const reqDeleteReviewProduct = (id) => {
  return axios.delete(`products/user-review-delete/${id}`);
};

export {
  reqReviewProduct,
  reqCreateReviewProduct,
  reqDeleteReviewProduct,
  reqUpdateUserReview,
};
