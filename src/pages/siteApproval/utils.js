
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
            sortable: false,

        },
        {
            name: 'DC No',
            selector: 'dispatchNo',
            sortable: false,
        },
        {
            name: 'Structure Name',
            selector: 'structureName',
            sortable: false,
        },
        // {
        //     name: 'Vendor',
        //     selector: 'subContractorName',
        //     sortable: false,
        // },
        {
            name: 'Service Type',
            selector: 'serviceType',
            sortable: false,
        },
        {
            name: 'Created Date & Time',
            selector: 'createdDateTime',
            sortable: false,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: false,
        },
        // {
        //     name: 'Quantity',
        //     selector: 'quantity',
        //     sortable: false,
        // },
        // {
        //     name: 'Fabrication Cost',
        //     selector: 'fabricationCost',
        //     sortable: false,
        // },
        // {
        //     name: 'To Site',
        //     selector: 'toSite',
        //     sortable: false,
        // },
        {
            name: "Actions",
            sortable: false,
           

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
