import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import Button from '../../common/forms/Button';
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";

class AddProjModal extends Component {
  constructor(props) {
    super(props);
  }

  //   componentDidMount() {
  //     this.props.proj.getUserRoles();
  //   }

  render() {
      console.log("Edit",this.props.proj.isEditMode);
    return (
      <Modal
        title={`${
          this.props.proj.isEditMode ? "Update" : "Create New"
        } Project`}
        showModal={this.props.proj.showAddProjModal}
        handleSave={
          this.props.proj.isEditMode
            ? this.props.updateProject
            : this.props.createProject
        }
        handleClose={this.props.closeAddProjModal}
        size="lg"
        isShowFooter={true}
      >
        {this.props.proj.isLoading && <Loader />}

        <FormRow>
          <TextInput
            label="Project Name"
            name="projectName"
            id="projectName"
            onChange={(e) => this.props.handleChangeProjectName(e.target.value)}
            value={this.props.proj.projectName}
          />
          <SearchableDropDown
            label="Segment"
            name="segment"
            selectOptions={transformDropDownData(this.props.proj.segmentList, "id", "name")}
            onChange={(obj) => this.props.handleChangeSegment(obj)}
            value={this.props.proj.selectedSegment}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Area"
            name="area"
            id="area"
            onChange={(e) => this.props.handleChangeArea(e.target.value)}
            value={this.props.proj.area}
          />
          <SearchableDropDown
            label="Business Unit"
            name="businessUnit"
            selectOptions={transformDropDownData(this.props.proj.buList, "id", "name")}
            onChange={(obj) =>
              this.props.handleChangeBusinessUnit(obj)
            }
            value={this.props.proj.businessUnit}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Site Location"
            name="siteLocation"
            id="siteLocation"
            onChange={(e) =>
              this.props.handleChangeSiteLocation(e.target.value)
            }
            value={this.props.proj.siteLocation}
          />
          <SearchableDropDown
            label="Independent Company"
            name="independentCompany"
            id="independentCompany"
            selectOptions={transformDropDownData(this.props.proj.icList, "id", "name")}
            onChange={(obj) =>
              this.props.handleChangeIndependentCompany(obj)
            }
            value={this.props.proj.independentCompany}
          />

          <Button
            btnText="Add Location"
            onClick={this.props.saveUsersData}
            btnType="primary"
          />
        </FormRow>

        {this.props.proj.isModalMsg && (
          <p className="text-danger">{this.props.proj.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddProjModal;
