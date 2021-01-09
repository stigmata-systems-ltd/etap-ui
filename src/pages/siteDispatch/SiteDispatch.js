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
  }
  componentDidMount() {
    this.props.getSiteDispatchDetails();
  }

  showModal = (id) => {
    if (this.props.siteDispatch.showEditModalFlag) {
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
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default SiteDispatch;
