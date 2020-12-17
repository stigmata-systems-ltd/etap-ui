import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import CustomAlert from "../../common/forms/customAlert";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import SimpleDropDown from "../../common/forms/SearchableDropDown";

class AddSubContractor extends Component {

    render() {
        return (
            <Modal
                title={`${this.props.vendor.isEditMode ? "Update" : "Add SubContractor/"
                    } Vendor`}
                showModal={this.props.vendor.showAddVendorModal}
                handleSave={
                    this.props.vendor.isEditMode
                        ? this.props.updateProject
                        : this.props.createProject
                }
                handleClose={this.props.closeAddVendorModal}
                size="lg"
                isShowFooter={true}
            >
                <FormRow>
                    <TextInput
                        label="Vendor Name"
                        name="vendorName"
                        id="vendorName"
                        onChange={(e) => this.props.handleChangeVendorName(e.target.value)}
                        value={this.props.vendor.vendorName}
                    />
                    <TextInput
                        label="Vendor Code"
                        name="vendorCode"
                        id="vendorCode"
                        onChange={(e) => this.props.handleChangeVendorCode(e.target.value)}
                        value={this.props.vendor.vendorCode}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        label="Email"
                        name="email"
                        id="email"
                        onChange={(e) => this.props.handleChangeVendorEmail(e.target.value)}
                        value={this.props.vendor.email}
                    />
                    <TextInput
                        label="Contact Number"
                        name="contactNumber"
                        id="contactNumber"
                        onChange={(e) => this.props.handleChangeVendorContactNumber(e.target.value)}
                        value={this.props.vendor.contactNumber}
                    />
                </FormRow>
                <FormRow>


                    <SimpleDropDown
                        label="Status"
                        selectOptions={[{ id: 'Active', label: 'Active' }, { id: 'InActive', label: 'InActive' }]}
                        onChange={(e) => this.props.handleChangeVendorStatus(e.target.value)}
                        value={this.props.vendor.vendorStatus}
                    />

                </FormRow>


                {this.props.vendor.isModalMsg && (
                    <p className="text-danger">{this.props.vendor.component.message}</p>
                )}
            </Modal>
        );
    }
}

export default AddSubContractor;
