import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import MultiFileInput from "../../common/forms/MultiFileInput";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import DataTable from "../../common/DataTable";
import CustomDataTable from "../../common/CustomDataTable";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformDropDownData } from "../../utils/dataTransformer";

import {
  _componentInputData,
  _componentInputBodyData,
  _assignStructureInputData,
  _assignStructureBodyData,
} from "./utils";

import FaIcon from "../../common/FaIcon";
import Col6 from "../../common/forms/Col6";
import { CSVReader } from "react-papaparse";
import IconTextButton from "../../common/forms/IconTextButton";
import IconButton from "../../common/forms/IconButton";

class AssignStructure extends Component {
  componentDidMount = () => {
    this.props.setInitialData();
  };

  getFiles = (files) => {
    let fileIcons = [];
    for (let i = 0; i < files.length; i++) {
      fileIcons.push(files[i]);
    }
    return fileIcons;
  };

  render() {
    return (
      <>
        <ContentLoader>
          {this.props.scr.isLoading && <Loader />}
          {this.props.scr.isProjMsg && (
            <CustomAlert variant="success" message={this.props.proj.message} />
          )}
          <FormContainer formTitle={"Assign Structure"}>
            <FormRow>
              <SearchableDropDown
                label="Select Project"
                name="projectName"
                id="projectName"
                selectOptions={transformDropDownData(
                  this.props.scr.projList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeComponentProjectName(obj)
                }
                value={this.props.scr.projName}
              />
              <SearchableDropDown
                label="Select Structure"
                name="structureName"
                id="structureName"
                selectOptions={transformDropDownData(
                  this.props.scr.structList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeComponentStructureName(obj)
                }
                value={this.props.scr.structName}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                onChange={(e) =>
                  this.props.handleChangeComponentStructureFamily(
                    e.target.value
                  )
                }
                value={this.props.scr.structFamily}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
                label="Drawing No"
                name="drawingNumber"
                id="drawingNumber"
                onChange={(e) =>
                  this.props.handleChangeComponentDrawingNumber(e.target.value)
                }
                value={this.props.drawingNum}
              />
            </FormRow>
            <FormRow>
              <MultiFileInput
                size="col-md-8"
                label="Select Documents"
                onChange={(e) => this.props.handleFileUpload(e.target.files)}
              />
            </FormRow>
            <FormRow>
              {this.getFiles(this.props.scr.files).map((file) => (
                <Col6 size="col-md-4">
                  <div class="row mb-10">
                    <div class="col-md-2">
                      <IconButton
                        iconName="faTimesCircle"
                        onClick={this.props.removeFiles}
                      />
                    </div>
                    <div class="col-md-10">
                      <IconTextButton
                        iconName="faFile"
                        size="lg"
                        btnText={file.name}
                      />
                    </div>
                  </div>
                </Col6>
              ))}
            </FormRow>
            <p>
              <b>Structure Attributes :</b>
            </p>
            <FormRow>
              {/* table */}
              <DataTable
                metaData={_assignStructureInputData}
                bodyData={_assignStructureBodyData}
              />
            </FormRow>
            <br />
            <FormRow>
              <TextInput
                label="Estimated Weight"
                name="estimatedWeight"
                id="estimatedWeight"
                onChange={(e) =>
                  this.props.handleChangeEstimatedWeight(e.target.value)
                }
                value={this.props.scr.estimatedWeight}
              />
              <TextInput
                label="No.of Components"
                name="noOfComponents"
                id="noOfComponents"
                onChange={(e) =>
                  this.props.handleChangeNoOfComponents(e.target.value)
                }
                value={this.props.scr.noOfComponents}
                disabled={true}
              />
            </FormRow>
            <FormRow>
              <Button
                btnText="SAVE"
                onClick={this.props.saveAssignStruct}
                btnType="primary"
              />
            </FormRow>
            <FormRow>
              <Button
                btnText="+ Excel Template Upload"
                onClick={this.props.saveSubContractorData}
                btnType="primary"
              />
              <DataTable
                metaData={_componentInputData}
                bodyData={this.props.scr.uploadData}
              />
            </FormRow>
            <br />

            <Button
              btnText="SAVE"
              onClick={this.props.saveAssignComp}
              btnType="primary"
            />
            <Button
              btnText="DISCARD"
              btnType="cancel"
              onClick={this.props.resetSubContractorData}
            />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default AssignStructure;
