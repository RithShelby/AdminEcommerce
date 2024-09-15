import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ActionUpdateProduct from "./ActionUpdate";
import ActionDeleteProduct from "./ActionDelete";

export const ProductColunm = [
  {
    name: "Image",
    cell: (row) => (
      <img
        className="img-fluid rounded-5"
        src={row.image}
        alt={row.name}
        style={{ width: "30px" }}
      />
    ),
    sortable: false, // Typically images are not sortable
    reorder: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    grow: 2,
    reorder: true,
  },

  {
    name: "Category",
    selector: (row) => row.category.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "View",
    cell: (row) => (
      <Link to={`/product-detail/${row.uuid}`}>
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
        <ActionUpdateProduct uuid={row.uuid} />
        <ActionDeleteProduct uuid={row.uuid} />
      </>
    ),
    sortable: true,
    reorder: true,
  },
];
