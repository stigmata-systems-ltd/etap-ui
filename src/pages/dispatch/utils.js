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
        sortable: false,
      },
      {
        name: "Structure Name",
        selector: "structureName",
        sortable: false,
      },
      {
        name: "Structure ID",
        selector: "structureID",
        sortable: false,
      },
      {
        name: "Quantity Requested",
        selector: "quantityRequested",
        sortable: false,
      },
      {
        name: "Request Status",
        selector: "requestStatus",
        sortable: false,
      },
      {
        name: "Availability",
        selector: "availability",
        sortable: false,
      },
      {
        name: "Available Project",
        selector: "availableProject",
        sortable: false,
      },
      {
        name: "Project Id",
        selector: "projectId",
        sortable: false,
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