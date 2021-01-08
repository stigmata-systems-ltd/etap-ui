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
        name: 'IC',
        selector: 'icId',
        sortable: false,
      },
      {
        name: 'BU',
        selector: 'buId',
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