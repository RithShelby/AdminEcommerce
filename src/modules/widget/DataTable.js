import React from "react";
import DataTable from "react-data-table-component";
const TableGlobal = ({
  columns,
  data,
  handleChange,
  toggledClearRows,
  productPagination,
  permission,
}) => {
  return (
    <DataTable
      permission={permission}
      columns={columns}
      data={data}
      pagination
      selectableRows
      onSelectedRowsChange={handleChange}
      clearSelectedRows={toggledClearRows}
      paginationComponent={productPagination}
    />
  );
};

export default TableGlobal;
