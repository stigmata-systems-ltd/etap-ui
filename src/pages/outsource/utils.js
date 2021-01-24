
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

export const outSourcingSiteApprovalMetaData = (handleApprove,handleReject,handleMore) => {
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
        {
            name: 'Quantity Requested',
            selector: 'quantityRequested',
            sortable: false,
        },
        {
            name: 'Vendor',
            selector: 'vendor',
            sortable: false,
        },
        {
            name: 'Monthly Rent',
            selector: 'monthlyRent',
            sortable: false,
        },
        {
            name: "Actions",
            sortable: false,
            cell: (row) => {
                
                return (
                    <>
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
                        {
                            <IconButton
                                iconName="faEye"
                                onClick={() => handleMore(row.id)}
                            />
                        }

                    </>
                );
            },
        },
    ];
};
