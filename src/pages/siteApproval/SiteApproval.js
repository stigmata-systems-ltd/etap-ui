import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { siteApprovalMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";

import SiteApprovalViewMore from "./SiteApprovalViewMore";
import TableFilter from "../../common/TableFilter";

class NewFabricationSiteApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showApproveModal: false,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getSiteApprovalDetails();
  }


  render() {
    return (
      <>
        <ContentLoader>
          {this.props.siteApproval.isLoading && <Loader />}
          {this.props.siteApproval.message && (
            <CustomAlert
              variant={this.props.siteApproval.isSuccess ? "success" : "danger"}
              message={this.props.siteApproval.message}
            />
          )}

          <SiteApprovalViewMore showMoreModal={this.props.siteApproval.showMoreModalFlag}/>
          <ConfirmModal
            showModal={this.state.showApproveModal}
            handleClose={() => {
              this.setState({ showApproveModal: false, activeId: null })
            }

            }
            title="Approve Site"
            handleConfirm={() => {
              this.props.handleApprove(this.state.activeId);
              this.setState({ showApproveModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Approve this request?
            </h6>
          </ConfirmModal>
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() => {
              this.setState({ showDeleteModal: false, activeId: null })
            }
            }
            title="Reject Site Approval"
            handleConfirm={() => {
              this.props.handleReject(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Reject this request?
            </h6>
          </ConfirmModal>
          <FormContainer formTitle={"New Fabrication : Site Approval"}>
            {this.props.siteApproval.siteApprovalDetails && (
              <CustomDataTable
                metaData={siteApprovalMetaData(
                  id => this.setState({ activeId: id, showApproveModal: true }),
                  id => this.setState({ activeId: id, showDeleteModal: true }),
                  (id) => this.props.showSiteApprovalMoreModal(id)
                )}
                bodyData={this.props.siteApproval.siteApprovalDetails}
                progressPending={this.props.siteApproval.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.siteApproval.siteApprovalDetails &&
                  this.props.siteApproval.siteApprovalDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
                subHeader
                subHeaderComponent={
                  <>
                    <TableFilter
                      placeholder="Search By DC No"
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
      </>
    );
  }
}

export default NewFabricationSiteApproval;
