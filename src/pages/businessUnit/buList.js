import React, { Component } from 'react';
import FaIcon from '../../common/FaIcon';
import IconButton from '../../common/forms/IconButton';
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformDropDownData } from "../../utils/dataTransformer";

class BUList extends Component {
  render() {
    console.log("++++++++++++++")
    console.log(this.props.structFamily)
    console.log("++++++++++++++")
    return (
      <>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="BU Name"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onBUNameChange(e, this.props.index)}
            value={this.props.buName}
            readonly
          />
        </div>
        <div class="col-sm-1">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onBUNameRemove(this.props.index)}
          />
        </div>
      </>
    );
  }
}

export default BUList;
