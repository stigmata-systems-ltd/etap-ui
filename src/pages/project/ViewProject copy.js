import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listComponentTypeMetaData, transformComponentList } from "./utils";
import Button from "../../common/forms/Button";
import CreateComponent from "../../container/component/addComponent";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

class ViewProject extends Component {
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
    this.props.projectList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.project.isAddProjectMsg && (
          <CustomAlert
            variant="success"
            message={this.props.project.message}
          />
        )}
        <CreateProject showAddComponentModal={this.props.project.showAddProjectModal} />
        <FormContainer formTitle={"Project List"}>
          {this.props.project.projectList && (
            <CustomDataTable
              metaData={listProjectMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformProjectList(
                this.props.project.projectList
              )}
              progressPending={this.props.project.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.project.projectList &&
                this.props.project.projectList.length
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
                  <Col6>
                  
                  <Button
                    btnText="Create New Project"
                    btnType="btn-primary float-right"
                    onClick={this.props.showAddProjectModal}
                  />
                  </Col6>
                </>
              }
            />
          )}
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewProject;
