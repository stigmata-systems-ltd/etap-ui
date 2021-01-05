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
import TextArea from '../../common/forms/TextArea';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import Radio from '../../common/forms/Radio';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import { _structureModificationInputData, _structureModificationBodyData } from './utils';
import Col6 from '../../common/forms/Col6';
import DateInput from '../../common/forms/DateInput';

class StructureModification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.structureModification;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Structure Modification'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Dispatched From"
                                name="dispatchedFrom"
                                id="dispatchedFrom"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDispatchedFrom(e.target.value)
                                }
                            // value={subprop.dispatchedFrom}
                            />
                            <SimpleDropDown
                                label="Received At"
                                name="receivedAt"
                                id="receivedAt"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationReceivedAt(e.target.value)
                                }
                            // value={subprop.receivedAt}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />
                            <TextInput
                                label="Structure ID"
                                name="structuredId"
                                id="structuredId"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationStructuredId(e.target.value)
                                }
                            // value={subprop.structuredId}
                            placeholder="Auto Fetch"
                            />

                        </FormRow>

                        <FormRow>
                            <DataTable

                                metaData={_structureModificationInputData}
                                bodyData={_structureModificationBodyData}
                                showEdit={true}

                            />
                        </FormRow><br/>
                        <FormRow>
                            <TextInput
                                size="col-md-4"
                                label="Component"
                                name="componentName"
                                id="componentName"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationComponentName(e.target.value)
                                }
                                // value={subprop.componentName}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-4"
                                label="Component ID"
                                name="componentId"
                                id="componentId"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationComponentId(e.target.value)
                                }
                                // value={subprop.componentId}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-4"
                                label="Drawing Number"
                                name="drawingNumber"
                                id="drawingNumber"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDrawingNumber(e.target.value)
                                }
                                // value={subprop.drawingNumber}
                                placeholder="Auto Fetch"
                            />

                        </FormRow>
                        <p><b>Dimensions :</b></p>
                        <FormRow>
                            <TextInput
                                size="col-md-3"
                                label="Length"
                                name="dimensionLength"
                                id="dimensionLength"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDimensionsLength(e.target.value)
                                }
                                // value={subprop.dimensionLength}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-3"
                                label="Width"
                                name="dimensionWidth"
                                id="dimensionWidth"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDimensionsWidth(e.target.value)
                                }
                                // value={subprop.dimensionWidth}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-3"
                                label="Height"
                                name="dimensionHeight"
                                id="dimensionHeight"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDimensionsHeight(e.target.value)
                                }
                                // value={subprop.dimensionHeight}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-3"
                                label="Breadth"
                                name="dimensionBreadth"
                                id="dimensionBreadth"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDimensionsBreadth(e.target.value)
                                }
                                // value={subprop.dimensionBreadth}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                size="col-md-3"
                                label="Weight"
                                name="dimensionWeight"
                                id="dimensionWeight"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationDimensionsWeight(e.target.value)
                                }
                                // value={subprop.dimensionWeight}
                                placeholder="Auto Fetch"
                            />

                        </FormRow>
                        <p><b>Modification Dimensions :</b></p>
                        <FormRow>
                            <TextInput
                                size="col-md-3"
                                label="Length"
                                name="length"
                                id="length"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationLength(e.target.value)
                                }
                            // value={subprop.length}

                            />
                            <TextInput
                                size="col-md-3"
                                label="Width"
                                name="width"
                                id="width"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationWidth(e.target.value)
                                }
                            // value={subprop.width}

                            />
                            <TextInput
                                size="col-md-3"
                                label="Height"
                                name="height"
                                id="height"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationHeight(e.target.value)
                                }
                            // value={subprop.height}

                            />
                            <TextInput
                                size="col-md-3"
                                label="Breadth"
                                name="breadth"
                                id="breadth"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationBreadth(e.target.value)
                                }
                            // value={subprop.breadth}

                            />
                            <TextInput
                                size="col-md-3"
                                label="Weight"
                                name="weight"
                                id="weight"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationWeight(e.target.value)
                                }
                            // value={subprop.weight}

                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                               
                                label="Additional Plates"
                                name="additionalPlates"
                                id="additionalPlates"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationAdditionalPlates(e.target.value)
                                }
                            // value={subprop.additionalPlates}

                            />
                        </FormRow>
                        <FormRow>
                            <TextArea
                               
                               
                                name="remarks"
                                id="remarks"
                                onChange={e =>
                                    this.props.handleChangeStructureModificationRemarks(e.target.value)
                                }
                            // value={subprop.additionalPlates}
                            placeholder="Remarks"

                            />
                        </FormRow>



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

export default StructureModification;
