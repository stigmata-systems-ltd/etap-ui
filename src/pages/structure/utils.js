import React from 'react';
import IconButton from '../../common/forms/IconButton';
import { getSelectedValue } from "../../utils/dataTransformer";

export const listStructureMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'Structure Name',
        selector: 'structureName',
        sortable: false,
      },
      {
        name: 'Structure Family',
        selector: 'structureType',
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

  export const transformStructureList = (structureList,structureFamilyList) => {
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

        const structureFamilyValue=getSelectedValue(structureFamilyList,structure.structureTypeId)
        let tmpObj = {
          id: structure.id,
          structureName: structure.name,
          structureType: structureFamilyValue.label,
          status: isActiveValue
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };
