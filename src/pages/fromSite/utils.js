import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const fromSiteApprovalMetaData = (handleApprove, handleReject) => {
    return [
        {
            name: "MR Number",
            selector: "mrNo",
            sortable: false,
        },
        {
            name: "DA Number",
            selector: "dispatchNo",
            sortable: false,
        },
        {
            name: "Structure Name",
            selector: "structureName",
            sortable: false,
        },
        {
            name: "Quantity Requested",
            selector: "quantityRequested",
            sortable: false,
        },
        {
            name: "From Site",
            selector: "fromSite",
            sortable: false,
        },
        {
            name: "To Site",
            selector: "toSite",
            sortable: false,
        },
        {
            name: "Transfer Price",
            selector: "transferPrice",
            sortable: false,
        },

        {
            name: "Actions",
            sortable: false,
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

