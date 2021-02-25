import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformDropDownData } from "../../utils/dataTransformer";
import SiteRequirementsModal from "./SiteRequirementsModal";

class SiteRequirementStructure extends Component {
  render() {
    return (
      <>
      <div className="col-md-6 mx-1">
       <FormRow>
        <SearchableDropDown
          size="col-sm-5"
          labelSize="col-sm-0"
          fieldSize="col-sm-12"
          placeholder="Structure"
          name="structureName"
          selectOptions={transformDropDownData(
            this.props.structureList,
            "id",
            "name"
          )}
          onChange={(obj) =>
            this.props.handleStructureNameChange(obj, this.props.index)
          }
          value={this.props.structureName}
        />
        {/* <div class="col-sm-2">
          <input
            type="text"
            class="form-control"
            placeholder="No.of Comp"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.componentsCount}
            disabled
          />
        </div> */}
        {/* <div class="col-sm-2">
          <input
            type="text"
            class="form-control"
            placeholder="Str Family"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.onStructureIDChange(e, this.props.index)
            }
            value={this.props.structureFamily}
            disabled
          />
        </div>
        <div class="col-sm-2">
          <input
            type="text"
            class="form-control"
            placeholder="Dr Number"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.drawingNumber}
            disabled
          />
        </div> */}
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            placeholder="Qty"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) => this.props.onQuantityChange(e, this.props.index)}
            value={this.props.quantity}
          />
        </div>
        <div class="col-sm-1">
          <IconButton
            iconName="faEdit"
            index={this.props.index}
            onClick={() => this.props.showModalOpen()}
          />
        </div>
        <div class="col-sm-1">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onSiteRequirementRemove(this.props.index)}
          />
        </div>
        </FormRow>
      <SiteRequirementsModal showModal={
        this.props.requirement.showModal
      }
      {...this.props}
      />

        </div>
      </>
    );
  }
}

export default SiteRequirementStructure;
