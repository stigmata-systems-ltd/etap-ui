import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listProjectMetaData, transformProjectList } from "./utils";
import Button from "../../common/forms/Button";
import AddProjModal from "./AddProject";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import Loader from "../../common/Loader";

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

  filteredItems = (data) => {
    return (
      data &&
      data.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <ContentLoader>
        {this.props.proj.isLoading && <Loader />}
        {this.props.proj.isProjMsg && (
          <CustomAlert
            variant="success"
            message={this.props.proj.message}
          />
        )}
        <AddProjModal {...this.props} />
        <FormContainer formTitle={"Project Management"}>
          {this.props.proj.projectList && (
            <CustomDataTable
              metaData={listProjectMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformProjectList(
                this.filteredItems(this.props.proj.projectList)
              )}
              progressPending={this.props.proj.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.proj.projectList &&
                this.filteredItems(this.props.proj.projectList).length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By Project Name"
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
                    onClick={this.props.showAddProjModal}
                  />
                  </Col6>
                </>
              }
            />
          )}
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Delete Project"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this Project?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewProject;
