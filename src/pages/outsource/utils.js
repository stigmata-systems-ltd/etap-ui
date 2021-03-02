
import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";


export const _newFabricationInputData = ["MR No", "Structure Family", "Structure ID", "Quantity Requested"];
export const _newFabricationBodyData = [
    {

        mrNo: "",
        structureFamily: "",
        structureId: "",
        quantityRequired: "",



    },


];

export const outSourcingSiteApprovalMetaData = (handleApprove, handleReject, handleMore) => {
    return [

        // {
        //     name: 'MR No',
        //     selector: 'mrNo',
        //     sortable: true,

        // },
        // {
        //     name: 'DC No',
        //     selector: 'dispatchNo',
        //     sortable: true,
        // },
        // {
        //     name: 'Structure Name',
        //     selector: 'structureName',
        //     sortable: true,
        // },
        // {
        //     name: 'Quantity Requested',
        //     selector: 'quantityRequested',
        //     sortable: true,
        // },
        // {
        //     name: 'Vendor',
        //     selector: 'vendor',
        //     sortable: true,
        // },
        // {
        //     name: 'Monthly Rent',
        //     selector: 'monthlyRent',
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
                                iconName="faEye"
                                onClick={() => handleMore(row.siteRequestId)}
                            />
                        }

                    </>
                );
            },
        },
    ];
};
