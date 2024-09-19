import React from "react";
import ActionCell from "../../../widget/ActionCell";
export const columnCart = [
    {
        name: "Name",
        cell: (row) => (
            <div>
                <span>{row.productItem.name}</span>
                <img src={row.productItem.image} style={{ width: "28px" }}
                     className="img-fluid rounded-3" alt={row.productItem.name} />
            </div>
        )
    },
    {
        name: "Category",
        selector: (row)=> row.productItem?.product.category.name,
        sortable: true,
        reorder:true,
    },
    {
        name: "Price",
        selector: (row)=>row.productItem.price.toFixed(2),
        sortable: true,
        reorder:true,
    },
    {
        name: "Quantity",
        selector: (row)=>row.quantity,
        sortable: true,
        reorder:true,
    },
    {
        name: "Action",
        selector: (row)=>(
          <ActionCell/>
        ),
        sortable: true,
        reorder:true,
    },
];
