import ActionCell from "../../../widget/ActionCell";
export const columnPayment = (handleDelete)=> [
    {
        name: "UserName",
        selector: (row)=> row.user.name,
        sortable: true,
        reorder: true,
    },
    {
        name: "Card",
        selector: (row)=> row.paymentType.value,
        sortable: true,
        reorder: true,
    },
    {
        name: "Provider",
        selector: (row)=> row.provider,
        sortable: true,
        reorder: true,
    },
    {
        name: "CardNumber",
        selector: (row)=> row.accountNumber,
        sortable: true,
        reorder: true,
    },
    {
        name: "Action",
        cell: (row)=> (<ActionCell item={row} onDelete={handleDelete} />),
    }

]