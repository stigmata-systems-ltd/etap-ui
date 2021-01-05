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
import Radio from '../../common/forms/Radio';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';


import DateInput from '../../common/forms/DateInput';

class Reuse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.reuse;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Reuse'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Project"
                                name="projectName"
                                id="projectName"
                                onChange={e =>
                                    this.props.handleChangeReuseProjectName(e.target.value)
                                }
                            // value={subprop.projectName}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeReuseStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}

                            />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeReuseStructureId(e.target.value)
                                }
                                // value={subprop.structureId}
                                placeholder="Auto Fetch"
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="No of Components"
                                name="numberOfComponents"
                                id="numberOfComponents"
                                onChange={e =>
                                    this.props.handleChangeReuseNumberOfComponents(e.target.value)
                                }
                            // value={subprop.numberOfComponents}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Drawing Number"
                                name="drawingNumber"
                                id="drawingNumber"
                                onChange={e =>
                                    this.props.handleChangeReuseDrawingNumber(e.target.value)
                                }
                            // value={subprop.drawingNumber}

                            />


                        </FormRow>
                        <p><b>Dimensions :</b></p>
                        <FormRow>
                            <TextInput
                                size="com-md-4"
                                label="Length"
                                name="length"
                                id="length"
                                onChange={e =>
                                    this.props.handleChangeReuselength(e.target.value)
                                }
                            // value={subprop.length}

                            />
                            <TextInput
                                size="com-md-4"
                                label="Weight"
                                name="weight"
                                id="weight"
                                onChange={e =>
                                    this.props.handleChangeReuseWeight(e.target.value)
                                }
                            // value={subprop.weight}

                            />
                            <TextInput
                                size="com-md-4"
                                label="Thickness"
                                name="thickness"
                                id="thickness"
                                onChange={e =>
                                    this.props.handleChangeReuseThickness(e.target.value)
                                }
                            // value={subprop.thickness}

                            />


                        </FormRow>
                        <FormRow>
                            <TextInput

                                label="Weight"
                                name="weight"
                                id="weight"
                                onChange={e =>
                                    this.props.handleChangeReuseDataWeight(e.target.value)
                                }
                            // value={subprop.weight}

                            />
                            <TextInput

                                label="Proposed Reusability"
                                name="proposedReusability"
                                id="proposedReusability"
                                onChange={e =>
                                    this.props.handleChangeReuseProposedReusability(e.target.value)
                                }
                            // value={subprop.proposedReusability}

                            />


                        </FormRow>
                        <FormRow>
                            <DateInput

                                label="Year of Fabrication"
                                name="yearOfFabrication"
                                id="yearOfFabrication"
                                onChange={e =>
                                    this.props.handleChangeReuseYearOfFabrication(e.target.value)
                                }
                            // value={subprop.yearOfFabrication}

                            />
                            <TextInput

                                label="Vendor Details"
                                name="vendorDetails"
                                id="vendorDetails"
                                onChange={e =>
                                    this.props.handleChangeReuseVendorDetails(e.target.value)
                                }
                            // value={subprop.vendorDetails}

                            />


                        </FormRow>
                        <FormRow>
                            <DateInput

                                label="Expected Release"
                                name="expectedRelease"
                                id="expectedRelease"
                                onChange={e =>
                                    this.props.handleChangeReuseExpectedRelease(e.target.value)
                                }
                            // value={subprop.expectedRelease}

                            />
                            <TextInput

                                label="QR Code Details"
                                name="qrCodeDetails"
                                id="qrCodeDetails"
                                onChange={e =>
                                    this.props.handleChangeReuseQrCodeDetails(e.target.value)
                                }
                            // value={subprop.qrCodeDetails}

                            />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                size="col-md-4"
                                label="Depreciation Rate"
                                name="depreciationRate"
                                id="depreciationRate"
                                onChange={e =>
                                    this.props.handleChangeReuseDepreciationRate(e.target.value)
                                }
                            // value={subprop.depreciationRate}

                            />
                            <TextInput
                                size="col-md-4"
                                label="Book Value"
                                name="bookValue"
                                id="bookValue"
                                onChange={e =>
                                    this.props.handleChangeReuseBookValue(e.target.value)
                                }
                            // value={subprop.bookValue}

                            />
                            <FileInput size="col-md-4" />


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

export default Reuse;
