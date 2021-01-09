import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { businessUnitBodyData, businessUnitMetaData } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

import AddBusinessUnit from "../../container/businessUnit/addBusinessUnit";
import EditBusinessUnit from "../../container/businessUnit/editBusinessUnit";

class ViewBusinessUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showBusinessUnitDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    console.log( this.props.businessUnitList());  
    this.props.businessUnitList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.businessUnit.isBusinessUnitMsg && (
          <CustomAlert
            variant="success"
            message={this.props.businessUnit.message}
          />
        )}
        <AddBusinessUnit showAddBusinessUnitModal={this.props.businessUnit.showAddBusinessUnitModal} />
        <EditBusinessUnit showEditBusinessUnitModal={this.props.businessUnit.showEditBusinessUnitModal} />
        
        <FormContainer formTitle={"BU Management"}>
          {this.props.businessUnit.businessUnitTypeList && (
            <CustomDataTable
              metaData={businessUnitMetaData(
                (id) => this.setState({ activeId: id, showBusinessUnitDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={businessUnitBodyData(
                this.props.businessUnit.businessUnitTypeList
              )}
              progressPending={this.props.businessUnit.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.businessUnit.businessUnitList &&
                this.props.businessUnit.businessUnitList.length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>

                  <TableFilter
                    placeholder="Search By BU Name"
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
                      btnText="Add Business Unit"
                      btnType="btn-primary float-right"
                      onClick={this.props.showAddBusinessUnitModal}
                    />
                  </Col6>
                </>
              }
            />
          )}
          <ConfirmModal
            showModal={this.state.showBusinessUnitDeleteModal}
            handleClose={() =>
              this.setState({ showBusinessUnitDeleteModal: false, activeId: null })
            }
            title="Delete Business Unit"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showBusinessUnitDeleteModal: false, activeId: null });
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

export default ViewBusinessUnit;
