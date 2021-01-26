import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const createDispatchMetaData = () => {
  return [
    {
      name: "MR Number",
      selector: "mrNo",
      sortable: false,
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: false,
    },
    {
      name: "Structure ID",
      selector: "structureId",
      sortable: false,
    },
    {
      name: "Project",
      selector: "projectName",
      sortable: false,
    },
    {
      name: "Quantity Requested",
      selector: "quantityRequested",
      sortable: false,
    },
    {
      name: "Req Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Availability",
      selector: "availability",
      sortable: false,
    },
    {
      name: "Available Project",
      selector: "availableProject",
      sortable: false,
    },
  ];
};
