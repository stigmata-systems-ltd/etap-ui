import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { siteDispatchMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";
import AssignVendorModal from "./AssignVendorModal";
class Procurement extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSiteDispatchDetails();
  }

  showModal = (id) => {
    if (this.props.procurement.showEditModalFlag) {
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
          {this.props.procurement.isLoading && <Loader />}
          {this.props.procurement.message && (
            <CustomAlert
              variant={this.props.procurement.isSuccess ? "success" : "danger"}
              message={this.props.procurement.message}
            />
          )}
          <AssignVendorModal
            {...this.props}
            showModal={this.props.procurement.showEditModalFlag}
          />
          <FormContainer formTitle={"Procurement"}>
            {this.props.procurement.siteDispatchDetails && (
              <CustomDataTable
                metaData={siteDispatchMetaData(
                  this.props.showAssignVendorModal
                )}
                bodyData={this.props.procurement.siteDispatchDetails}
                progressPending={this.props.procurement.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.procurement.siteDispatchDetails &&
                  this.props.procurement.siteDispatchDetails.length
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

export default Procurement;
