import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const listViewDispatchMetaData = (
    handleApprove,
    handleReject,
    handleMore
  ) => {
    return [
      {
        name: "MR Number",
        selector: "mrNo",
        sortable: true,
      },
      {
        name: "Structure Name",
        selector: "structureName",
        sortable: true,
      },
      {
        name: "Structure ID",
        selector: "structureID",
        sortable: true,
      },
      {
        name: "Quantity Requested",
        selector: "quantityRequested",
        sortable: true,
      },
      {
        name: "Request Status",
        selector: "requestStatus",
        sortable: true,
      },
      {
        name: "Availability",
        selector: "availability",
        sortable: true,
      },
      {
        name: "Available Project",
        selector: "availableProject",
        sortable: true,
      },
      {
        name: "Project Id",
        selector: "projectId",
        sortable: true,
      }
    ];
  };
  
  export const transformViewDispatchMetaData = (dispatchList) => {
    let tmpArr = [];
    dispatchList &&
    dispatchList.map((dispatch, i) => {
        let tmpObj = {
            mrNo: dispatch.mrNo,
            structureName: dispatch.structureName,
            structureID: dispatch.structureID,
            quantityRequested: dispatch.quantityRequested,
            requestStatus: dispatch.requestStatus,
            availability: dispatch.availability,
            availableProject: dispatch.availableProject,
            projectId: dispatch.projectId,
            status: dispatch.status,
            id: i,
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
};