import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";
import CheckBox from "../../common/forms/CheckBox";

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

export const dispatchStructureMetaData = (setSelectedStructures) => {
  return [
    {
      sortable: false,
      cell: row => {
        return (
          <>
            { (
              <CheckBox
                checked={row.checked}
                onChange={() => setSelectedStructures(row)}
                disabled={row.dispStructureStatus === "DISPATCHED"?true:false}
              />
            )}
          </>
        );
      },
      width: '2%',
    },
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
      name: "Dispatch Structure Status",
      selector: "dispStructureStatus",
      sortable: false,
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


export const transformdispatchStructure = dispatchStructure => {
  let tmpArr = [];
  let statusValue;
  dispatchStructure &&
  dispatchStructure.map(structure => {
      
      let tmpObj = {
        structureName: structure.structureName,
        structureCode: structure.structureCode,
        projectName: structure.projectName,
        dispStructureStatus: structure.dispStructureStatus,
        availProjectName: structure.availProjectName,
        checked: structure.checked,
        availProjectId: structure.availProjectId
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};