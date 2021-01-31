import React, { Component } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  table: {
    style: {
     // borderRadius: "10px !important",
      boxShadow: "0 0 40px  rgba(0,0,0,.15) !important",
     // border:"0.5px solid #656565",
    //  borderTopRightRadius: "25px",
     // borderTopLeftRadius: "25px",

    }
  },
  headRow: {
    style: {
    //  borderTopRightRadius: "25px",
     // borderTopLeftRadius: "25px",

backgroundColor:"#5e72e4",
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      color:"#fff",


    },
  },
  rows: {
    style: {
      fontSize: "14px",
      color:"#545353",
      fontWeight: "bold",

    },
  },
};
class CustomDataTable extends Component {
  render() {
    return (
      <DataTable
        title={this.props.title}
        columns={this.props.metaData}
        data={this.props.bodyData}
        pagination={this.props.pagination}
        paginationPerPage={this.props.paginationPerPage}
        paginationTotalRows={this.props.paginationTotalRows}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noHeader={this.props.noHeader}
        customStyles={customStyles}
        subHeaderComponent={this.props.subHeaderComponent}
        {...this.props}
        handleChange={this.props.handleChange}
      />
    );
  }
}

export default CustomDataTable;
