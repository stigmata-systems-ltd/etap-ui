import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const _viewSurplusInputData = ["Structure Family", "Structure ID", "Existing Site", "Surplus Form", "Photo", "Action"];
export const _viewSurplusInputBodyData = [
    {

        structureFamily: "",
        structureId: "",
        existingSite: "",
        surplusForm: "",
        photo: "",
        action: "",

    },
  
    {

        structureFamily: "",
        structureId: "",
        existingSite: "",
        surplusForm: "",
        photo: "",
        action: "",

    },
  
    {

        structureFamily: "",
        structureId: "",
        existingSite: "",
        surplusForm: "",
        photo: "",
        action: "",

    },
  

];

export const listViewSurplusMetaData = (
    handleApprove,
    handleReject,
    handleMore
  ) => {
    return [
      {
        name: "Project",
        selector: "siteReqId",
        sortable: false,
      },
      {
        name: "Structure Name",
        selector: "structureName",
        sortable: false,
      },
      {
        name: "Structure Type Name",
        selector: "structureTypeName",
        sortable: false,
      },
      {
        name: "Surplus Date",
        selector: "surplusDate",
        sortable: false,
      },
      
      {
        name: "Status",
        selector: "status",
        sortable: false,
      },
      {
        name: "Action",
        sortable: false,
        cell: (row) => {
          console.log(`Row Action: ${row.isAction}`)
          if(row.isAction == "1"){
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
          } else {
            return (
              <>
                {
                    <IconButton
                    iconName="faEye"
                    onClick={() => handleMore(row.id)}
                  />
                }
              </>
            );
          }
          
        },
      },
    ];
  };
  
  export const transformViewSurplusList = (surplusList) => {
    let tmpArr = [];
    surplusList &&
    surplusList.map((surplus, i) => {
        let tmpObj = {
            siteReqId: surplus.siteReqId,
            structureName: surplus.structureName,
            structureTypeName: surplus.structureTypeName,
            surplusDate: surplus.surplusDate,
            status: surplus.status,
            id: i,
            isAction: surplus.isAction
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };