import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Button from "../../common/forms/Button";


class AddTransferPrice extends Component {
    constructor(props) {
        super(props);
    }
  


    render() {
        return (

            <Modal
                title="Add Transfer"
                showModal={this.props.showModal}
                handleSave={() => {
                    //   this.props.procurement.vendorStructures.length !== 0
                    //     ? this.props.procurement.activeItem.serviceType === "Fabrication"
                    //       ? this.props.fbAssignVendor()
                    //       : this.props.osAssignVendor()
                    //     : alert("Unable to save. Please check the fields");
                }}
                handleClose={this.props.closeTransferPriceModal}
                size="lg"
                isShowFooter={true}
            >
                <FormRow>


                    <TextInput
                        size="col-md-6"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        label="Transfer Price"
                        name="transferPrice"
                        id="transferPrice"
                        onChange={(e) =>
                            this.props.handleChangeTransferPrice(e.target.value)
                        }
                    />
                </FormRow>

            </Modal>

        );
    }
}

export default AddTransferPrice;
