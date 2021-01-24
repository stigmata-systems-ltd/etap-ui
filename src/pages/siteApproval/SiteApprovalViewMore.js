import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';

class SiteApprovalViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Show model: ${this.props.showMoreModal}`)
    return (
      <Modal
        title={`View Site Approval - Details`}
        showModal={this.props.showMoreModal}
        handleClose={this.props.closeSiteApprovalViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Structure ID"
            name="structureId"
            id="structureId"
          //value={this.props.siteApproval.siteApprovalViewMore.structureId}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Quantity Requested"
            name="quantityRequested"
            id="quantityRequested"
          //value={this.props.siteApproval.siteApprovalViewMore.quantityRequested}
          />
        </FormRow>

      </Modal>
    );
  }
}

export default SiteApprovalViewMore;
