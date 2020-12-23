import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const structureFamilyMetaData = (handleDelete, handleEdit) => {
    return [
      
      {
        name: 'Structure Family Type',
        selector: 'structureFamilyType',
        sortable: false,
      },
      {
        name: 'Status',
        selector: 'status',
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

  export const structureFamilyBodyData = structureFamilyList => {
    let tmpArr = [];
    let statusValue;
    structureFamilyList &&
    structureFamilyList.map(structureFamily => {
        if (structureFamily.isActive){
            statusValue = "Active"
        }
        else {
            statusValue = "InActive"
        }
        let tmpObj = {
            id: structureFamily.id,
            structureFamilyType: structureFamily.name,
            status: statusValue,
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };
