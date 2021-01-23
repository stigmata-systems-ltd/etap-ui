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
//             sortable: false,
//         },
//         {
//             name: "DC Number",
//             selector: "dispatchNo",
//             sortable: false,
//         },
//         {
//             name: "Structure Nanme",
//             selector: "structureName",
//             sortable: false,
//         },
//         {
//             name: "Structure ID",
//             selector: "structureId",
//             sortable: false,
//         },
//         {
//             name: "Structure Family",
//             selector: "structureFamily",
//             sortable: false,
//         },
//         {
//             name: "Quantity Assigned",
//             selector: "quantityAssigned",
//             sortable: false,
//         },

//         {
//             name: "Actions",
//             sortable: false,
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

