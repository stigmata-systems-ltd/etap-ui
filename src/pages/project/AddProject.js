import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import { transformDropDownData } from "../../utils/dataTransformer";
import IconTextButton from "../../common/forms/IconTextButton";
import IconButton from "../../common/forms/IconButton";
import Col6 from "../../common/forms/Col6";

class AddProjModal extends Component {
  render() {
    return (
      <Modal
        title={`${this.props.proj.isEditMode ? "Update" : "Add New"} Project`}
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
        <FormRow>
          <TextInput
            size="col-md-4"
            label="Project Name"
            name="PROJECT_NAME"
            id="projectName"
            value={this.props.proj.projectName}
            onChange={(e) => this.props.handleChangeProjectName(e.target.value)}
          />
          <TextInput
            size="col-md-4"
            label="Area"
            name="area"
            id="area"
            onChange={(e) => this.props.handleChangeArea(e.target.value)}
            value={this.props.proj.area}
          />
          <TextInput
            size="col-md-4"
            label="Job Code"
            value={this.props.proj.jobCode}
            onChange={(e) => this.props.handleChangeJobCode(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <TextInput
            size="col-md-4"
            label="EDRC Code"
            value={this.props.proj.edrcCode}
            onChange={(e) => this.props.handleChangeEdrcCode(e.target.value)}
          />
          <SearchableDropDown
            size="col-md-4"
            label="Independent Company"
            name="independentCompany"
            id="independentCompany"
            selectOptions={transformDropDownData(
              this.props.proj.icList,
              "id",
              "name"
            )}
            onChange={(obj) => this.props.handleChangeIndependentCompany(obj)}
            value={this.props.proj.independentCompany}
          />
          <SearchableDropDown
            size="col-md-4"
            label="Business Unit"
            name="businessUnit"
            selectOptions={transformDropDownData(
              this.props.proj.buList,
              "id",
              "name"
            )}
            onChange={(obj) => this.props.handleChangeBusinessUnit(obj)}
            value={this.props.proj.businessUnit}
          />
        </FormRow>
        <FormRow>
          <IconTextButton
            btnText="Add Location"
            onClick={this.props.addLocation}
            className="h-fit-content"
          />
        </FormRow>
        <br />
        <FormRow>
          {this.props.proj.locations.map((item, index) => {
            return (
              <Col6 size="col-md-4">
                <TextInput
                  size="col-md-12"
                  fieldSize="col-md-10 px-0"
                  placeholder="Site Location"
                  name="siteLocation"
                  id="siteLocation"
                  onChange={(e) =>
                    this.props.handleChangeSiteLocation(e.target.value, index)
                  }
                  value={item.name}
                  iconSize="col-md-2"
                  rightIcon={
                    <IconButton
                      className="px-0"
                      iconName="faTimesCircle"
                      onClick={() => this.props.removeLocation(index)}
                    />
                  }
                />
              </Col6>
            );
          })}
        </FormRow>
        {this.props.proj.isModalMsg && (
          <p className="text-danger">{this.props.proj.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddProjModal;
