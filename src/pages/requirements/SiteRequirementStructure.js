import React, { Component } from 'react';
import FaIcon from '../../common/FaIcon';
import IconButton from '../../common/forms/IconButton';

class SiteRequirementStructure extends Component {
  render() {
    return (
      <>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            placeholder="Structure ID"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onStructureIDChange(e, this.props.index)}
            value={this.props.structureId}
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="Drawing Number"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.ondrawingNumberChange(e, this.props.index)}
            value={this.props.drawingNumber}
          />
        </div>
        <div class="col-sm-3">
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
        <div class="col-sm-2">
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
