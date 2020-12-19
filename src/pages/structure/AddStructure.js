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
        title={`${this.props.structure.isEdit ? "Update" : "Create New"} Structure`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.structure.isEdit
            ? this.props.updateStructure
            : this.props.addStructure
        }
        handleClose={
          this.props.structure.isEditMode
            ? this.props.closeAddStructureModal
            : this.props.closeAddStructureModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        
            <FormRow>
              <TextInput
                label="Structure Name"
                name="structureName"
                id="structureName"
                onChange={e =>
                  this.props.handleChangeStructureName(e.target.value)
                }
                value={this.props.structure.structureName}
              />
              <TextInput
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                onChange={e =>
                  this.props.handleChangeStructureFamily(e.target.value)
                }
                value={this.props.structure.structureFamily}
              />
            </FormRow>
            <div class="form-group row">
                  <div class="col-sm-8">
                    <IconTextButton
                      btnText="Add Attributes"
                      onClick={this.props.addAttribute}
                    />
                  </div>
                </div>
            <div class="form-group row location-row">
                  {this.props.structure.attributeList.map((e, i) => {
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
                        onAttributeRemove={i => this.props.onAttributeRemove(i)}
                        index={i}
                        nameValue={this.props.structure.attributeList[i].name}
                        typeOfInputValue={this.props.structure.attributeList[i].typeOfInput}
                        uomValue={this.props.structure.attributeList[i].uom}
                        
                      />
                    );
                  })}
                </div>
      </Modal>
    );
  }
}

export default AddStructure;
