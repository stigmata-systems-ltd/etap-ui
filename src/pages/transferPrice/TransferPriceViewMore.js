import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Button from "../../common/forms/Button";
import Loader from "../../common/Loader";


class TransferPriceViewMore extends Component {


    render() {
        return (

            <Modal
                title="Transfer Price - Details"
                showMoreModal={this.props.showMoreModal}
                handleClose={this.props.closeTransferPriceViewMoreModal}
                size="lg"
                isShowFooter={true}
            >
                {this.props.isLoading && <Loader />}
                <FormRow>


                    <TextInput

                        label="Transfer Price"
                        name="transferPrice"
                        id="transferPrice"
                        onChange={(e) =>
                            this.props.handleChangeTransferPrice(e.target.value)
                        }
                    />

                    <TextInput

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

export default TransferPriceViewMore;
