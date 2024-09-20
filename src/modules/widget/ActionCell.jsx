import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {useSweetAlert} from "../SweetAlert";

const ActionCell = ({ item, onEdit, onDelete }) => {
    const {SuccessAlert,ConfirmDelete} = useSweetAlert();
    return (
        <div className="d-flex">
            <Link className="nav-link" onClick={() => SuccessAlert({title : "Update Success!", text : "Thank You"})}>
                <CiEdit className="fs-3" />
            </Link>
            <Link className="nav-link" onClick={() => ConfirmDelete()}>
                <MdOutlineDelete className="fs-3" />
            </Link>
        </div>
    );
};

export default ActionCell;
