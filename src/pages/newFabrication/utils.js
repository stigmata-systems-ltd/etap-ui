import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const _newFabricationInputData = ["MR No", "Structure Family", "Structure ID", "Quantity Requested"];
export const _newFabricationBodyData = [
    {

        mrNo: "",
        structureFamily: "",
        structureId: "",
        quantityRequired: "",



    },


];

// export const vendorDispatchMetaData = (handleUpdate) => {
//     return [
//         {
//             name: "MR Number",
//             selector: "mrNo",
//             sortable: true,
//         },
//         {
//             name: "DC Number",
//             selector: "dispatchNo",
//             sortable: true,
//         },
//         {
//             name: "Structure Nanme",
//             selector: "structureName",
//             sortable: true,
//         },
//         {
//             name: "Structure ID",
//             selector: "structureId",
//             sortable: true,
//         },
//         {
//             name: "Structure Family",
//             selector: "structureFamily",
//             sortable: true,
//         },
//         {
//             name: "Quantity Assigned",
//             selector: "quantityAssigned",
//             sortable: true,
//         },

//         {
//             name: "Actions",
//             sortable: true,
//             cell: (row) => {
//                 return (
//                     <>

//                         <Button btnText="Dispatch" btnType="btn-primary btn-sm"
//                             iconName="faEdit"
//                             onClick={() => handleUpdate(row.dispatchId)}

//                         />
//                     </>
//                 );
//             },
//         },
//     ];
// };

