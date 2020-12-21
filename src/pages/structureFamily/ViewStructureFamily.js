import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { structureFamilyBodyData, structureFamilyMetaData } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AddStructureFamily from "../../container/structureFamily/addStructureFamily";

class ViewStructureFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showStructureFamilyDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.structureFamilyList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.structureFamily.isStructureFamilyMsg && (
          <CustomAlert
            variant="success"
            message={this.props.structureFamily.message}
          />
        )}
        <AddStructureFamily showAddStructureFamilyModal={this.props.structureFamily.showAddStructureFamilyModal} />
        <FormContainer formTitle={"Structure Family List"}>
          {this.props.structureFamily.structureFamilyTypeList && (
            <CustomDataTable
              metaData={structureFamilyMetaData(
                (id) => this.setState({ activeId: id, showStructureFamilyDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={structureFamilyBodyData(
                this.props.structureFamily.structureFamilyTypeList
              )}
              progressPending={this.props.structureFamily.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.structureFamily.structureFamilyList &&
                this.props.structureFamily.structureFamilyList.length
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
                      btnText="Add Structure Family"
                      btnType="btn-primary float-right"
                      onClick={this.props.showAddStructureFamilyModal}
                    />
                  </Col6>
                </>
              }
            />
          )}
          <ConfirmModal
            showModal={this.state.showStructureFamilyDeleteModal}
            handleClose={() =>
              this.setState({ showStructureFamilyDeleteModal: false, activeId: null })
            }
            title="Delete Structure Family"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showStructureFamilyDeleteModal: false, activeId: null });
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

export default ViewStructureFamily;
