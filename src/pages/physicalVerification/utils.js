
import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";

export const physicalVerificationMetaData = (handleMore) => {
    return [

        {
            name: 'Structure Name',
            selector: 'mrNo',
            sortable: false,

        },
        {
            name: 'Structure Code',
            selector: 'dispatchNo',
            sortable: false,
        },
        {
            name: 'Structure Family',
            selector: 'structureName',
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
