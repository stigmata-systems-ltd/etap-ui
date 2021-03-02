import React from 'react';
import IconButton from '../../common/forms/IconButton';

export const tranformServTypeList = (data) => {
  let tmpArr = [];
  data && data.map(dt => {
    dt.checked = false;
    tmpArr.push(dt);
  })
  return tmpArr;
}
export const tranformServTypeListEnableCheck = (data) => {
  let tmpArr = [];
  let defaultData = [
    {
      name: "Fabrication",
      id: 1,
      checked: false
    },
    {
      name: "Outsourcing",
      id: 2,
      checked: false
    },
    {
      name: "Scrap",
      id: 3,
      checked:false
    },
  ];

  data && data.map((dt,i) => {
    defaultData.map(dtt => {
      if (dt.serviceTypeId === dtt.id){
        dtt.checked = true;
        dtt.vendorId = dt.vendorId;
        dtt.serviceTypeId = dt.serviceTypeId;
        dtt.serviceId= dt.id;
      }
    })
    tmpArr.push(dt);
  })
  console.log(`Changed Data Array: ${JSON.stringify(defaultData)}`)
  return defaultData;
}




export const listVendorMetaData = (handleDelete, handleEdit) => {
  return [
    {
      name: 'Vendor Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Vendor Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Vendor Code',
      selector: 'vendorCode',
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: 'phoneNunmber',
      sortable: true,
    },   
    {
      name: 'Status',
      selector: 'isStatus',
      sortable: true,
      cell: row => {
        return (
          <>
            {row.isStatus ? "Active" : "InActive"}
          </>
        );
      },
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
      
        status: statusValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};


