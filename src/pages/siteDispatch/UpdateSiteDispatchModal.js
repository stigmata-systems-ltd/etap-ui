import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Label from "../../common/forms/Label";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";

class UpdateSiteDispatchModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    let tempArr = [];
    this.props.siteDispatch.structureListCode.map((item) => {
      tempArr.push({
        value: item.structureId,
        label: item.structureName,
      });
    });
    return (
      <Modal
        title="Update Site Dispatch"
        showModal={this.props.showModal}
        handleSave={this.props.updateSiteDispatch}
        handleClose={this.props.closeUpdateSiteDispatchModal}
        size="lg"
        isShowFooter={true}
      >
        <FormRow>
          <Label label="Vendor Name" />
          <Label label="To Site" />
        </FormRow>
        <FormRow>
          <SearchableDropDown
            label="Structure Name"
            name="structureName"
            id="structureName"
            selectOptions={tempArr}
            onChange={(item) =>
              this.props.handleChangeStructureName(item.value)
            }
          />
          <DateInput
            label="Dispatch Date"
            name="dispatchDate"
            id="dispatchDate"
            onChange={(e) =>
              this.props.handleChangeDispatchDate(e.target.value)
            }
          />
        </FormRow>
        {this.props.siteDispatch.activeItem.serviceTypeId === 1 && (
          <>
            <FormRow>
              <TextInput
                label="Fabrication Cost"
                name="fabricationCost"
                id="fabricationCost"
                value={
                  this.props.siteDispatch.activeItem.fabricationCost
                    ? this.props.siteDispatch.activeItem.fabricationCost
                    : 0
                }
                disabled
              />
              <TextInput
                label="Work Order Number"
                name="workOrderNumber"
                id="workOrderNumber"
                onChange={(e) =>
                  this.props.handleChangeWorkOrderNumber(e.target.value)
                }
              />
            </FormRow>
            <FormRow>
              <FileInput size="col-md-6" />
            </FormRow>
          </>
        )}
        {this.props.siteDispatch.activeItem.serviceTypeId === 2 && (
          <>
            <FormRow>
              <TextInput
                label="Monthly Rent"
                name="monthlyRent"
                id="monthlyRent"
                value={
                  this.props.siteDispatch.activeItem.monthlyRent
                    ? this.props.siteDispatch.activeItem.monthlyRent
                    : 0
                }
                disabled
              />

              <TextInput
                label="Contract Years"
                name="contractYears"
                id="contractYears"
                value={
                  this.props.siteDispatch.activeItem.contractYears
                    ? this.props.siteDispatch.activeItem.contractYears
                    : 0
                }
                disabled
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Plan Release Date"
                name="planReleaseDate"
                id="planReleaseDate"
                value={
                  this.props.siteDispatch.activeItem.planReleaseDate
                    ? this.props.siteDispatch.activeItem.planReleaseDate
                    : 0
                }
                disabled
              />
              <FileInput size="col-md-6" />
            </FormRow>
          </>
        )}
      </Modal>
    );
  }
}

export default UpdateSiteDispatchModal;
