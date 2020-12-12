import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listWBSMetaData = (handleDelete, handleEdit) => {
    return [
      
      {
        name: 'WBS',
        selector: 'wbs',
        sortable: false,
      },
      {
        name: 'Segment',
        selector: 'segment',
        sortable: false,
      },
      {
        name: 'SubSegment',
        selector: 'subSegment',
        sortable: false,
      },
      {
        name: 'Element',
        selector: 'element',
        sortable: false,
      },
      
    ];
  };

  export const transformWBSData = wbsArray => {
    let tmpArr = [];
    let statusValue;
    wbsArray &&
    wbsArray.map(component => {
        
        let tmpObj = {
            wbs: component.wbs,
            segment: component.segment,
            subSegment: component.subSegment,
            element: component.element
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };





// export const _viewComponentData = ["IC", "BU", "Project", "Structure Family", "Structure", "Structure ID", "Component Type", "Component", "Component ID", "Group", "Component No", "Drawing No", "Length", "Breadth", "Height", "Thickness", "Weight", "Original/Modified", "Modification No", "Manufactured/Fabricated", "Tag", "QR Code", "Vendor/Site Name", "Fabrication Cost", "Component Status", "Current Status"];
// export const _viewComponentBodyData = [
//     {
//         ic: "",
//         bu: "",
//         project: "",
//         structureFamily: "",
//         structure: "",
//         structureId: "",
//         componentType: "",
//         component: "",
//         componentId: "",
//         group: "",
//         componentNo: "",
//         drawingNo: "",
//         length: "",
//         breadth: "",
//         height: "",
//         thickness: "",
//         weight: "",
//         original: "",
//         modificationNo: "",
//         fabrication: "",
//         tag: "",
//         qrCode: "",
//         vendor: "",
//         fabricationCost: "",
//         componentStatus: "",
//         currentStatus: "",
//     },
    
// ];

// export const _viewComponentModificationHistoryData = [ "Structure ID", "Component Type", "Component", "Component ID", "Group", "Component No", "Drawing No", "Length", "Breadth", "Height", "Thickness", "Weight", "Original/Modified", "Modification No", "Manufactured/Fabricated", "Tag No", "QR Code"];
// export const _viewComponentModificationHistoryBodyData = [
//     {
        
//         structureId: "",
//         componentType: "",
//         component: "",
//         componentId: "",
//         group: "",
//         componentNo: "",
//         drawingNo: "",
//         length: "",
//         breadth: "",
//         height: "",
//         thickness: "",
//         weight: "",
//         original: "",
//         modificationNo: "",
//         fabrication: "",
//         tag: "",
//         qrCode: "",
        
        
//     },
    
// ];

