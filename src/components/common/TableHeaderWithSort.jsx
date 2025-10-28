import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function TableHeaderWithSort({ title, column, dispatch }) {
  const handleSort = (type) => {
    dispatch({ type, payload: column });
  };

  return (
    <th className="align-middle">
      <div className="d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <Dropdown as={ButtonGroup} size="sm">
          <Dropdown.Toggle
            variant="outline-secondary"
            id={`dropdown-sort-${column}`}
          >
            Sortuj
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSort("sort_asc")}>
              Rosnąco (A-Z, 0-9)
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("sort_desc")}>
              Malejąco (Z-A, 9-0)
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleSort("sort_natural")}>
              Kolejność naturalna
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </th>
  );
}

TableHeaderWithSort.propTypes = {
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TableHeaderWithSort;
