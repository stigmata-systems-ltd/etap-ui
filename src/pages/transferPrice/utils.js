import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";


export const transferPriceMetaData = (handleEdit, handleMore) => {
  return [

    {
      name: 'MR No',
      selector: 'mrNo',
      sortable: true,
    },
    {
      name: 'DA No',
      selector: 'dispatchNo',
      sortable: true,
    },
    // {
    //   name: 'Structure Name',
    //   selector: 'structureName',
    //   sortable: true,
    // },
    {
      name: 'Quantity Requested',
      selector: 'quantityRequested',
      sortable: true,
    },
    {
      name: 'From Site',
      selector: 'fromSite',
      sortable: true,
    },
    {
      name: 'To Site',
      selector: 'toSite',
      sortable: true,
    },
    {
      name: "Actions",
      sortable: true,
      cell: (row) => {
        return (
          <>
            {

              <IconButton
                id={row.id}
                iconName="faEdit"
                onClick={() => handleEdit(row.id)}
              />
            }
            {
              <IconButton
                iconName="faList"
                onClick={() => handleMore(row.id)}
              />
            }

          </>
        );
      },
    },
  ];
};
