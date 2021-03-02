import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const siteDispatchMetaData = (handleUpdate) => {
  return [
    // {
    //   name: "MR Number",
    //   selector: "mrNo",
    //   sortable: true,
    // },
    {
      name: "DC Number",
      selector: "dispatchNo",
      sortable: true,
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Structure Code",
      selector: "structId",
      sortable: true,
    },
    {
      name: "No. of Components",
      selector: "structId",
      sortable: true,
    },
    {
      name: "Requested By",
      selector: "structId",
      sortable: true,
    },
    {
      name: "Quantity Requested",
      selector: "structId",
      sortable: true,
    },
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: true,
    // },
    {
      name: "Actions",
      sortable: true,
      center: true,
      cell: (row) => {
        return (
          <div className="row">
            <div className="col-md-5">
              <IconButton
                id={row.dispatchId}
                iconName="faEdit"
                onClick={() => handleUpdate(row.dispatchId)}
              />
            </div>
            <div className="col-md-5">
              {/* <Button btnText="View More" btnType="btn-primary btn-sm" /> */}
              <IconButton
                id={row.dispatchId}
                iconName="faList"
                onClick={() => {}}
              />
            </div>
          </div>
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
