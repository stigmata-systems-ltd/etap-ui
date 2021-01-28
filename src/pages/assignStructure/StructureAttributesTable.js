import React, { Component } from "react";
import { Table } from "react-bootstrap";
import FormRow from "../../common/forms/FormRow";
import Popup from "../../common/forms/Popup";

class StructureAttributesTable extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorType: "",
    };
  }
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  isNumbers = (value) => {
    const regex = /^\d+$/;
    return regex.test(value) ? true : false;
  };

  isAlphabets = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? true : false;
  };

  handleOnChange = (e, attribute) => {
    if (e.target.value !== "") {
      if (attribute.typeOfInput.id === "numeric") {
        if (this.isNumbers(e.target.value)) {
          this.props.onChange(e, attribute.id);
        } else {
          this.setState({ error: true, errorType: "numeric" });
        }
      } else if (attribute.typeOfInput.id === "alphabetic") {
        if (this.isAlphabets(e.target.value)) {
          this.props.onChange(e, attribute.id);
        } else {
          this.setState({ error: true, errorType: "alphabetic" });
        }
      } else {
        this.props.onChange(e, attribute.id);
      }
    } else {
      this.props.onChange(e, attribute.id);
    }
  };

  render() {
    return (
      <>
        <FormRow>
          <h3 className="mr-auto ml-3 mb-4">{this.props.title}</h3>
        </FormRow>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>
                <strong>Description</strong>
              </th>
              <th>
                <strong>UoM</strong>
              </th>
              <th>
                <strong>Value</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((attribute) => (
              <tr key={attribute.id}>
                <td>{attribute.name}</td>
                <td>{attribute.uom}</td>
                <td>
                  <input
                    type="text"
                    value={attribute.value}
                    onChange={(e) => this.handleOnChange(e, attribute)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {this.state.error && (
            <Popup
              type="error"
              message="Type Of Input is Incorrect"
              onClose={() => {
                this.setState({
                  error: false,
                  errorType: "",
                });
              }}
            />
          )}
        </Table>
      </>
    );
  }
}

export default StructureAttributesTable;
