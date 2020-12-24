import React from 'react';
import IconButton from '../../common/forms/IconButton';

export const _componentInputData = ["IC", "BU", "Project", "Structure Family", "Structure", "Structure ID", , "Component Type", "Component", "Component ID", "Group", "Component No", "Drawing No", "Length", "Breadth", "Height", "Thickness", "Weight", "Type", "Tag"];
export const _componentInputBodyData = [
    {
        ic: "Auto",
        bu: "Auto",
        project: "Auto",
        structureFamily: "Auto",
        structure: "Auto",
        structureId: "LG-ABC",
        componentType: "",
        component: "",
        componentId: "Auto",
        group: "",
        componentNumber: "Auto",
        drawingNumber: "",
        length: "",
        breadth: "",
        height: "",
        thickness: "",
        weight: "",
        type: "",
        tag: "",
    },


];
export const _assignStructureInputData = ["S.no", "Description", "Type of Input", "UoM"];
export const _assignStructureBodyData = [
    {
        sno: "",
        description: "",
        typeOfInput: "",
        uom: "",
        
    },
    {
        sno: "",
        description: "",
        typeOfInput: "",
        uom: "",
        
    },


];

export const listAssignedStructureMetaData = (handleDelete, handleMore) => {
    return [
      {
        name: 'Structure Name',
        selector: 'structureName',
        sortable: false,
      },
      {
        name: 'Structure ID',
        selector: 'structureID',
        sortable: false,
      },
      {
        name: 'Project Name',
        selector: 'projectName',
        sortable: false,
      },
      {
        name: 'Drawing Number',
        selector: 'drawingNo',
        sortable: false,
      },
      {
        name: 'Components Count',
        selector: 'componentsCount',
        sortable: false,
      },
      {
        name: 'Actions',
        sortable: false,
        cell: row => {
          return (
            <>
              {(
                <IconButton
                  iconName="faEdit"
                  onClick={() => handleMore(row.id)}
                />
              )}
            </>
          );
        },
      },
    ];
  };

  export const transformAssignedStructureList = assignStructureList => {
    console.log("+++++++++")
      console.log(assignStructureList)
      console.log("+++++++++")
    let tmpArr = [];
    assignStructureList &&
    assignStructureList.map((assignStructure,i) => {
        
        let tmpObj = {
          projectID:assignStructure.projectId,
          structureName: assignStructure.strcutureName,
          structureID: assignStructure.structureId,
          projectName: assignStructure.projectName,
          drawingNo: assignStructure.drawingNo,
          componentsCount: assignStructure.componentsCount,
          id:i
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };
