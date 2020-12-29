import React from 'react';
import IconButton from '../../common/forms/IconButton';

// export const _subContractorData = ["S.No", "Vendor", "Vendor Code", "Vendor Type", "Status"];
// export const _subContractorBodyData = [
//   {
//     sno: "1",
//     vendor: "",
//     vendorCode: "",
//     vendorType: "",
//     Status: "Active",
//   },
//   {
//     sno: "2",
//     vendor: "",
//     vendorCode: "",
//     vendorType: "",
//     Status: "InActive",
//   },
//   {
//     sno: "3",
//     vendor: "",
//     vendorCode: "",
//     vendorType: "",
//     Status: "Active",
//   },

// ];




export const listVendorMetaData = (handleDelete, handleEdit) => {
  return [
    {
      name: 'S.No',
      selector: 'sno',
      sortable: false,
    },
    {
      name: 'Vendor',
      selector: 'vendor',
      sortable: false,
    },
    {
      name: 'Vendor Code',
      selector: 'vendorCode',
      sortable: false,
    },
    {
      name: 'Vendor Type',
      selector: 'vendorType',
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

export const transformVendorList = vendorList => {
  let tmpArr = [];
  let statusValue;

  vendorList &&
    vendorList.map(vendor => {
      if (vendor.isActive) {
        statusValue = "Active"
      }
      else {
        statusValue = "InActive"
      }

      let tmpObj = {
        sno: vendor.id,
        vendor: vendor.name,
        vendorCode: vendor.vendorCode,
        vendorType: vendor.vendorId,
        status: statusValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};


