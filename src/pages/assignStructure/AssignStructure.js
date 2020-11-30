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

import { _componentInputData, _componentInputBodyData } from './utils';
import Col6 from '../../common/forms/Col6';

class AssignStructure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.assignStructure;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Assign Structure/Component'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Select Project"
                                name="projectName"
                                id="projectName"
                                onChange={e =>
                                    this.props.handleChangeComponentProjectName(e.target.value)
                                }
                            // value={subprop.projectName}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Select Structure"
                                name="structureName"
                                id="structureName"
                                onChange={e =>
                                    this.props.handleChangeComponentStructureName(e.target.value)
                                }
                            // value={subprop.structureName}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeComponentStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />

                        </FormRow>
                        <p><b>Structure Attributes :</b></p>
                        <FormRow>


                            <TextInput
                                size="col-sm-4"
                                label="Capacity"
                                name="capacity"
                                id="capacity"
                                onChange={e =>
                                    this.props.handleChangeComponentCapacity(e.target.value)
                                }
                            // value={subprop.capacity}
                            />


                            <TextInput
                                size="col-sm-4"
                                label="Drawing No"
                                name="drawingNumber"
                                id="drawingNumber"
                                onChange={e =>
                                    this.props.handleChangeComponentDrawingNumber(e.target.value)
                                }
                            // value={subprop.drawingNumber}
                            />


                            <FileInput size="col-sm-4" />


                        </FormRow>
                        <FormRow>


                            <TextInput
                                size="col-sm-4"
                                label="Overall Length"
                                name="overAllLength"
                                id="overAllLength"
                                onChange={e =>
                                    this.props.handleChangeComponentOverAllLength(e.target.value)
                                }
                            // value={subprop.overAllLength}
                            />


                            <SimpleDropDown
                                size="col-sm-5"
                                label="Underslung/Overslung"
                                name="underSlungOverSlung"
                                id="underSlungOverSlung"
                                onChange={e =>
                                    this.props.handleChangeUnderSlungOverSlung(e.target.value)
                                }
                            // value={subprop.underSlungOverSlung}
                            />



                        </FormRow>
                        <FormRow>

                            <TextInput
                                label="Estimated Weight"
                                name="estimatedWeight"
                                id="estimatedWeight"
                                onChange={e =>
                                    this.props.handleChangeComponentEstimatedWeight(e.target.value)
                                }
                            // value={subprop.estimatedWeight}
                            />


                        </FormRow>
                        <FormRow>
                            <Button
                                btnText="+ Basic Diamensions"
                                onClick={this.props.basicDiamensions}
                                btnType="primary"
                            />
                        </FormRow>
                        <FormRow>

                            <TextInput
                                size="col-sm-4"
                                label="Length"
                                name="diamensionLength"
                                id="diamensionLength"
                                onChange={e =>
                                    this.props.handleChangeDiamensionLength(e.target.value)
                                }
                            // value={subprop.diamensionLength}
                            />


                            <TextInput
                                size="col-sm-4"
                                label="Height"
                                name="diamensionHeight"
                                id="diamensionHeight"
                                onChange={e =>
                                    this.props.handleChangeDiamensionHeight(e.target.value)
                                }
                            // value={subprop.diamensionHeight}
                            />


                            <TextInput
                                size="col-sm-4"
                                label="Width"
                                name="diamensionWidth"
                                id="diamensionWidth"
                                onChange={e =>
                                    this.props.handleChangeDiamensionWidth(e.target.value)
                                }
                            // value={subprop.diamensionWidth}
                            />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="No.of Components"
                                name="noOfComponents"
                                id="noOfComponents"
                                onChange={e =>
                                    this.props.handleChangeNoOfComponents(e.target.value)
                                }
                            // value={subprop.noOfComponents}
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
                                bodyData={_componentInputBodyData}

                            />
                        </FormRow><br />



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

export default AssignStructure;
