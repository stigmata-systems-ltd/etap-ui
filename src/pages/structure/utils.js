import React from 'react';
import IconButton from '../../common/forms/IconButton';
import { getSelectedValue } from "../../utils/dataTransformer";

export const listStructureMetaData = (handleDelete, handleEdit) => {
    return [
      {
        sortable: false,
        cell: row => {
          return (
            <>
              { (
                <IconButton
                  iconName="faTimes"
                  className={'table-delete-icon'}
                  onClick={() => handleDelete(row.id)}
                />
              )}
            </>
          );
        },
        width: '2%',
      },
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
          isActiveValue="Active"
        }
        else{
          isActiveValue="inActive"
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
