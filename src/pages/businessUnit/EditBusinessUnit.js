import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { businessUnitRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import BUList from "./buList";
import IconTextButton from '../../common/forms/IconTextButton';

class EditBusinessUnit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getICCodes();
  }

  render() {
    return (
      <Modal
        title={"Update BU"}
        showModal={this.props.showEditBusinessUnitModal}
        handleSave={this.props.updateBusinessUnitType}
        handleClose={this.props.closeAddBusinessUnitModal}
        size="lg"
        isShowFooter={true}
      >
        
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <FormRow>
          <SearchableDropDown
            label="IC Codes"
            name="icCodes"
            selectOptions={transformDropDownData(this.props.businessUnit.icCodeList, "id", "name")}
            onChange={(obj) => this.props.handleChangeICCode(obj)}
            value={this.props.businessUnit.icCode}
            />
            <TextInput
            label="Business Unit Name"
            name="Business Unit Name"
            id="businessUnitName"
            onChange={(e) => this.props.handleChangeBusinessUnit(e.target.value)}
            value={this.props.businessUnit.buName}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default EditBusinessUnit;
