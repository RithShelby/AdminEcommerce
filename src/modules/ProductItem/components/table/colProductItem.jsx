import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import ActionUpdateProductItem from "./ActionUpdate";
import ActionDeleteProductItem from "./ActionDelete";
import { Link } from "react-router-dom";

export const ProductItemColunm = [
  {
    name: "Image",
    selector: (row) => (
      <img
        className="img-fluid rounded-5 me-3"
        style={{ width: "28px", height: "28px" }}
        src={row.image}
        alt="image"
      />
    ),
    sortable: true,
    grow: 0,
    reorder: true,
  },

  {
    name: "Name",
    selector: (row) => row.product.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Category",
    selector: (row) => row.product.category.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
    reorder: true,
  },
  {
    name: "Stock",
    selector: (row) => row.quantity,
    sortable: true,
    reorder: true,
  },
  {
    name: "View",
    cell: (row) => (
      <Link to={`/product_items/${row.id}`}>
        <HiOutlineViewfinderCircle className="fs-5 text-dark icon_hover " />
      </Link>
    ),
    sortable: true,
    reorder: true,
  },
  {
    name: "Action",
    selector: (row) => (
      <>
        <ActionUpdateProductItem id={row.id} />
        <ActionDeleteProductItem id={row.id} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
