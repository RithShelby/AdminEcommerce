import ActionUpdateProductItem from "../../../ProductItem/components/table/ActionUpdate";
import ActionDeleteProductItem from "../../../ProductItem/components/table/ActionDelete";
import React from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import {Link} from "react-router-dom";
import ActionCell from "../../../widget/ActionCell";

export const categoryColumn = [
    {
        name : "Type",
        selector: (row)=> row.category.name,
        sortable: true,
        reorder: true,
    },
    {
        name:"Name",
        cell: (row)=> (
            <div className="dropend ">
                <IoIosArrowDropdown
                    className="fs-4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                />
                <ul className="dropdown-menu ms-3">
                    {row.items.map((i) => (
                        <li key={i.id}>
                            <Link
                                className="dropdown-item"
                                to={`/categories/${i.uuid}`}
                            >
                                {i.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
    {
        name: "Action",
        selector: (row) => (
           <ActionCell onEdit={row.id} onDelete={row.id}/>
        ),
        sortable: true,
        reorder: true,
    },
];
