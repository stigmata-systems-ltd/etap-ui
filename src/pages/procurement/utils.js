import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const siteDispatchMetaData = (handleUpdate) => {
  return [
    // {
    //   name: "MR Number",
    //   selector: "mrNo",
    //   sortable: false,
    // },
    {
      name: "DC Number",
      selector: "dispatchNo",
      sortable: false,
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: false,
    },
    {
      name: "Structure Code",
      selector: "structId",
      sortable: false,
    },
    {
      name: "No. of Components",
      selector: "structId",
      sortable: false,
    },
    {
      name: "Requested By",
      selector: "structId",
      sortable: false,
    },
    {
      name: "Quantity Requested",
      selector: "structId",
      sortable: false,
    },
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: false,
    // },
    {
      name: "Actions",
      sortable: false,
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
      sortable: false,
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
      sortable: false,
    },
    {
      name: "Vendor Name",
      selector: "vendorName",
      sortable: false,
    },
    {
      name: "Fabrication cost",
      selector: "fabricationCost",
      sortable: false,
    },
  ];
};

export const outSourcingTableMetaData = (handleDelete) => {
  return [
    {
      sortable: false,
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
      sortable: false,
    },
    {
      name: "Vendor Name",
      selector: "vendorName",
      sortable: false,
    },
    {
      name: "Monthly Rent",
      selector: "monthlyRent",
      sortable: false,
    },
    {
      name: "Contract Years",
      selector: "contractYears",
      sortable: false,
    },
    {
      name: "Planned Release Date",
      selector: "plannedReleaseDate",
      sortable: false,
    },
    {
      name: "Actual Start Date",
      selector: "actualStartDate",
      sortable: false,
    },
    {
      name: "Expected Release Date",
      selector: "expectedReleaseDate",
      sortable: false,
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
