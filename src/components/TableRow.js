import React from "react";

function TableRow({
  id,
  description,
  semester,
  prefix,
  number,
  grade,
  editing,
  handleEdit,
}) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{description}</td>
        <td>{semester}</td>
        <td>{prefix}</td>
        <td>{number}</td>
        <td>{grade}</td>
        <td>
          <a
            className="btn btn-warning btn-rounded"
            onClick={(event) =>
              handleEdit(
                event,
                id,
                description,
                semester,
                prefix,
                number,
                grade
              )
            }
          >
            {editing}
          </a>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
