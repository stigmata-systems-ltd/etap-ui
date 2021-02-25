import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Button from "../../common/forms/Button";


class AddPhysicalVerification extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

            <Modal
                title="Add Physical Verification Data"
                showModal={this.props.showModal}
                // handleSave={
                //     this.props.fromDue ,
                //     this.props.toDue
                // }
                handleClose={this.props.closePhysicalVerificationModal}
                size="lg"
                isShowFooter={true}
            >
                <FormRow>


                    <TextInput
                        size="col-md-6"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        label="From Due"
                        name="fromDue"
                        id="fromDue"
                        onChange={(e) =>
                            this.props.handleChangeFromDue(e.target.value)
                        }
                    />
                    <TextInput
                        size="col-md-6"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        label="To Due"
                        name="toDue"
                        id="toDue"
                        onChange={(e) =>
                            this.props.handleChangeToDue(e.target.value)
                        }
                    />
                </FormRow>
                {/* {this.props.physicalVerification.message && (
                    <p className="text-danger">{this.props.physicalVerification.message}</p>
                )} */}
            </Modal>

        );
    }
}

export default AddPhysicalVerification;
