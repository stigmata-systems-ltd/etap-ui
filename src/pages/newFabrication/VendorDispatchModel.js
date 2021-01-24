import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Label from "../../common/forms/Label";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";

class VendorDispatchModel extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    let tempArr = [];
    this.props.newFabricationVendor.vendorList.map((item) => {
      tempArr.push({
        value: item.id,
        label: item.structureName,
      });
    });
    return (
      <Modal
        title="Update Site Dispatch"
        showModal={this.props.showModal}
        handleSave={() => {
          this.props.newFabricationVendor.workOrderNumber !== "" &&
            this.props.newFabricationVendor.dispatchDate !== "" &&
            this.props.newFabricationVendor.structureId !== ""
            ? this.props.updateNewFabricationVendor()
            : alert("Fill all the fields");
        }}
        handleClose={this.props.closeUpdateDispatchModal}
        size="lg"
        isShowFooter={true}
      >

        <FormRow>

          <SearchableDropDown
            label="Vendor"
            name="vendor"
            id="vendor"
            selectOptions={tempArr}
            onChange={(item) =>
              this.props.handleChangeVendor(item.value)
            }
          />

          <TextInput
            label="Structure"
            name="Structure"
            id="Structure"
            onChange={(e) =>
              this.props.handleChangeStructureName(e.target.value)
            }
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="To Site"
            name="toSite"
            id="toSite"
            onChange={(e) =>
              this.props.handleChangeToSite(e.target.value)
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
        <FormRow>
          <TextInput
            label="Qunatity"
            name="toSite"
            id="toSite"
            onChange={(e) =>
              this.props.handleChangeToSite(e.target.value)
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
        {this.props.newFabricationVendor.activeItem.serviceTypeId === 1 && (
          <>
            <FormRow>
              <TextInput
                label="Fabrication Cost"
                name="fabricationCost"
                id="fabricationCost"
                value={
                  this.props.newFabricationVendor.activeItem.fabricationCost
                    ? this.props.newFabricationVendor.activeItem.fabricationCost
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
              <FileInput
                size="col-md-6"
                onChange={(e) =>
                  this.props.handleChangeUploadedFile(e.target.files[0])
                }
              />
            </FormRow>
          </>
        )}
        {this.props.newFabricationVendor.activeItem.serviceTypeId === 2 && (
          <>
            <FormRow>
              <TextInput
                label="Monthly Rent"
                name="monthlyRent"
                id="monthlyRent"
                value={
                  this.props.newFabricationVendor.activeItem.monthlyRent
                    ? this.props.newFabricationVendor.activeItem.monthlyRent
                    : 0
                }
                disabled
              />

              <TextInput
                label="Contract Years"
                name="contractYears"
                id="contractYears"
                value={
                  this.props.newFabricationVendor.activeItem.contractYears
                    ? this.props.newFabricationVendor.activeItem.contractYears
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
                  this.props.newFabricationVendor.activeItem.planReleaseDate
                    ? this.props.newFabricationVendor.activeItem.planReleaseDate
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

export default VendorDispatchModel;
