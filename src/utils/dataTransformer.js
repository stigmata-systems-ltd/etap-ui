export const transformGridList = (gridList) => {
    let tmpArr = [];
    gridList.map((grid) => {
      tmpArr.push({
        value: grid.id,
        label: grid.gridName,
      });
    });
    return tmpArr;
  };

  export const transformDropDownData = (data, valueKey, labelKey, ) => {
    let tmpArr = [];
    data && data.map(dt => {
      tmpArr.push({
        label: dt[labelKey],
        value: dt[valueKey]
      })
    })
    return tmpArr;
  }

  export const getSelectedValue = (data, value) => {
    console.log("++++++++++++++++")
    console.log("test",data,value);
    console.log("++++++++++++++++")
    let tmpObj = {};
    data && data.map(dt => {
      if(dt.id === value) {
        tmpObj = {
          value: dt.id,
          label: dt.name
        }
      }
    })
    return tmpObj;
  }