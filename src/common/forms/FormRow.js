import React, { Component } from "react";

class FormRow extends Component {

    render() {
        return (
            <div class={`row ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}

export default FormRow;