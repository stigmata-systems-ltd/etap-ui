import React from "react";
import IconButton from "../../common/forms/IconButton";
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
export const twccDispatchMetaData = (
  redirectToDispatchStructure,
  handleMore
) => {
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

      cell: (row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={() => {
                  redirectToDispatchStructure(row.projectId);
                }}
              >
                {row.structureName}
              </a>
            }
          </>
        );
      },
    },
    {
      name: "Req By",
      selector: "projectId",
      sortable: false,
    },
    {
      name: "Raised By",
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
              iconName="faEdit"
              onClick={() => handleMore(row.id)}
            />
          </>
        );
      },
    },
  ];
};


export const transformDropDownData = (data, valueKey, labelKey) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      tmpArr.push({
        label: dt[labelKey],
        value: dt[valueKey],
      });
    });
  return tmpArr;
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
                disabled={row.dispStructureStatus === "DISPATCHED" ? true : false}
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
export const twccdispatchStructureMetaData = (setSelectedStructures , handleMore) => {
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
                disabled={row.dispStructureStatus === "DISPATCHED" ? true : false}
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
      name: "Availability",
      selector: "structureCode",
      sortable: false,
      cell: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      name: "Avail.Site",
      selector: "projectName",
      sortable: false,
    },
    {
      name: "Avail.Date",
      sortable: false,
      selector: "projectName",

    },
    {
      name: "Attribute",
      selector: "dispStructureStatus",
      sortable: false,
    },
    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        return (
          <>
            <IconButton
              iconName="faEdit"
              onClick={() => handleMore(row.id)}
            />
          </>
        );
      },
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