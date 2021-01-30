import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from "../../common/forms/Button";


export const transferPriceMetaData = (handleEdit, handleMore) => {
  return [

    {
      name: 'MR No',
      selector: 'mrNo',
      sortable: false,
    },
    {
      name: 'DA No',
      selector: 'dispatchNo',
      sortable: false,
    },
    // {
    //   name: 'Structure Name',
    //   selector: 'structureName',
    //   sortable: false,
    // },
    {
      name: 'Quantity Requested',
      selector: 'quantityRequested',
      sortable: false,
    },
    {
      name: 'From Site',
      selector: 'fromSite',
      sortable: false,
    },
    {
      name: 'To Site',
      selector: 'toSite',
      sortable: false,
    },
    {
      name: "Actions",
      sortable: false,
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
