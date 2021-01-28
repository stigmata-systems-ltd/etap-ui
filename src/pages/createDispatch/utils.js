import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const createDispatchMetaData = (handleEditIconPress) => {
  return [
    {
      name: "MR Number",
      selector: "mrNo",
      sortable: false,
    },

    {
      name: "Project",
      selector: "projectName",
      sortable: false,
    },
    {
      name: "Project ID",
      selector: "projectId",
      sortable: false,
    },
    {
      name: "Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        return (
          <>
            <IconButton
              id={row.id}
              iconName="faEdit"
              onClick={() => handleEditIconPress(row.id)}
            />
          </>
        );
      },
    },
  ];
};

export const dispatchStructureMetaData = () => {
  return [
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: false,
    },
    {
      name: "Structure ID",
      selector: "structureCode",
      sortable: false,
    },
    {
      name: "Project",
      selector: "projectName",
      sortable: false,
    },
    {
      name: "Availability",
      sortable: false,
      cell: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      name: "Available Project",
      selector: "availProjectName",
      sortable: false,
    },
  ];
};

export const lstVerifyStructureQtyMetaData = () => {
  return [
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: false,
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: false,
    },
  ];
};
