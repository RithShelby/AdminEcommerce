import React, { useEffect } from "react";
import { useProducts } from "../core/hook";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { TiStar } from "react-icons/ti";

const UserReviewByProduct = () => {
  const { uuid } = useParams();
  const { showUserReview } = useProducts();
  const { productReview } = useSelector((state) => state.products);
  console.log(productReview);
  useEffect(() => {
    showUserReview(uuid);
  }, []);
  return (
    <div>
      <div className="row d-flex justify-content-center align-item-center mx-3 mt-5">
        <div className="d-flex justify-content-between">
          {" "}
          <h2 className="">Reviews</h2>
          <hr />
        </div>
        <div className="row table-responsive m-3">
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="row">Users</th>
                <th scope="row">Products</th>
                <th scope="row">Feedback</th>
                <th scope="row">Rating</th>
              </tr>
            </thead>
            <tbody>
              {productReview.map((item) => {
                return item.userReviews.map((review) => {
                  return (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-5 me-3"
                            style={{ width: "28px", height: "28px" }}
                            src={review.user.avatar}
                            alt="image"
                          />
                          {review.user.name}
                        </div>
                      </td>
                      <td>
                        <div>
                          {item.image ? (
                            <img
                              className="img-fluid rounded-3 me-3"
                              style={{ width: "28px" }}
                              src={item.image}
                              alt="image"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>{review.comment}</td>
                      <td>
                        {Array.from(
                          { length: review.ratingValue },
                          (_, index) => (
                            <TiStar className="text-primary" key={index} />
                          )
                        )}
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReviewByProduct;
