import TablePaginationActions from "./TablePaginationActions";

export const CustomMaterialPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) => (
  <TablePaginationActions
    component="nav"
    count={rowCount}
    rowsPerPage={rowsPerPage}
    page={currentPage - 1}
    onChangePage={onChangePage}
    onChangeRowsPerPage={({ target }) =>
      onChangeRowsPerPage(Number(target.value))
    }
    ActionsComponent={TablePaginationActions}
  />
);
