import React, { Component } from "react";
import FaIcon from "../FaIcon";
class CheckBox extends Component {
  render() {
    return (
      <div class={`${this.props.size ? this.props.size : "col-md-6"}`}>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                key={this.props.key}
                class="form-check-input"
                checked={this.props.checked}
                onChange={this.props.onChange}
                disabled={this.props.disabled?true:false}
              />
              {this.props.label}
              <i class="input-helper"></i>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckBox;
