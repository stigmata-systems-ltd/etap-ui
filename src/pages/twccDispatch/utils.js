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
            sortable: true,

        },

        {
            name: "Structure Name",
            selector: "structureName",
            sortable: true,
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
            sortable: true,
        },
        {
            name: "Raised By",
            selector: "raisedBy",
            sortable: true,
            width: "90px"
        },

        {
            name: "Req Status",
            selector: "requestStatus",
            sortable: true,
            width: "80px"
        },
        {
            name: "Actions",
            sortable: true,
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