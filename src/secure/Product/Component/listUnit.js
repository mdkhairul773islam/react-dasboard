import React from "react";
import { Link } from "react-router-dom";
import KitchenSinkStory from "react-data-table-component";

function ListUnit(props) {
  const handleButtonClick = (e) => {
    console.log(e.target.id);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.unit,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to={`/product/unit/edit/${row.id}`}
            className="btn btn-success btn-sm m-1"
          >
            <i className="fas fa-pen fa-sm"></i>
          </Link>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-trash fa-sm"></i>
          </button>
        </>
      ),
      className: "action-width",
    },
  ];

  const unitList = props.units;
  return (
    <KitchenSinkStory
      columns={columns}
      data={unitList}
      fixedHeader
      fixedHeaderScrollHeight="60vh"
      highlightOnHover
      pagination
      pointerOnHover
      responsive
      striped
    />
  );
}

export default ListUnit;
