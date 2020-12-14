import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listProjectMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'Name',
        selector: 'name',
        sortable: false,
      },
      {
        name: 'Project Code',
        selector: 'projCode',
        sortable: false,
      },
      {
        name: 'Area',
        selector: 'area',
        sortable: false,
      },
      {
        name: 'IC Id',
        selector: 'icId',
        sortable: false,
      },
      {
        name: 'BU Id',
        selector: 'buId',
        sortable: false,
      },
      {
        name: 'Segment Id',
        selector: 'segmentId',
        sortable: false,
      },
      {
        name: 'Project Sites',
        selector: 'projectSites',
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
                  onClick={() => handleEdit(row.id)}
                />
              )}
            </>
          );
        },
      },
    ];
  };

  export const transformProjectList = projectList => {
    let tmpArr = [];
    projectList &&
    projectList.map(project => {
      
        let tmpObj = {
            id: project.id,
            name: project.name,
            projCode: project.projCode,
            area: project.area,
            icId: project.icId,
            buId: project.buId,
            segmentId: project.segmentId,
            projectSites: project.projectSiteLocationDetails.map(dt => dt.name).join().replaceAll(",",", "),
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

