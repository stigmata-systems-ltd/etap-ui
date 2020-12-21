import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { businessUnitRoles } from "./utils";

class AddBusinessUnit extends Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount() {
//     this.props.getUserRoles();
//   }

  render() {
    return (
      <Modal
        title={`${this.props.businessUnit.isEditMode ? "Update" : "Create New"} Structure Family`}
        showModal={this.props.showAddBusinessUnitModal}
        handleSave={
          this.props.businessUnit.isEditMode
            ? this.props.updateBusinessUnitType
            : this.props.addBusinessUnitType
        }
        handleClose={
          this.props.businessUnit.isEditMode
            ? this.props.closeAddBusinessUnitModal
            : this.props.closeAddBusinessUnitModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <FormRow>
          <TextInput
            label="Business Unit"
            name="businessUnit"
            id="businessUnit"
            onChange={(e) => this.props.handleChangeBusinessUnitName(e.target.value)}
            value={this.props.businessUnit.businessUnitName}
          />
          <SimpleDropDown
            label="Status"
            selectOptions={[{id: 'Active',label:'Active'},{id:'InActive',label:'InActive'}]}
            onChange={(e) => this.props.handleBusinessUnitStatus(e.target.value)}
            value={this.props.businessUnit.businessUnitStatus}
          />
        </FormRow>
        
        {this.props.businessUnit.isModalMsg && (
          <p className="text-danger">{this.props.businessUnit.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddBusinessUnit;
