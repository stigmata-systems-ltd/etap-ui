import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listUsersMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'First Name',
        selector: 'firstName',
        sortable: false,
      },
      {
        name: 'Last Name',
        selector: 'lastName',
        sortable: false,
      },
      {
        name: 'User Name',
        selector: 'userName',
        sortable: false,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: false,
      },
      {
        name: 'Mobile No',
        selector: 'mobileNo',
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

  export const transformUsersList = usersList => {
    let tmpArr = [];
    usersList &&
    usersList.map(user => {
        
        let tmpObj = {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          mobileNo: user.mobileNo,
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

