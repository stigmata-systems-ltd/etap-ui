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
import ExportExcel from "../../common/ExportExcel";

import {
  _componentInputData,
  _componentInputBodyData,
  _assignStructureInputData,
  _assignStructureBodyData,
  structAttriMetaData,
  componentsMetaData,
  getExcelData,
  getComponentTableData,
} from "./utils";

import FaIcon from "../../common/FaIcon";
import Col6 from "../../common/forms/Col6";
import { CSVReader } from "react-papaparse";
import IconTextButton from "../../common/forms/IconTextButton";
import IconButton from "../../common/forms/IconButton";
import DownloadToExcelButton from "../../common/forms/DownloadToExcelButton";
import { CSVDownloader } from "react-papaparse";
import Col from "reactstrap/lib/Col";

class AssignStructure extends Component {
  fileInputRef = React.createRef();
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
                size="col-md-4"
                label="Select Project"
                name="projectName"
                id="projectName"
                selectOptions={transformDropDownData(
                  this.props.scr.projList,
                  "id",
                  "name"
                )}
                labelSize="col-sm-4"
                fieldSize="col-sm-8"
                onChange={(obj) =>
                  this.props.handleChangeComponentProjectName(obj)
                }
                value={this.props.scr.projName}
              />
              <SearchableDropDown
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
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
              <TextInput
                size="col-md-4"
                labelSize="col-md-5 pr-0"
                fieldSize="col-md-7 "
                label="Estimated Weight"
                name="estimatedWeight"
                id="estimatedWeight"
                onChange={(e) =>
                  this.props.handleChangeEstimatedWeight(e.target.value)
                }
                value={this.props.scr.estimatedWeight}
              />
            </FormRow>
            <FormRow>
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                onChange={(e) =>
                  this.props.handleChangeComponentStructureFamily(
                    e.target.value
                  )
                }
                value={this.props.scr.strcutureType}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
                label="Structure Code"
                name="structureCode"
                id="structureCode"
                onChange={(e) =>
                  this.props.handleChangeComponentStructureFamily(
                    e.target.value
                  )
                }
                value={this.props.scr.structureCode}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <Col6 size="col-md-4">
                <FormRow>
                  <TextInput
                    label="Dr No"
                    size="col-md-7 px-0"
                    labelSize="col-md-5 pl-4"
                    fieldSize="col-md-7 px-0"
                    name="drawingNumber"
                    id="drawingNumber"
                    onChange={(e) =>
                      this.props.handleChangeComponentDrawingNumber(
                        e.target.value
                      )
                    }
                    value={this.props.scr.drawingNum}
                  />
                  <Col6 size="col-md-5">
                    <IconTextButton
                      iconName="faFileAlt"
                      size="lg"
                      btnText="Upload"
                      onClick={() => this.fileInputRef.current.click()}
                    />
                  </Col6>
                </FormRow>
              </Col6>
            </FormRow>
            <MultiFileInput
              innerRef={this.fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => this.props.handleFileUpload(e.target.files)}
              value={this.props.scr.fileInput}
            />
            <FormRow>
              {this.getFiles(this.props.scr.files).map((file, index) => (
                <Col6 size="col-md-3">
                  <div class="row mb-10">
                    <div class="col-md-2">
                      <IconButton
                        iconName="faTimesCircle"
                        onClick={() => this.props.removeFiles(file, index)}
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
            <FormRow>
              {/* table */}
              <CustomDataTable
                metaData={structAttriMetaData((e, id) =>
                  this.props.handleChangeAssignStruct(e, id)
                )}
                bodyData={this.props.scr.structAttri}
                title="Structure Attributes"
              />
            </FormRow>
            <hr />
            <FormRow className="row">
              <Col6 size="col-md-6 offset-md-3 d-flex justify-content-center">
                <Button
                  btnText="SAVE"
                  onClick={this.props.saveAssignStruct}
                  btnType="primary"
                />
              </Col6>

              {/* <Button
                btnText="Clear"
                onClick={this.props.clearStrcutAttri}
                btnType="btn-secondary"
              /> */}
            </FormRow>
            <br />
            <FormRow className="excel-upload-btn">
              <CSVReader
                onDrop={this.props.handleOnDrop}
                onError={this.handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={this.handleOnRemoveFile}
                className="test"
              >
                <span class="btnText">
                  <FaIcon iconName="faUpload" /> Upload Excel Template
                </span>
              </CSVReader>
              <ExportExcel
                data={getExcelData(this.props.scr)}
                // header={this.props.headers}
                filename={"test"}
                className="download-btn"
                iconName="faDownload"
              />
              <CustomDataTable
                metaData={componentsMetaData()}
                bodyData={getComponentTableData(this.props.scr)}
                noHeader={true}
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
