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
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: true,
    // },
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
      name: "Quantity Assigned",
      selector: "createdDateTime",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Actions",
      center: true,
      sortable: true,
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
                onClick={() => { }}
              />
            </div>
          </div>
        );
      },
    },
  ];
};
