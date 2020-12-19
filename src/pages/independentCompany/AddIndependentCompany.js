import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import CustomAlert from "../../common/forms/customAlert";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Button from '../../common/forms/Button';
import { transformDropDownData } from "../../utils/dataTransformer";

class AddIndependentCompany extends Component {

    render() {
        return (
            <Modal
                title={`${this.props.icbu.isEditMode ? "Update" : "Create New"
                    } IC/BU`}
                showModal={this.props.icbu.showAddIcbuModal}
                handleSave={
                    this.props.icbu.isEditMode
                        ? this.props.updateIcbu
                        : this.props.createIcbu
                }
                handleClose={this.props.closeAddIcbuModal}
                size="lg"
                isShowFooter={true}
            >

                <FormRow>
                    <TextInput
                        label="Independent Company"
                        name="ic"
                        id="ic"
                        onChange={(e) => this.props.handleChangeIc(e.target.value)}
                        value={this.props.icbu.ic}
                    />
                    <TextInput
                        label="Business Unit"
                        name="bu"
                        id="bu"
                        onChange={(e) => this.props.handleChangeBu(e.target.value)}
                        value={this.props.icbu.bu}
                    />
                </FormRow>

                {this.props.icbu.isModalMsg && (
                    <p className="text-danger">{this.props.icbu.component.message}</p>
                )}
            </Modal>
        );
    }
}

export default AddIndependentCompany;
