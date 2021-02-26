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
import FormRow from "../../common/forms/FormRow";
import PieChart from "../../common/forms/charts/PieChart1"
import TextInput from "../../common/forms/TextInput"

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
        <FormContainer formTitle={"View Component"}>
          <FormRow>
          <div className="col-md-6">
            <PieChart></PieChart>
          </div>
          <div className="col-md-6">
            <PieChart></PieChart>
          </div>
          </FormRow>
          <FormRow className="mt-5 mb-4">
          <TextInput
                size="col-md-3"
                // labelSize="col-md-4"
                fieldSize="col-md-12"
                // label="Structure"
                name="Structure"
                id="structure"
                // value={this.state.projectName}
                value="Launching girders"
                disabled={true}
              />
              <TextInput
                size="col-md-3"
                fieldSize="col-md-12"
                // labelSize="col-md-4"
                // label="Structure id"
                name="Structure id"
                id="structure id"
                // value={this.state.projectName}
                value="STR000001"
                disabled={true}
              />
              <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelsize="col-md-4"
                name="Project"
                // label="Project"
                id="project"
                // value={this.state.projectName}
                value="BMRC RT 02"
                disabled={true}
              />
              <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelsize="col-md-4"
                // label="BU"
                name="bu"
                id="bu"
                // value={this.state.projectName}
                value="metro"
                disabled={true}
              />
          <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelSize="col-md-4"
                // label="IC"
                name="ic"
                id="ic"
                // value={this.state.projectName}
                value="HCIC"
                disabled={true}
              />
          </FormRow>
          <FormRow>
              
          </FormRow>
          {/* <FormRow>
          <TextInput
                size="col-md-3"
                fieldSize="col-md-8"
                name="projectName"
                id="projectName"
                value={this.state.projectName}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
                size="col-md-3"
                fieldSize="col-md-8"
                name="projectName"
                id="projectName"
                value={this.state.projectName}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
              size="col-md-3"
              fieldSize="col-md-8"
              name="projectName"
              id="projectName"
              value={this.state.projectName}
              placeholder="Auto Fetch"
              disabled={true}
            />
            <TextInput
            size="col-md-3"
            fieldSize="col-md-8"
            name="projectName"
            id="projectName"
            value={this.state.projectName}
            placeholder="Auto Fetch"
            disabled={true}
          />
          </FormRow> */}
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
