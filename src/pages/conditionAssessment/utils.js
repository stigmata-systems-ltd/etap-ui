import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const conditionAssessmentMetaData = (handleApprove, handleReject) => {
  return [
    {
      name: "MR Number",
      selector: "mrNo",
      sortable: true,
    },
    {
      name: "DA Number",
      selector: "dispatchNo",
      sortable: true,
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Structure ID",
      selector: "structureId",
      sortable: true,
    },
    {
      name: "Structure Family",
      selector: "structureFamily",
      sortable: true,
    },

    {
      name: "Actions",
      sortable: true,
      cell: (row) => {
        return (
          <>
            {/* <IconButton
              id={row.dispatchId}
              iconName="faEdit"
              onClick={() => handleUpdate(row.dispatchId)}
            /> */}
            {
              <IconButton
                iconName="faThumbsUp"
                onClick={() => handleApprove(row.id)}
              />

            }
            {
              <IconButton
                iconName="faThumbsDown"
                onClick={() => handleReject(row.id)}
              />
            }
          </>
        );
      },
    },
  ];
};

export const fabricationTableMetaData = (handleDelete) => {
  return [
    {
      sortable: true,
      cell: (row) => {
        return (
          <>
            <IconButton
              iconName="faTimes"
              className={"table-delete-icon"}
              onClick={() => handleDelete(row.structureId)}
            />
          </>
        );
      },
      width: "2%",
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Vendor Name",
      selector: "vendorName",
      sortable: true,
    },
    {
      name: "Fabrication cost",
      selector: "fabricationCost",
      sortable: true,
    },
  ];
};

export const outSourcingTableMetaData = (handleDelete) => {
  return [
    {
      sortable: true,
      cell: (row) => {
        return (
          <>
            <IconButton
              iconName="faTimes"
              className={"table-delete-icon"}
              onClick={() => handleDelete(row.structureId)}
            />
          </>
        );
      },
      width: "2%",
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Vendor Name",
      selector: "vendorName",
      sortable: true,
    },
    {
      name: "Monthly Rent",
      selector: "monthlyRent",
      sortable: true,
    },
    {
      name: "Contract Years",
      selector: "contractYears",
      sortable: true,
    },
    {
      name: "Planned Release Date",
      selector: "plannedReleaseDate",
      sortable: true,
    },
    {
      name: "Actual Start Date",
      selector: "actualStartDate",
      sortable: true,
    },
    {
      name: "Expected Release Date",
      selector: "expectedReleaseDate",
      sortable: true,
    },
  ];
};

export const transformStructureListData = (structureListCode) => {
  let tempArr = [];
  structureListCode.map((item) => {
    tempArr.push({
      value: item.id,
      label: item.structureName,
    });
  });

  return tempArr;
};

export const transformVendorCodeListData = (vendorCodeList) => {
  let tempArr = [];
  vendorCodeList.map((item) => {
    tempArr.push({
      value: item.id,
      label: item.name,
    });
  });

  return tempArr;
};
