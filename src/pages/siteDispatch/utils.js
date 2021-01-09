import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";
export const tranformServTypeList = (data) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      dt.checked = false;
      tmpArr.push(dt);
    });
  return tmpArr;
};

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

export const siteDispatchMetaData = (handleUpdate) => {
  return [
    {
      name: "MR Number",
      selector: "mrNo",
      sortable: false,
    },
    {
      name: "DC Number",
      selector: "dispatchNo",
      sortable: false,
    },
    {
      name: "Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Created Date",
      selector: "createdDateTime",
      sortable: false,
    },

    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        return (
          <>
            <IconButton
              id={row.dispatchRequestSubContractorId}
              iconName="faEdit"
              onClick={() => handleUpdate(row.dispatchRequestSubContractorId)}
              // onClick={() => handleEdit()}
            />
            <Button btnText="View More" btnType="btn-primary btn-sm" />
          </>
        );
      },
    },
  ];
};

export const transformVendorList = (vendorList) => {
  let tmpArr = [];
  let statusValue;

  vendorList &&
    vendorList.map((vendor) => {
      if (vendor.isActive) {
        statusValue = "Active";
      } else {
        statusValue = "InActive";
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
