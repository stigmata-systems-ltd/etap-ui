import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

class BuiltViewMore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Built Attributes - Details`}
                showModal={this.props.showBuiltViewMoreModal}
                handleClose={this.props.closeBuiltViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}


                <h4>Structure Attributes :</h4>
                <FormRow>
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        name="strcutureName"
                        id="strcutureName"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        name="structureFamily"
                        id="structureFamily"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        name="structureFamily"
                        id="structureFamily"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                </FormRow>


            </Modal>
        );
    }
}

export default BuiltViewMore;
