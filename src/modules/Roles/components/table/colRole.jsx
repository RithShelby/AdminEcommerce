import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ActionUpdateRole from "./ActionUpdate";
import ShowRole from "../ShowRole";
import PermissionAction from "./PermissionAction";

export const RoleColumn = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    grow: 2,
    reorder: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Code",
    selector: (row) => row.code,
    sortable: true,
    reorder: true,
  },
  {
    name: "View",
    selector: (row) => <PermissionAction id={row.id} />,
    sortable: true,
    reorder: true,
  },
  {
    name: "Action",
    selector: (row) => <ActionUpdateRole id={row.id} />,
    sortable: true,
    reorder: true,
  },
];
