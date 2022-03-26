import React, { useState, useMemo } from "react";
import KitchenSinkStory from "react-data-table-component";
import FilterComponent from "./FilterComponent";

function Table(props) {
  // Filter Code Start
  const data = props.data.length > 0 ? props.data : [];
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  // Filter Code End

  const filteredItems = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );
  return (
    <KitchenSinkStory
      columns={props.columns}
      data={filteredItems}
      progressPending={props.loading}
      highlightOnHover
      pagination
      paginationServer
      paginationTotalRows={props.totalRows}
      paginationDefaultPage={props.currentPage}
      onChangeRowsPerPage={props.handlePerRowsChange}
      onChangePage={props.handlePageChange}
      selectableRows
      onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
      pointerOnHover
      responsive
      striped
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
}

export default Table;
