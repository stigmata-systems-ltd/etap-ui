import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (
  // redirectBuiltDetails,
  handleEdit,
  handleMore
) => {
  return [
    {
      name: "DC No",
      selector: "dcNo",
      sortable: true,
    },

    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
      cell: (row) => {
        return (
          <div className="row w-100">
            <div className="col-md-12">
              <button
                className="btn btn-sm btn-primary w-100"
                onClick={() => {
                  //redirectBuiltDetails(row.dcNo);
                }}
              >
                {row.structureName}
              </button>
            </div>
          </div>
        );
      },
    },
    {
      name: "Structure Code",
      selector: "structureCode",
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
                iconName="faPlus"
                onClick={() => handleEdit(row.id)}
              />
            }
            ,
            {<IconButton iconName="faEye" onClick={() => handleMore(row.id)} />}
          </>
        );
      },
    },
  ];
};

export const listBuiltDetailsMetaData = () => {
  return [
    {
      name: "Comp",
      selector: "component",
      sortable: true,
    },
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "DR No",
      selector: "drNo",
      sortable: true,
    },
    {
      name: "Attr 1",
      selector: "attributeOne",
      sortable: true,
    },
    {
      name: "Attr 2",
      selector: "attributeTwo",
      sortable: true,
    },
    {
      name: "Attr 3",
      selector: "attributeThree",
      sortable: true,
    },
    {
      name: "Vendor",
      selector: "vendor",
      sortable: true,
    },
    {
      name: "QR",
      selector: "qrCode",
      sortable: true,
    },
  ];
};
