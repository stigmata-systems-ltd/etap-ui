import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listProjectMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'Project',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Project Code',
        selector: 'projCode',
        sortable: true,
      },
      {
        name: 'Area',
        selector: 'area',
        sortable: true,
      },
      {
        name: 'IC',
        selector: 'icName',
        sortable: true,
      },
      {
        name: 'BU',
        selector: 'buName',
        sortable: true,
      },
      {
        name: 'Actions',
        sortable: true,
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
            icName: project.icName,
            buName: project.buName,
            segmentId: project.segmentId,
            projectSites: project.projectSiteLocationDetails.map(dt => dt.name).join().replaceAll(",",", "),
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };