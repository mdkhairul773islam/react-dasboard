import React, { useState, useMemo } from "react";
import KitchenSinkStory from "react-data-table-component";
import FilterComponent from "./FilterComponent";

function Table(props) {
  // Filter Code Start
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

  const filteredItems = props.data.filter(
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
      pointerOnHover
      responsive
      striped
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
}

export default Table;
