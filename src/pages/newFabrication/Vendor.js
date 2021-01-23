import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { vendorDispatchMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomDataTable from "../../common/CustomDataTable";
import VendorDispatchModel from "./VendorDispatchModel";

class NewFabricationVendor extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getVendorDetails();
  }

  showModal = (id) => {
    if (this.props.newFabricationVendor.showDispatchModalFlag) {
      this.props.setActiveItem(id);
      this.props.showUpdateDispatchModal(id);
    } else {
      this.props.closeUpdateDispatchModal();
    }
  };

  render() {
    return (
      <>
        <ContentLoader>
          {this.props.newFabricationVendor.isLoading && <Loader />}
          {/* {this.props.siteDispatch.message && (
            <CustomAlert
              variant={this.props.siteDispatch.isSuccess ? "success" : "danger"}
              message={this.props.siteDispatch.message}
            />
          )} */}
          <VendorDispatchModel
            {...this.props}
            showModal={this.props.newFabricationVendor.showDispatchModalFlag}
          />
          <FormContainer formTitle={"Vendor Dispatch"}>
            {this.props.newFabricationVendor.newFabricationVendorDetails && (
              <CustomDataTable
                metaData={vendorDispatchMetaData(
                  this.props.showUpdateDispatchModal
                )}
                bodyData={this.props.newFabricationVendor.newFabricationVendorDetails}
                progressPending={this.props.newFabricationVendor.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.newFabricationVendor.newFabricationVendorDetails &&
                  this.props.newFabricationVendor.newFabricationVendorDetails.length
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

export default NewFabricationVendor;
