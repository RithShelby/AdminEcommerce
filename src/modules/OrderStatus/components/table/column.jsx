import ActionCell from "../../../widget/ActionCell";

export const columnOrderStatus = [
    {
        name: "Status",
        selector : (row) => row.status,
        sortable: true,
        reorder: true
    },
    {
        name: "Action",
        selector : (row) => (<ActionCell/>)
    },
]