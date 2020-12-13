import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import FileInput from '../../common/forms/FileInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import Col6 from '../../common/forms/Col6';
import DateInput from '../../common/forms/DateInput';
import TextArea from '../../common/forms/TextArea';

class AddRequirement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.addRequirement;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add Requirement'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Select Project"
                                name="projectName"
                                id="projectName"
                                onChange={e =>
                                    this.props.handleChangeRequirementProjectName(e.target.value)
                                }
                            // value={subprop.projectName}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureName"
                                id="structureName"
                                onChange={e =>
                                    this.props.handleChangeRequirementStructureName(e.target.value)
                                }
                            // value={subprop.structureName}
                            />
                            <TextInput
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeRequirementStructureId(e.target.value)
                                }
                            // value={subprop.structureId}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="No of Components"
                                name="noOfComponents"
                                id="noOfComponents"
                                onChange={e =>
                                    this.props.handleChangeRequirementNumberOfComponents(e.target.value)
                                }
                            // value={subprop.noOfComponents}
                            />

                            <TextInput
                                label="Drawing Number"
                                name="drawingNumber"
                                id="drawingNumber"
                                onChange={e =>
                                    this.props.handleChangeRequirementDrawingNumber(e.target.value)
                                }
                            // value={subprop.drawingNumber}
                            />

                        </FormRow>


                        <FormRow>
                            <TextInput
                                label="Quantity"
                                name="quantity"
                                id="quantity"
                                onChange={e =>
                                    this.props.handleChangeRequirementQuantity(e.target.value)
                                }
                            // value={subprop.quantity}
                            />
                            <SimpleDropDown
                                label="Required for WBS"
                                name="requiredWorkBreak"
                                id="requiredWorkBreak"
                                onChange={e =>
                                    this.props.handleChangeRequirementRequiredWorkBreak(e.target.value)
                                }
                            // value={subprop.requiredWorkBreak}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Required By"
                                name="requiredBy"
                                id="requiredBy"
                                onChange={e =>
                                    this.props.handleChangeRequirementRequiredBy(e.target.value)
                                }
                            // value={subprop.requiredBy}
                            />
                            <SimpleDropDown
                                label="Actual WBS"
                                name="actualWorkBreak"
                                id="actualWorkBreak"
                                onChange={e =>
                                    this.props.handleChangeRequirementActualWorkBreak(e.target.value)
                                }
                            // value={subprop.actualWorkBreak}
                            />


                        </FormRow>
                        <FormRow>
                            <DateInput
                                label="Planned Start Date"
                                name="plannedStartDate"
                                id="plannedStartDate"
                                onChange={e =>
                                    this.props.handleChangeRequirementPlannedStartDate(e.target.value)
                                }
                            // value={subprop.plannedStartDate}
                            />
                            <DateInput
                                label="Actual Start Date of Usage"
                                name="actualStartDateOfUsage"
                                id="actualStartDateOfUsage"
                                onChange={e =>
                                    this.props.handleChangeRequirementActualStartDateOfUsage(e.target.value)
                                }
                            // value={subprop.actualStartDateOfUsage}
                            />


                        </FormRow>
                        <FormRow>
                            <DateInput
                                label="Planned Release Date"
                                name="plannedReleaseDate"
                                id="plannedReleaseDate"
                                onChange={e =>
                                    this.props.handleChangeRequirementPlannedReleaseDate(e.target.value)
                                }
                            // value={subprop.plannedReleaseDate}
                            />
                            <DateInput
                                label="Expected Release Date"
                                name="expectedReleaseDate"
                                id="expectedReleaseDate"
                                onChange={e =>
                                    this.props.handleChangeRequirementExpectedReleaseDate(e.target.value)
                                }
                            // value={subprop.expectedReleaseDate}
                            />


                        </FormRow>

                        <FormRow>
                            <TextInput
                                label="MR No"
                                name="mrNo"
                                id="mrNo"
                                onChange={e =>
                                    this.props.handleChangeRequirementMrNo(e.target.value)
                                }
                            // value={subprop.mrNo}
                            />
                        </FormRow>
                        <FormRow>
                            <TextArea
                                
                                label="Remarks"
                                name="remarks"
                                id="remarks"
                                onChange={e =>
                                    this.props.handleChangeRequirementRemarks(e.target.value)
                                }
                                // value={subprop.remarks}
                                placeholder="Remarks"
                            />
                        </FormRow>




                        <br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveSubContractorData}
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

export default AddRequirement;
