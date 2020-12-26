import React from 'react';
import IconButton from '../../common/forms/IconButton';
import { Link } from 'react-router';

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

export const listAssignedStructureMetaData = (handleComponentCheck, handleMore) => {
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
        cell: row => {
          return (
            <>
              {(
                <a href="#" onClick={() => {handleComponentCheck(row.structureID,row.projectID)}}>{row.structureID}</a>
              )}
            </>
          );
        },
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


  export const listAssignedComponentMetaData = (handleDelete, handleMore) => {
    return [
      {
        name: 'Component NO',
        selector: 'componentNo',
        sortable: false,
      },
      {
        name: 'Component',
        selector: 'component',
        sortable: false,
      },
      {
        name: 'Component ID',
        selector: 'componentID',
        sortable: false,
      },
      {
        name: 'Component Family',
        selector: 'componentFamily',
        sortable: false,
      },
      {
        name: 'Drawing Number',
        selector: 'drawingNumber',
        sortable: false,
      },
      {
        name: 'O/M',
        selector: 'oM',
        sortable: false,
      },
      {
        name: 'Mod No',
        selector: 'modNo',
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

  export const transformAssignedComponentList = assignComponentList => {
    console.log("+++++++++")
      console.log(assignComponentList)
      console.log("+++++++++")
    let tmpArr = [];
    assignComponentList &&
    assignComponentList.map((assignComponent,i) => {
        
        let tmpObj = {
          componentNo:assignComponent.componentNo,
          component: assignComponent.compId,
          componentID: assignComponent.compId,
          componentFamily: assignComponent.compTypeId,
          drawingNumber: assignComponent.drawingNo,
          oM: assignComponent.compStatus,
          modNo: assignComponent.compStatus,
          id:i
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };
