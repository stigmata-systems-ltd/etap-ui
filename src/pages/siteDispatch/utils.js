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
    {
      name: "Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Created Date",
      selector: "createdDateTime",
      sortable: false,
    },

    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        return (
          <>
            <IconButton
              id={row.dispatchRequestSubContractorId}
              iconName="faEdit"
              onClick={() => handleUpdate(row.dispatchRequestSubContractorId)}
            />
            <Button btnText="View More" btnType="btn-primary btn-sm" />
          </>
        );
      },
    },
  ];
};
