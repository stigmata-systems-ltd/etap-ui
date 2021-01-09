import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { siteDispatchMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomDataTable from "../../common/CustomDataTable";
import UpdateSiteDispatchModal from "./UpdateSiteDispatchModal";

class SiteDispatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
      showModal: false,
    };
  }
  componentDidMount() {
    this.props.getSiteDispatchDetails();
  }

  showModal = (id) => {
    if (this.props.siteDispatch.showEditModalFlag) {
      console.log("the id is.....***************", id);
      this.props.setActiveItem(id);
      this.props.showUpdateSiteDispatchModal(id);
    } else {
      this.props.closeUpdateSiteDispatchModal();
    }
  };

  render() {
    return (
      <>
        <ContentLoader>
          {this.props.siteDispatch.isLoading && <Loader />}
          {/* {this.props.siteDispatch.message && (
            <CustomAlert
              variant={this.props.siteDispatch.isSuccess ? "success" : "danger"}
              message={this.props.siteDispatch.message}
            />
          )} */}
          <UpdateSiteDispatchModal
            {...this.props}
            showModal={this.props.siteDispatch.showEditModalFlag}
          />
          <FormContainer formTitle={"Site Dispatch"}>
            {this.props.siteDispatch.siteDispatchDetails && (
              <CustomDataTable
                metaData={siteDispatchMetaData(
                  this.props.showUpdateSiteDispatchModal
                )}
                bodyData={this.props.siteDispatch.siteDispatchDetails}
                progressPending={this.props.siteDispatch.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.siteDispatch.siteDispatchDetails &&
                  this.props.siteDispatch.siteDispatchDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
              />
            )}
            <ConfirmModal
              showModal={this.state.showDeleteModal}
              handleClose={() =>
                this.setState({ showDeleteModal: false, activeId: null })
              }
              title="Delete Vendor"
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
      </>
    );
  }
}

export default SiteDispatch;
