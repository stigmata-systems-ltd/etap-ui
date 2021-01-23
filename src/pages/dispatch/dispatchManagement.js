import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listViewDispatchMetaData, transformViewDispatchMetaData } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

import RequirementsViewMore from "../../container/requirement/requirementsViewMore";

class ViewdispatchManagement extends Component {
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
    this.props.getSiteDispatchDetails();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.siteDispatch.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.siteDispatch.message}
          />
        )}
        <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>{
              this.setState({ showDeleteModal: false, activeId: null })
            }
              
            }
            title="Approve Dispatch"
            handleConfirm={() => {
              this.props.handleApprove(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Approve this request?
            </h6>
          </ConfirmModal>

          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>{
              this.setState({ showDeleteModal: false, activeId: null })
            }
            }
            title="Reject Dispatch"
            handleConfirm={() => {
              this.props.handleReject(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Reject this request?
            </h6>
          </ConfirmModal>
        <FormContainer formTitle={"View Dispatch"}>
          {this.props.siteDispatch.dispatchList && (
            <CustomDataTable
              metaData={listViewDispatchMetaData(
                id => this.setState({ activeId: id, showDeleteModal: true }),
                id => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleMore(id),

              )}
              bodyData={transformViewDispatchMetaData(
                this.props.siteDispatch.siteDispatchDetails
              )}
              progressPending={this.props.siteDispatch.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.siteDispatch.dispatchList &&
                this.props.siteDispatch.dispatchList.length
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

export default ViewdispatchManagement;
