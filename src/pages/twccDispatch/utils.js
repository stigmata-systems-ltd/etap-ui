import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";


export const listTwccDispatchMetaData = (
    handleComponentCheck,
    handleMore
) => {
    return [
        {
            name: "MR No",
            selector: "mrno",
            sortable: false,

        },

        {
            name: "Structure Name",
            selector: "structureName",
            sortable: false,
            width: "110px",
            cell: (row) => {
                return (
                    <>
                        {
                            <a href="#"
                                onClick={() => {
                                    handleComponentCheck(row.structureId, row.projectID);
                                }}
                            >
                                {row.structureName}
                            </a>
                        }
                    </>
                );
            },
        },
        {
            name: "Req By",
            selector: "requestby",
            sortable: false,
        },
        {
            name: "Raised By",
            selector: "raisedBy",
            sortable: false,
            width: "90px"
        },

        {
            name: "Req Status",
            selector: "requestStatus",
            sortable: false,
            width: "80px"
        },
        {
            name: "Actions",
            sortable: false,
            width: "70px",
            cell: (row) => {
                return (
                    <>
                        {
                            <IconButton
                                iconName="faEdit"
                                onClick={() => handleMore(row.id)}
                            />
                        }
                    </>

                );

            },

        },

    ];

};

export const transformTwccDispatchList = (assignStructureList) => {
    let tmpArr = [];
    assignStructureList &&
        assignStructureList.map((assignStructure, i) => {
            let tmpObj = {
                projectID: assignStructure.projectId,
                structureName: assignStructure.strcutureName,
                structureId: assignStructure.structureId,
                structureCode: assignStructure.structureCode,
                structureFamily: assignStructure.strcutureTypeName,
                totalWeight: assignStructure.totalWeight,
                componentsCount: assignStructure.componentsCount,
                structureStatus: assignStructure.status,
                currentStatus: assignStructure.currentStatus,
                id: i,
            };
            tmpArr.push(tmpObj);
        });
    return tmpArr;
};