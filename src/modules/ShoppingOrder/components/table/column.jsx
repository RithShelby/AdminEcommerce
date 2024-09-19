import React from "react";
import ActionCell from "../../../widget/ActionCell";

export const ShopOrderColumn = [
    {
        name: "Product Name",
        selector: (row) => (
            <>
                {row.orderLines?.map((line) => (
                    <div key={line.id} className="d-flex align-items-center">
                        <img
                            className="img-fluid rounded-3 me-3"
                            style={{ width: "28px", height: "28px" }}
                            src={line.productItem.image}
                            alt="product"
                        />
                        <p>{line.productItem.product.name}</p>
                    </div>
                ))}
            </>
        ),
        sortable: true,
        reorder: true,
    },
    {
        name: "Price",
        selector: (row) => (
            <>
                {row.orderLines?.map((line) => (
                    <div key={line.id}>
                        ${line.price}
                    </div>
                ))}
            </>
        ),
        sortable: true,
        reorder: true,
    },
    {
        name: "Category",
        selector: (row) => (
            <>
                {row.orderLines?.map((line) => (
                    <div key={line.id}>
                        {line.productItem.product.category.name}
                    </div>
                ))}
            </>
        ),
        sortable: true,
        reorder: true,
    },
    {
        name: "Shipping Method",
        selector: (row) => row.shippingMethod?.name,
        sortable: true,
        reorder: true,
    },
    {
        name: "Cash",
        selector: (row) => `$${row.shippingMethod?.price}`,
        sortable: true,
        reorder: true,
    },
    {
        name: "Qty",
        selector: (row) => (
            <>
                {row.orderLines?.map((line) => (
                    <div key={line.id}>
                        {line.quantity}
                    </div>
                ))}
            </>
        ),
        sortable: true,
        reorder: true,
    },
    {
        name: "Status",
        selector: (row) => (
            <span className="badge text-bg-info text-light">
        {row.orderStatus?.status}
      </span>
        ),
        sortable: true,
        reorder: true,
    },
    {
        name: "Address",
        selector: (row) => row.shippingAddress,
        sortable: true,
        reorder: true,
    },
    {
        name: "Action",
        selector: (row) => (
            <ActionCell/>
        ),
        sortable: true,
        reorder: true,
    },
];