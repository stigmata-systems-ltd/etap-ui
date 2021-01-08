import React, { Component } from 'react';
import FaIcon from '../../common/FaIcon';
import IconButton from '../../common/forms/IconButton';
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformDropDownData } from "../../utils/dataTransformer";

class SiteRequirementStructure extends Component {
  render() {
    console.log("++++++++++++++")
    console.log(this.props.structFamily)
    console.log("++++++++++++++")
    return (
      <>
      <div class="col-sm-5">
      <SearchableDropDown
          size="col-sm-9"
          name="structureName"
          selectOptions={transformDropDownData(this.props.structureList, "id", "name")}
          onChange={(obj) => this.props.handleStructureNameChange(obj,this.props.index)}
          value={this.props.structureName}
          />
        </div>
        <div class="col-sm-1">
          <input
            type="text"
            class="form-control"
            placeholder="No. of Comp"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.ondrawingNumberChange(e, this.props.index)}
            value={this.props.drawingNumber}
            disabled
          />
        </div>
        <div class="col-sm-2">
          <input
            type="text"
            class="form-control"
            placeholder="Structure Family"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onStructureIDChange(e, this.props.index)}
            value={this.props.structureFamily}
            disabled
          />
        </div>
        <div class="col-sm-1">
          <input
            type="text"
            class="form-control"
            placeholder="Drawing Number"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.ondrawingNumberChange(e, this.props.index)}
            value={this.props.drawingNumber}
            disabled
          />
        </div>
        <div class="col-sm-2">
          <input
            type="text"
            class="form-control"
            placeholder="Quantity"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onQuantityChange(e, this.props.index)}
            value={this.props.quantity}
          />
        </div>
        <div class="col-sm-1">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onSiteRequirementRemove(this.props.index)}
          />
        </div>
      </>
    );
  }
}

export default SiteRequirementStructure;
