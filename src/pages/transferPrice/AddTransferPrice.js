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
                title="Add Transfer Price"
                showModal={this.props.showModal}
                handleSave={
                    this.props.addTransferPrice
                }
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
                {this.props.transferPrice.message && (
                    <p className="text-danger">{this.props.transferPrice.message}</p>
                )}
            </Modal>

        );
    }
}

export default AddTransferPrice;
