import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import FileInput from "../../common/forms/FileInput";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import DataTable from "../../common/DataTable";
import { transformDropDownData } from "../../utils/dataTransformer";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Col6 from "../../common/forms/Col6";
import DateInput from "../../common/forms/DateInput";
import TextArea from "../../common/forms/TextArea";
import SiteRequirementStructure from "./SiteRequirementStructure";

class AddRequirement extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProjectList();
    this.props.getWBSList();
  }
  render() {
    const subprop = this.props.addRequirement;
    return (
      <>
        <ContentLoader>
          <FormContainer formTitle={"Add Requirement"}>
            <FormRow>
              <SearchableDropDown
                label="Project Name"
                name="projectName"
                selectOptions={transformDropDownData(
                  this.props.requirement.projectCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeRequirementProjectName(obj)
                }
                value={this.props.requirement.projectName}
              />
              <SearchableDropDown
                label="Required for WBS"
                name="requiredWorkBreak"
                selectOptions={transformDropDownData(
                  this.props.requirement.wbsCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeRequirementRequiredWorkBreak(obj)
                }
                value={this.props.requirement.requiredWorkBreak}
              />
            </FormRow>

            <FormRow>
              <SearchableDropDown
                label="Actual WBS"
                name="actualWorkBreak"
                selectOptions={transformDropDownData(
                  this.props.requirement.wbsCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeRequirementActualWorkBreak(obj)
                }
                value={this.props.requirement.actualWorkBreak}
              />
              <DateInput
                label="Planned Start Date"
                name="plannedStartDate"
                id="plannedStartDate"
                onChange={(e) =>
                  this.props.handleChangeRequirementPlannedStartDate(
                    e.target.value
                  )
                }
                value={this.props.requirement.planedStartDate}
              />
            </FormRow>
            <FormRow>
              <DateInput
                label="Actual Start Date of Usage"
                name="actualStartDateOfUsage"
                id="actualStartDateOfUsage"
                onChange={(e) =>
                  this.props.handleChangeRequirementActualStartDateOfUsage(
                    e.target.value
                  )
                }
                value={this.props.requirement.actualStartDateOfUsage}
              />
              <DateInput
                label="Planned Release Date"
                name="plannedReleaseDate"
                id="plannedReleaseDate"
                onChange={(e) =>
                  this.props.handleChangeRequirementPlannedReleaseDate(
                    e.target.value
                  )
                }
                value={this.props.requirement.expectedReleaseDate}
              />
            </FormRow>
            <FormRow>
              <DateInput
                label="Expected Release Date"
                name="expectedReleaseDate"
                id="expectedReleaseDate"
                onChange={(e) =>
                  this.props.handleChangeRequirementExpectedReleaseDate(
                    e.target.value
                  )
                }
                value={this.props.requirement.expectedReleaseDate}
              />
            </FormRow>

            <div class="form-group row">
              <div class="col-sm-8">
                <IconTextButton
                  btnText="Add Site Requirement"
                  onClick={this.props.addSiteRequirement}
                />
              </div>
            </div>
            <div class="form-group row location-row">
              {this.props.requirement.siteRequirementList.map((e, i) => {
                return (
                  <SiteRequirementStructure
                    onStructureIDChange={(e) =>
                      this.props.onStructureIDChange(e.target.value, i)
                    }
                    ondrawingNumberChange={(e) =>
                      this.props.ondrawingNumberChange(e.target.value, i)
                    }
                    onQuantityChange={(e) =>
                      this.props.onQuantityChange(e.target.value, i)
                    }
                    handleStructureNameChange={(obj) =>
                      this.props.handleStructureNameChange(obj, i)
                    }
                    onSiteRequirementRemove={(i) =>
                      this.props.onSiteRequirementRemove(i)
                    }
                    index={i}
                    structureFamily={
                      this.props.requirement.siteRequirementList[i].structFamily
                    }
                    componentsCount= {
                        this.props.requirement.siteRequirementList[i].componentsCount
                    }
                    drawingNumber={
                      this.props.requirement.siteRequirementList[i]
                        .drawingNo
                    }
                    quantity={
                      this.props.requirement.siteRequirementList[i].quantity
                    }
                    structureList={this.props.requirement.structureList}
                    structureName={
                      this.props.requirement.siteRequirementList[i]
                        .structureName
                    }
                  />
                );
              })}
            </div>
            <FormRow>
              <TextArea
              labelSize = "col-lg-3"
               size="col-lg-6"
                label="Remarks"
                name="remarks"
                id="remarks"
                onChange={(e) =>
                  this.props.handleChangeRequirementRemarks(e.target.value)
                }
                value={this.props.requirement.remarks}
                placeholder="Remarks"
              />
            </FormRow>
            <Button
              btnText="SAVE"
              onClick={this.props.saveRequirement}
              btnType="primary"
            />
            <Button
              btnText="DISCARD"
              btnType="cancel"
              onClick={this.props.resetRequirement}
            />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default AddRequirement;
