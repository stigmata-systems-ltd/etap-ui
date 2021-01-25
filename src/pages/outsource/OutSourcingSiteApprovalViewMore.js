import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';

class OutSourcingSiteApprovalViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Show model: ${this.props.showMoreModal}`)
    return (
      <Modal
        title={`View Site Approval - Details`}
        showModal={this.props.showMoreModal}
        handleClose={this.props.closeSiteApprovalViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Structure ID"
            name="structureId"
            id="structureId"
          //value={this.props.siteApproval.siteApprovalViewMore.structureId}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Structure Family"
            name="structureFamily"
            id="structureFamily"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>
        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="No.of Components"
            name="noOfComp"
            id="noOfComp"
          //value={this.props.siteApproval.siteApprovalViewMore.structureId}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Contract Year"
            name="contractYear"
            id="contractYear"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>
        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Weight"
            name="weight"
            id="weight"
          //value={this.props.siteApproval.siteApprovalViewMore.structureId}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Updated By"
            name="updatedBy"
            id="updatedBy"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>
        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Planned Release Date"
            name="plannedReleaseDate"
            id="plannedReleaseDate"
          //value={this.props.siteApproval.siteApprovalViewMore.structureId}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Actual Start Date"
            name="actualStartDate"
            id="actualStartDate"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>
        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Expected Release Date"
            name="expectedReleaseDate"
            id="expectedReleaseDate"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>


      </Modal>
    );
  }
}

export default OutSourcingSiteApprovalViewMore;
