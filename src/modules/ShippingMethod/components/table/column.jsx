import ActionCell from "../../../widget/ActionCell";

export const columnShipping = [
    {
        name: "Name",
        selector: (row)=>row.name,
        sortable: true,
        reorder: true,
    },
    {
        name: "Price",
        selector: (row)=>row.price,
        sortable: true,
        reorder: true,
    },
    {
        name: "Action",
        selector: (row)=> (<ActionCell/>),
        sortable: true,
        reorder: true,
    }
]