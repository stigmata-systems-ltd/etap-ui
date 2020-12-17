import React from 'react';
import IconButton from '../../common/forms/IconButton';

export const _subContractorData = ["S.No", "Vendor", "Vendor Code", "Vendor Type","Status"];
export const _subContractorBodyData = [
    {
        sno: "1",
        vendor: "",
        vendorCode: "",
        vendorType: "",
        Status: "Active",
    },
    {
        sno: "2",
        vendor: "",
        vendorCode: "",
        vendorType: "",
        Status: "InActive",
    },
    {
        sno: "3",
        vendor: "",
        vendorCode: "",
        vendorType: "",
        Status: "Active",
    },

];




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

  export const transformVendorList = vendorList => {
    let tmpArr = [];
    vendorList &&
    vendorList.map(vendor => {
      
        let tmpObj = {
            id: vendor.id,
            vendorCode: vendor.vendorCode,
            name: vendor.name,
            email: vendor.email,
            phoneNunmber: vendor.phoneNunmber,
            isStatus: vendor.isStatus,
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };


