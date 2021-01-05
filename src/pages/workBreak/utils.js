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
            wbs: component.workBreakDownCode,
            segment: component.segment,
            subSegment: component.subSegment,
            element: component.element
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };


  export const listWBSMetaDataView = (handleDelete, handleEdit) => {
    return [
      {
        name: 'ProjectCode',
        selector: 'projectCode',
        sortable: false,
      },
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

  export const transformWBSListView = wbsArray => {
    let tmpArr = [];
    let statusValue;
    wbsArray &&
    wbsArray.map(component => {
        
        let tmpObj = {
            projectCode: component.projectCode,
            wbs: component.workBreakDownCode,
            segment: component.segment,
            subSegment: component.subSegment,
            element: component.element
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };

