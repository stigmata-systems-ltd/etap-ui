import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import DataTable from "../../common/DataTable";
import Radio from "../../common/forms/Radio";
import {
  _subContractorBodyData,
  _subContractorData,
  siteDispatchMetaData,
  transformVendorList,
} from "./utils";
import Col6 from "../../common/forms/Col6";
import ConfirmModal from "../../common/ConfirmModal";
import TableFilter from "../../common/TableFilter";
import CustomDataTable from "../../common/CustomDataTable";
import UpdateSiteDispatchModal from "./UpdateSiteDispatchModal";
// import AddSubContractor from "./AddSubContractor";

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

    // console.log("************************************");
    // console.log("id is....", id);
    // console.log("************************************");
  };

  render() {
    // const subprop = this.props.addSubContractor;
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
                // subHeader
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
