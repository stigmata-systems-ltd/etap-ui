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
import AddAttributes from './AddAttributes';
class AssignComponentViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`View Assign Component - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeAssignComponentViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        
            <FormRow>
              <TextInput
                label="Component ID"
                name="componentID"
                id="componentID"
                value={this.props.assignStructure.assignComponentViewMore.compId}
              />
              <TextInput
                label="Component Number"
                name="componentNO"
                id="componentNO"
                value={this.props.assignStructure.assignComponentViewMore.componentNo}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Component Status"
                name="compStatus"
                id="compStatus"
                value={this.props.assignStructure.assignComponentViewMore.compStatus}
              />
              <TextInput
                label="Component Type"
                name="compTypeId"
                id="compTypeId"
                value={this.props.assignStructure.assignComponentViewMore.compTypeId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Drawing No"
                name="drawingNo"
                id="drawingNo"
                value={this.props.assignStructure.assignComponentViewMore.drawingNo}
              />
              <TextInput
                label="Project Structure Id"
                name="projectStructureId"
                id="projectStructureId"
                value={this.props.assignStructure.assignComponentViewMore.projectStructureId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Breath"
                name="breath"
                id="breath"
                value={this.props.assignStructure.assignComponentViewMore.breath}
              />
              <TextInput
                label="Height"
                name="height"
                id="height"
                value={this.props.assignStructure.assignComponentViewMore.height}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Length"
                name="leng"
                id="leng"
                value={this.props.assignStructure.assignComponentViewMore.leng}
              />
              <TextInput
                label="Width"
                name="width"
                id="width"
                value={this.props.assignStructure.assignComponentViewMore.width}
              />
            </FormRow>
      </Modal>
    );
  }
}

export default AssignComponentViewMore;
