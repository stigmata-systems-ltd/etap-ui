import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { structureFamilyRoles } from "./utils";
import SimpleDropDown from "../../common/forms/SearchableDropDown";

class AddStructureFamily extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.addStructureFamily();
  // }

  render() {
    return (
      <Modal
        title={`${this.props.structureFamily.isEditMode ? "Update" : "Create New"} Structure Family`}
        showModal={this.props.showAddStructureFamilyModal}
        handleSave={
          this.props.structureFamily.isEditMode
            ? this.props.updateStructureFamilyType
            : this.props.addStructureFamilyType
        }
        handleClose={
          this.props.structureFamily.isEditMode
            ? this.props.closeAddStructureFamilyModal
            : this.props.closeAddStructureFamilyModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <FormRow>
          <TextInput
            label="Structure Family"
            name="structureFamily"
            id="structureFamily"
            onChange={(e) => this.props.handleChangeStructureFamilyType(e.target.value)}
            value={this.props.structureFamily.structureFamilyType}
          />

          <SimpleDropDown
            label="Status"
            selectOptions={[{ value: 'Active', label: 'Active' }, { value: 'InActive', label: 'InActive' }]}
            onChange={(obj) => this.props.handleStructureFamilyTypeStatus(obj)}
            value={this.props.structureFamily.structureFamilyTypeStatus}
          />


        </FormRow>


        {this.props.structureFamily.isModalMsg && (
          <p className="text-danger">{this.props.structureFamily.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddStructureFamily;
