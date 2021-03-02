
import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";

export const physicalVerificationMetaData = (handleMore) => {
    return [

        {
            name: 'Structure Name',
            selector: 'mrNo',
            sortable: true,

        },
        {
            name: 'Structure Code',
            selector: 'dispatchNo',
            sortable: true,
        },
        {
            name: 'Structure Family',
            selector: 'structureName',
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
