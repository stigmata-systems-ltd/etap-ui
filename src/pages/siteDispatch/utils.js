import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const siteDispatchMetaData = (handleUpdate) => {
  return [
    {
      name: "MR Number",
      selector: "mrNo",
      sortable: false,
    },
    {
      name: "DC Number",
      selector: "dispatchNo",
      sortable: false,
    },
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: false,
    // },
    {
      name: "Structure Code",
      selector: "structId",
      sortable: false,
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: false,
    },
    {
      name: "Quantity Assigned",
      selector: "createdDateTime",
      sortable: false,
    },
    {
      name: "Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Actions",
      center: true,
      sortable: false,
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
