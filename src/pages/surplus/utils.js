import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";
import { getUserDetails } from "../../utils/auth";

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
        selector: "projectName",
        sortable: true,
       
      },
      {
        name: "Structure Name",
        selector: "structureName",
        sortable: true,
        
      },
      {
        name: "Structure Family",
        selector: "structureTypeName",
        sortable: true,
        
      },
      {
        name: "Surplus Date",
        selector: "surplusDate",
        sortable: true,
        
      },
      
      {
        name: "Status",
        selector: "status",
        sortable: true,
      },
      {
        name: "Action",
        sortable: true,
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
      let dateArray=surplus.surplusDate.split('T')
        let tmpObj = {
            siteReqId: surplus.siteReqId,
            projectName: surplus.projectName,
            structureName: surplus.structureName,
            structureTypeName: surplus.structureTypeName,
            surplusDate: dateArray[0],
            status: surplus.status,
            id: i,
            isAction: surplus.isAction
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };

  export const transformProjectValue = () => {
    const userDetails = getUserDetails();
    return userDetails.projectName
  };