import ActionUpdateUserReview from "./ActionUpdate";
import ActionDeleteUserReview from "./ActionDelete";
import { TiStar } from "react-icons/ti";

export const UserReviewColunm = [
  {
    name: "Image",
    selector: (row) => (
      <img
        className="img-fluid rounded-5 me-3"
        style={{ width: "28px", height: "28px" }}
        src={row.user.avatar}
        alt="image"
      />
    ),
    sortable: true,
    grow: 2,
    reorder: true,
  },

  {
    name: "User",
    selector: (row) => row.user.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Product",
    selector: (row) =>
      row.products.map((p, index) => {
        return <div key={index}>{p.name}</div>;
      }),
    sortable: true,
    reorder: true,
  },
  {
    name: "FeedBack",
    selector: (row) => row.comment,
    sortable: true,
    reorder: true,
  },
  {
    name: "Rating",
    selector: (row) =>
      Array.from({ length: row.ratingValue }, (_, index) => (
        <TiStar className="text-warning" key={index} />
      )),
    sortable: true,
    reorder: true,
  },
  {
    name: "FeedBack",
    selector: (row) => (
      <>
        <ActionUpdateUserReview id={row.id} />
        <ActionDeleteUserReview id={row.id} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
