import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listAssignedStructureMetaData, transformAssignedStructureList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AssignStructureViewMore from "../../container/assignStructure/assignStructureViewMore";

class ViewAssignStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.assignStructureList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.assignStructure.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.assignStructure.message}
          />
        )}
        <AssignStructureViewMore showAddComponentModal={this.props.assignStructure.showAssignStructureMoreModal} />
        <FormContainer formTitle={"View Assigned Structure"}>
          {this.props.assignStructure.assignStructureList && (
            <CustomDataTable
              metaData={listAssignedStructureMetaData(
                (structureID,projectID) => { this.props.handleComponentCheck(structureID,projectID)},
                (id) => this.props.handleMore(id),
              )}
              bodyData={transformAssignedStructureList(
                this.props.assignStructure.assignStructureList
              )}
              progressPending={this.props.assignStructure.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.assignStructure.assignStructureList &&
                this.props.assignStructure.assignStructureList.length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By ID"
                    fieldSize="float-left col-sm-10"
                    onFilter={(e) => {
                      e.target.value === "" &&
                        this.setState({
                          resetPaginationToggle: !this.state
                            .resetPaginationToggle,
                        });
                      this.setState({ filterText: e.target.value });
                    }}
                    filterText={this.state.filterText}
                  />
                </>
              }
            />
          )}
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewAssignStructure;
