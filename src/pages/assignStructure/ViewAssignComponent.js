import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listAssignedComponentMetaData, transformAssignedComponentList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AssignComponentViewMore from "../../container/assignStructure/assignComponentViewMore";

class ViewAssignComponent extends Component {
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
    this.props.assignComponentList();
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
        <AssignComponentViewMore showAddComponentModal={this.props.assignStructure.showAssignComponentMoreModal} />
        <FormContainer formTitle={"View Assigned Component"}>
          {this.props.assignStructure.assignComponentList.components && (
            <CustomDataTable
              metaData={listAssignedComponentMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleMore(id),
              )}
              bodyData={transformAssignedComponentList(
                this.props.assignStructure.assignComponentList.components
              )}
              progressPending={this.props.assignStructure.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.assignStructure.assignComponentList.components &&
                this.props.assignStructure.assignComponentList.components.length
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

export default ViewAssignComponent;
