import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";


class TwccDispatchViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`TWCC Dspatch - Details`}
        showModal={this.props.showTwccDispatchModal}
        handleClose={this.props.closeTwccDispatchViewMoreModal}
        size="xl"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Attributes"
            name="structureAttributes"
            id="structureAttributes"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.structureId}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Quantity"
            name="quantity"
            id="quantity"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
          />
          
        </FormRow>
        
      </Modal>
    );
  }
}

export default TwccDispatchViewMore;
