import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listStructureMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'Structure Name',
        selector: 'structureName',
        sortable: false,
      },
      {
        name: 'Structure Type',
        selector: 'structureType',
        sortable: false,
      },
      {
        name: 'IsActive',
        selector: 'isActive',
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

  export const transformStructureList = structureList => {
    let tmpArr = [];
    let isActiveValue;
    structureList &&
    structureList.map(structure => {
        if(structure.isActive){
          isActiveValue="True"
        }
        else{
          isActiveValue="False"
        }

        let tmpObj = {
          id: structure.id,
          structureName: structure.name,
          structureType: structure.structureTypeId,
          isActive: isActiveValue
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };
