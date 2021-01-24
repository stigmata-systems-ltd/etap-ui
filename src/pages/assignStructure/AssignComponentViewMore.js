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
        title={`View Component - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeAssignComponentViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
            <FormRow>
              <TextInput
                label="Structure ID"
                name="structureId"
                id="structureId"
                // onChange={e =>
                //   this.props.handleChangeStructureName(e.target.value)
                // }
                value={this.props.assignStructure.assignComponentList.structureId}
              />
              <TextInput
                label="Structure Name"
                name="strcutureName"
                id="strcutureName"
                // onChange={e =>
                //   this.props.handleChangeStructureFamily(e.target.value)
                // }
                value={this.props.assignStructure.assignComponentList.strcutureName}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                // onChange={e =>
                //   this.props.handleChangeStructureName(e.target.value)
                // }
                value={this.props.assignStructure.assignComponentList.strcutureTypeName}
              />
              <TextInput
                label="Structure Code"
                name="structureCode"
                id="structureCode"
                // onChange={e =>
                //   this.props.handleChangeStructureFamily(e.target.value)
                // }
                value={this.props.assignStructure.assignComponentList.structureCode}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="BU Name"
                name="buName"
                id="buName"
                value={this.props.assignStructure.assignComponentList.buName}
              />
              <TextInput
                label="IC Name"
                name="icName"
                id="icName"
                value={this.props.assignStructure.assignComponentList.icName}
              />
            </FormRow>
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
                value={this.props.assignStructure.assignComponentViewMore.compTypeName}
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
                label="Project Id"
                name="projectId"
                id="projectId"
                value={this.props.assignStructure.assignComponentList.projectId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Breadth"
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
              <FormRow>
              <TextInput
                label="Make Type"
                name="makeType"
                id="makeType"
                value={this.props.assignStructure.assignComponentViewMore.makeType}
              />
              <TextInput
                label="Thickness"
                name="thickness"
                id="thickness"
                value={this.props.assignStructure.assignComponentViewMore.thickness}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Tag"
                name="tag"
                id="tag"
                value={this.props.assignStructure.assignComponentViewMore.isTag}
              />
              <TextInput
                label="QR Code"
                name="qrCode"
                id="qrCode"
                value={this.props.assignStructure.assignComponentViewMore.qrCode}
              />
            </FormRow>
      </Modal>
    );
  }
}

export default AssignComponentViewMore;
