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

class ViewSurplusViewMore extends Component {
  constructor(props) {
    super(props);
  }

  dateFormatter(ele){
    let dateArray=ele.split('T');
    return dateArray[0];
  }

  render() {
    console.log(`Show model: ${this.props.showAddComponentModal}`)
    return (
      <Modal
        title={`View Surplus - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeSurplusViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        
            <FormRow>
              <TextInput
                label="Site Request ID"
                name="siteReqId"
                id="siteReqId"
                value={this.props.surplus.surplusViewMore.siteReqId}
              />
              <TextInput
                label="Structure ID"
                name="structureId"
                id="structureId"
                value={this.props.surplus.surplusViewMore.structureId}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Structure Name"
                name="structureName"
                id="structureName"
                value={this.props.surplus.surplusViewMore.structureName}
              />
              <TextInput
                label="Structure Family"
                name="structureTypeName"
                id="structureTypeName"
                value={this.props.surplus.surplusViewMore.structureTypeName}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Status"
                name="status"
                id="status"
                value={this.props.surplus.surplusViewMore.status}
              />
              <TextInput
                label="Status Internal"
                name="statusInternal"
                id="statusInternal"
                value={this.props.surplus.surplusViewMore.statusInternal}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Surplus Date"
                name="surplusDate"
                id="surplusDate"
                value={this.dateFormatter(`${this.props.surplus.surplusViewMore.surplusDate}`)}
              />
              <TextInput
                label="Project Name"
                name="projectName"
                id="projectName"
                value={this.props.surplus.surplusViewMore.projectName}
              />
            </FormRow>
      </Modal>
    );
  }
}

export default ViewSurplusViewMore;
