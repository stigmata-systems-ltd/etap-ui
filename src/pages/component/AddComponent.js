import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount() {
//     this.props.getUserRoles();
//   }

  render() {
    return (
      <Modal
        title={`${this.props.component.isEditMode ? "Update" : "Create New"} Component`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.component.isEditMode
            ? this.props.updateComponentType
            : this.props.addComponentType
        }
        handleClose={
          this.props.component.isEditMode
            ? this.props.closeUpdateComponentModal
            : this.props.closeAddComponentModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <FormRow>
          <TextInput
            label="Component Type"
            name="componentType"
            id="componentType"
            onChange={(e) => this.props.handleChangeComponentType(e.target.value)}
            value={this.props.component.componentType}
          />
        </FormRow>
        
        {this.props.component.isModalMsg && (
          <p className="text-danger">{this.props.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default CreateUser;
