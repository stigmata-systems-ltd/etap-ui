import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const toSiteApprovalMetaData = (handleApprove, handleReject) => {
    return [
        // {
        //     name: "MR Number",
        //     selector: "mrNo",
        //     sortable: true,
        // },
        // {
        //     name: "DA Number",
        //     selector: "dispatchNo",
        //     sortable: true,
        // },
        // {
        //     name: "Structure Name",
        //     selector: "structureName",
        //     sortable: true,
        // },
        // {
        //     name: "Quantity Requested",
        //     selector: "quantityRequested",
        //     sortable: true,
        // },
        // {
        //     name: "From Site",
        //     selector: "fromSite",
        //     sortable: true,
        // },
        // {
        //     name: "To Site",
        //     selector: "toSite",
        //     sortable: true,
        // },
        // {
        //     name: "Transfer Price",
        //     selector: "transferPrice",
        //     sortable: true,
        // },

        {
            name: 'MR No',
            selector: 'mrNo',
            sortable: true,

        },
        {
            name: 'DC No',
            selector: 'dispatchNo',
            sortable: true,
        },
        {
            name: 'Structure Name',
            selector: 'structureName',
            sortable: true,
        },

        {
            name: 'Service Type',
            selector: 'serviceType',
            sortable: true,
        },
        {
            name: 'Created Date & Time',
            selector: 'createdDateTime',
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
                                onClick={() => handleApprove(row.siteRequestId)}
                            />

                        }
                        {
                            <IconButton
                                iconName="faThumbsDown"
                                onClick={() => handleReject(row.siteRequestId)}
                            />
                        }
                    </>
                );
            },
        },
    ];
};

