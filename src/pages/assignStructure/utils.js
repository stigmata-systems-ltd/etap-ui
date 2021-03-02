import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const getComponentTableData = (scr) => {
  let tmpArr = [];
  let data = scr.uploadData;
  data &&
    data.map((data) => {
      tmpArr.push({
        ic: scr.ic,
        bu: scr.bu,
        project: scr.projName.label,
        structFamily: scr.strcutureType,
        structure: scr.structName.label,
        structureId: scr.structName.value,
        compType: data.compTypeName,
        component: data.componentName,
        group: data.isGroup.toString(),
        compNum: data.compId,
        drawingNum: data.drawingNo,
        length: data.leng,
        breadth: data.breath,
        height: data.height,
        thickness: data.thickness,
        weight: data.width,
        type: data.makeType,
        tag: data.isTag,
      });
    });
  return tmpArr;
};

export const getAssignExcelHeaders = () => {
  const headers = [
    "IC",
    "BU",
    "Project",
    "Structure Family",
    "Structure Name",
    "Structure ID",
    "Component Type",
    "Component Name",
    "Component ID",
    "Belong To A Group",
    "Component Number",
    "Drawing Number",
    "Length",
    "Breadth",
    "Height",
    "Thickness",
    "Weight",
    "Type",
    "Tag",
  ];
  return headers;
};

export const getExcelData = (scr) => {
  let data = scr.uploadData;
  let dataArr = [];
  dataArr.push(getAssignExcelHeaders());
  if (data && data.length > 0) {
    data.map((dt, i) => {
      let tmpArr = [];
      tmpArr.push(scr.ic);
      tmpArr.push(scr.bu);
      tmpArr.push(scr.projName.label);
      tmpArr.push(scr.strcutureType);
      tmpArr.push(scr.structName.label);
      tmpArr.push(scr.structName.value);
      tmpArr.push(dt.compTypeName);
      tmpArr.push(dt.componentName);
      tmpArr.push(dt.compId);
      tmpArr.push(dt.isGroup);
      tmpArr.push(dt.componentNo);
      tmpArr.push(dt.drawingNo);
      tmpArr.push(dt.leng);
      tmpArr.push(dt.breadth);
      tmpArr.push(dt.height);
      tmpArr.push(dt.thickness);
      tmpArr.push(dt.weight);
      tmpArr.push(dt.makeType);
      tmpArr.push(dt.isTag);
      dataArr.push(tmpArr);
    });
  } else {
    let tmpArr = [];
    tmpArr.push(scr.ic);
    tmpArr.push(scr.bu);
    tmpArr.push(scr.projName.label);
    tmpArr.push(scr.strcutureType);
    tmpArr.push(scr.structName.label);
    tmpArr.push(scr.structName.value);
    dataArr.push(tmpArr);
  }
  return dataArr;
};

export const transformAttri = (data) => {
  let tmpArr = [];
  while (typeof data === "string") {
    data = JSON.parse(data);
    console.log(`typeof data is ${typeof data}`);
  }
  data &&
    data.map((dt, index) => {
      tmpArr.push({
        id: index + 1,
        name: dt.name,
        uom: dt.uom,
        value: dt.value,
        typeOfInput: dt.typeOfInput,
      });
    });
  return tmpArr;
};

export const transformDocs = (data) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      tmpArr.push({
        id: dt.id,
        name: dt.fileName,
        filepath: dt.filepath,
      });
    });
  return tmpArr;
};

export const structAttriMetaData = (onChangeValue) => {
  return [
    {
      name: "Description",
      selector: "name",
      sortable: true,
    },
    {
      name: "UoM",
      selector: "uom",
      sortable: true,
    },
    {
      name: "Value",
      selector: "value",
      sortable: true,
      cell: (row) => {
        console.log("in meta", row.id, row.value);
        return (
          <input
            type="text"
            value={row.value}
            onChange={(e) => onChangeValue(e, row.id)}
          />
        );
      },
    },
  ];
};

export const componentsMetaData = (onChangeValue) => {
  return [
    {
      name: "Component",
      selector: "component",
      sortable: true,
    },
    {
      name: "Component Type",
      selector: "compType",
      sortable: true,
    },
    {
      name: "Component ID",
      selector: "compType",
      sortable: true,
    },
    {
      name: "Component No",
      selector: "compNum",
      sortable: true,
    },
    {
      name: "Group",
      selector: "group",
      sortable: true,
    },

    {
      name: "Drawing No",
      selector: "drawingNum",
      sortable: true,
    },
    {
      name: "Length",
      selector: "length",
      sortable: true,
    },
    {
      name: "Breadth",
      selector: "breadth",
      sortable: true,
    },
    {
      name: "Height",
      selector: "height",
      sortable: true,
    },
    {
      name: "Thickness",
      selector: "thickness",
      sortable: true,
    },
    {
      name: "Weight",
      selector: "weight",
      sortable: true,
    },
    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Tag",
      selector: "tag",
      sortable: true,
    },
  ];
};

