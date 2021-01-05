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

class ViewRequirementViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Show model: ${this.props.showAddComponentModal}`)
    return (
      <Modal
        title={`View Requirement - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeRequirementViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        
            <FormRow>
              <TextInput
                label="MR No"
                name="mrNo"
                id="mrNo"
                value={this.props.requirement.requirementViewMore.mrNo}
              />
              <TextInput
                label="Project ID"
                name="projectId"
                id="projectId"
                value={this.props.requirement.requirementViewMore.projectId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Planned Start Date"
                name="planStartdate"
                id="planStartdate"
                value={this.props.requirement.requirementViewMore.planStartdate}
              />
              <TextInput
                label="Planned Releas edate"
                name="planReleasedate"
                id="planReleasedate"
                value={this.props.requirement.requirementViewMore.planReleasedate}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Actual Start Date"
                name="actualStartdate"
                id="actualStartdate"
                value={this.props.requirement.requirementViewMore.actualStartdate}
              />
              <TextInput
                label="Actual Release Date"
                name="actualReleasedate"
                id="actualReleasedate"
                value={this.props.requirement.requirementViewMore.actualReleasedate}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Required Wbs ID"
                name="requireWbsId"
                id="requireWbsId"
                value={this.props.requirement.requirementViewMore.requireWbsId}
              />
              <TextInput
                label="Actual Wbs ID"
                name="actualWbsId"
                id="actualWbsId"
                value={this.props.requirement.requirementViewMore.actualWbsId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Status"
                name="status"
                id="status"
                value={this.props.requirement.requirementViewMore.status}
              />
              <TextInput
                label="Status Internal"
                name="statusInternal"
                id="statusInternal"
                value={this.props.requirement.requirementViewMore.statusInternal}
              />
            </FormRow>
      </Modal>
    );
  }
}

export default ViewRequirementViewMore;
