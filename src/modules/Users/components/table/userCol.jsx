import { Link } from "react-router-dom";
import ActionUpdate from "./ActionUpdate"; // Corrected import
import Active_InActive from "./Active&InActive";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

export const Usercolumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    grow: 2,
    reorder: true,
  },
  {
    name: "Roles",
    selector: (row) => row?.roleEntity?.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
    reorder: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
    reorder: true,
  },
  {
    name: "Bio",
    selector: (row) => row.bio,
    sortable: true,
    reorder: true,
  },
  {
    name: "Status",
    selector: (row) => <Active_InActive uuid={row.uuid} status={row.status} />,
    sortable: true,
    reorder: true,
  },
  {
    name: "View",
    cell: (row) => (
      <Link to={`/users/${row.uuid}`}>
        <HiOutlineViewfinderCircle className="fs-5 text-dark icon_hover " />
      </Link>
    ),

    sortable: true,
    reorder: true,
  },
  {
    name: "Action",
    cell: (row) => <ActionUpdate uuid={row.uuid} />,
    sortable: true,
    reorder: true,
  },
];