export const _componentInputData = [
  "IC",
  "BU",
  "Project",
  "Structure Family",
  "Structure",
  "Structure ID",
  "Component Type",
  "Component",
  "Component ID",
  "Group",
  "Component No",
  "Drawing No",
  "Length",
  "Breadth",
  "Height",
  "Thickness",
  "Weight",
  "Type",
  "Tag",
];
export const _componentInputBodyData = [
  {
    ic: "Auto",
    bu: "Auto",
    project: "Auto",
    structureFamily: "Auto",
    structure: "Auto",
    structureId: "LG-ABC",
    componentType: "",
    component: "",
    componentId: "Auto",
    group: "",
    componentNumber: "Auto",
    drawingNumber: "",
    length: "",
    breadth: "",
    height: "",
    thickness: "",
    weight: "",
    type: "",
    tag: "",
  },
];
export const _assignStructureInputData = [
  "S.no",
  "Description",
  "Type of Input",
  "UoM",
];
export const _assignStructureBodyData = [
  {
    sno: "",
    description: "",
    typeOfInput: "",
    uom: "",
  },
  {
    sno: "",
    description: "",
    typeOfInput: "",
    uom: "",
  },
];

export const listAssignedStructureMetaData = (
  handleComponentCheck,
  handleMore
) => {
  return [
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },

    {
      name: "Structure ID",
      selector: "structureCode",
      sortable: true,
      width: "110px",
      cell: (row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={() => {
                  handleComponentCheck(row.structureId, row.projectID);
                }}
              >
                {row.structureCode}
              </a>
            }
          </>
        );
      },
    },
    {
      name: "Structure Family",
      selector: "structureFamily",
      sortable: true,
    },
    {
      name: "Component Count",
      selector: "componentsCount",
      sortable: true,
      width: "90px",
    },

    {
      name: "Total Weight",
      selector: "totalWeight",
      sortable: true,
      width: "80px",
    },
    {
      name: "Structure Status",
      selector: "structureStatus",
      sortable: true,
    },
    {
      name: "Current Status",
      selector: "currentStatus",
      sortable: true,
    },
    {
      name: "Actions",
      sortable: true,
      width: "70px",
      cell: (row) => {
        return (
          <>
            {
              <IconButton
                iconName="faEdit"
                onClick={() => handleMore(row.id)}
              />
            }
          </>
        );
      },
    },
  ];
};

export const transformAssignedStructureList = (assignStructureList) => {
  let tmpArr = [];
  assignStructureList &&
    assignStructureList.map((assignStructure, i) => {
      let tmpObj = {
        projectID: assignStructure.projectId,
        structureName: assignStructure.strcutureName,
        structureId: assignStructure.structureId,
        structureCode: assignStructure.structureCode,
        structureFamily: assignStructure.strcutureTypeName,
        totalWeight: assignStructure.totalWeight,
        componentsCount: assignStructure.componentsCount,
        structureStatus: assignStructure.status,
        currentStatus: assignStructure.currentStatus,
        id: i,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const listAssignedComponentMetaData = (handleDelete, handleMore) => {
  return [
    {
      name: "Component NO",
      selector: "componentNo",
      sortable: true,
    },
    {
      name: "Component",
      selector: "component",
      sortable: true,
    },
    {
      name: "Component ID",
      selector: "componentID",
      sortable: true,
    },
    {
      name: "Component Family",
      selector: "componentFamily",
      sortable: true,
    },
    {
      name: "Drawing Number",
      selector: "drawingNumber",
      sortable: true,
    },
    {
      name: "O/M",
      selector: "oM",
      sortable: true,
    },
    {
      name: "Mod No",
      selector: "modNo",
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
                iconName="faEdit"
                onClick={() => handleMore(row.id)}
              />
            }
          </>
        );
      },
    },
  ];
};

export const transformAssignedComponentList = (assignComponentList) => {
  console.log("+++++++++");
  console.log(assignComponentList);
  console.log("+++++++++");
  let tmpArr = [];
  assignComponentList &&
    assignComponentList.map((assignComponent, i) => {
      let tmpObj = {
        componentNo: assignComponent.componentNo,
        component: assignComponent.componentName,
        componentID: assignComponent.compId,
        componentFamily: assignComponent.compTypeName,
        drawingNumber: assignComponent.drawingNo,
        oM: assignComponent.compStatus,
        modNo: assignComponent.compStatus,
        id: i,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
