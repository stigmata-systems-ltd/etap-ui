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

class ViewComponent extends Component {
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
    this.props.componentList();
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
        {this.props.component.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.component.message}
          />
        )}
        <CreateComponent showAddComponentModal={this.props.component.showAddComponentModal} />
        <FormContainer formTitle={"Component Type List"}>
          {this.props.component.componentTypeList && (
            <CustomDataTable
              metaData={listComponentTypeMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformComponentList(
                this.filteredItems(this.props.component.componentTypeList)
              )}
              progressPending={this.props.component.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.component.componentTypeList &&
                this.filteredItems(this.props.component.componentTypeList).length
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
                    btnText="Add Component Type"
                    btnType="btn-primary float-right"
                    onClick={this.props.showAddComponentModal}
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
            title="Delete User"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this User?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewComponent;
