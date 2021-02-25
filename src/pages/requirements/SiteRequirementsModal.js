import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Label from "../../common/forms/Label";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";

class SiteRequirementsModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    let tempArr = 
    [{name:"Capacity",uom:"MT",value:"5",typeOfInput:{id:"numeric",label:"numeric"}},
    {name:"Overall Length",uom:"m",value:"6",typeOfInput:{id:"numeric",label:"numeric"}},
    {name:"Weight",uom:"MT",value:"7",typeOfInput:{id:"numeric",label:"numeric"}},
    {name:"Underslung/Overslung",typeOfInput:{id:"alphabetic",label:"alphabetic"},uom:"MT"}]

    return (
      <Modal
        title="Site Requirements"
        showModal={this.props.showModal}
        handleSave={() => {}}
        handleClose={this.props.showModalClose}
        size="lg"
        isShowFooter={true}
      >
        {tempArr.map((structure, index) => (
          <div className="row" key={index}>
            <div className="col-md-6">
              <TextInput
                size="col-md-12"
                fieldSize="col-md-12"
                // label="Attributes"
                name="attributes"
                id="attributes"
                value={structure.name}
                disabled
              />
            </div>
            <div className="col-md-3">
              <TextInput
                size="col-md-12"
                fieldSize="col-md-12"
                // label="UoM"
                name="uom"
                id="uom"
                value={structure.uom}
                disabled={true}
              />
            </div>
            <div className="col-md-3">
              <TextInput
                size="col-md-12"
                fieldSize="col-md-12"
                placeholder="Value"
                name="value"
                id="value"
                value={structure.value}
              />
            </div>
          </div>
        ))}
     </Modal>
    );
  }
}

export default SiteRequirementsModal;
