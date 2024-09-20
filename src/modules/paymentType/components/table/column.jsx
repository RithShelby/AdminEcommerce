import ActionCell from "../../../widget/ActionCell";

export const columnPaymentType = [
    {
        name: "Card",
        selector: (row)=> row.value,
        sortable: true,
        reorder: true,
    },
    {
        name: "Action",
        selector: (row)=> (<ActionCell/>),

    },
]