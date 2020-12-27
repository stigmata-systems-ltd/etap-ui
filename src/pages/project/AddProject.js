import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import CustomAlert from "../../common/forms/customAlert";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Button from "../../common/forms/Button";
import { transformDropDownData } from "../../utils/dataTransformer";
import FaIcon from "../../common/FaIcon";
import IconTextButton from '../../common/forms/IconTextButton';
import IconButton from '../../common/forms/IconButton';

class AddProjModal extends Component {
  render() {
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
            selectOptions={transformDropDownData(
              this.props.proj.segmentList,
              "id",
              "name"
            )}
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
          {/* <TextInput
            label="Site Location"
            name="siteLocation"
            id="siteLocation"
            onChange={(e) =>
              this.props.handleChangeSiteLocation(e.target.value)
            }
            value={this.props.proj.siteLocation}
          /> */}
          <SearchableDropDown
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
          <IconTextButton
            btnText="Add Location"
            onClick={this.props.addLocation}
            className="h-fit-content"
          />
        </FormRow>
        <FormRow>
          {this.props.proj.locations.map((item, index) => {
            return (
              <>
                <TextInput
                  labelSize="col-sm-0"
                  fieldSize="col-sm-10"
                  size="col-md-5"
                  placeholder="Site Location"
                  name="siteLocation"
                  id="siteLocation"
                  onChange={(e) =>
                    this.props.handleChangeSiteLocation(e.target.value, index)
                  }
                  value={item.name}
                />
                <div class="col-md-1">
                  <IconButton
                    iconName="faTimesCircle"
                    onClick={() => this.props.removeLocation(index)}
                  />
                </div>
              </>
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
