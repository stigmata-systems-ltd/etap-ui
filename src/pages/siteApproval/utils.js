
import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";

// export const _siteApprovalInputData = ["S.No", "Structure Family", "Structure ID", "Quantity Requested", "Vendor", "To Site", "Fabrication Cost", "Remarks", "Action"];
// export const _siteApprovalBodyData = [
//     {

//         sno: "",
//         structureFamily: "",
//         structureId: "",
//         quantityRequested: "",
//         vendor: "",
//         toSite: "",
//         fabricationCost: "",
//         remarks: "",


//     },


// ];





export const siteApprovalMetaData = (handleApprove, handleReject, handleMore) => {
    return [

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
        // {
        //     name: 'Vendor',
        //     selector: 'subContractorName',
        //     sortable: true,
        // },
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
            name: 'Status',
            selector: 'status',
            sortable: true,
        },
        // {
        //     name: 'Quantity',
        //     selector: 'quantity',
        //     sortable: true,
        // },
        // {
        //     name: 'Fabrication Cost',
        //     selector: 'fabricationCost',
        //     sortable: true,
        // },
        // {
        //     name: 'To Site',
        //     selector: 'toSite',
        //     sortable: true,
        // },
        {
            name: "Actions",
            sortable: true,
           

            cell: (row) => {

                return (
                    <>
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
                        {
                            <IconButton
                                iconName="faList"
                                onClick={() => handleMore(row.siteRequestId)}
                            />
                        }

                    </>
                );
            },

        },
    ];
};
