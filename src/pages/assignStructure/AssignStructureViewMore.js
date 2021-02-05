import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import AddAttributes from './AddAttributes';
class AddStructure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`View Structure - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeAssignStructureViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure ID"
            name="structureId"
            id="structureId"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.structureId}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Name"
            name="strcutureName"
            id="strcutureName"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.strcutureName}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Family"
            name="structureFamily"
            id="structureFamily"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
        </FormRow>
        <FormRow>

          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Total Weight"
            name="totalWeight"
            id="totalWeight"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.totalWeight}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Status"
            name="structureStatus"
            id="structureStatus"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.status}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Current Status"
            name="currentStatus"
            id="currentStatus"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.currentStatus}
          />
        </FormRow>

        <FormRow>
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Project Name"
            name="projectName"
            id="projectName"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.projectName}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Project Id"
            name="projectId"
            id="projectId"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.projectId}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="No.Of Component"
            name="componentsCount"
            id="componentsCount"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.componentsCount}
          />
        </FormRow>
        <FormRow>

          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8 "
            labelSize="col-sm-4"
            label="Drawing Number"
            name="drawingNo"
            id="drawingNo"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignStructureViewMore.drawingNo}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8 "
            labelSize="col-sm-4"
            label="BU Name"
            name="buName"
            id="buName"
            value={this.props.assignStructure.assignStructureViewMore.buName}
          />
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8 "
            labelSize="col-sm-4"
            label="IC Name"
            name="icName"
            id="icName"
            value={this.props.assignStructure.assignStructureViewMore.icName}
          />
        </FormRow>

        <FormRow>
          <TextInput disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Estimated Weight"
            name="estimatedWeight"
            id="estimatedWeight"
            value={this.props.assignStructure.assignStructureViewMore.estimatedWeight}
          />
        </FormRow>

        <label>Structure Attributes</label>
        <div class="form-group row location-row">
          {this.props.assignStructure.assignStructureViewMoreAttributes.map((e, i) => {
            return (
              <AddAttributes
                onNameChange={e =>
                  this.props.onNameChange(e.target.value, i)
                }
                onTypeOfInputChange={e =>
                  this.props.onTypeOfInputChange(e.target.value, i)
                }
                onUoMChange={e =>
                  this.props.onUoMChange(e.target.value, i)
                }

                index={i}
                nameValue={this.props.assignStructure.assignStructureViewMoreAttributes[i].name}
                typeOfInputValue={this.props.assignStructure.assignStructureViewMoreAttributes[i].typeOfInput}
                uomValue={this.props.assignStructure.assignStructureViewMoreAttributes[i].uom}

              />
            );
          })}
        </div>
      </Modal>
    );
  }
}

export default AddStructure;
