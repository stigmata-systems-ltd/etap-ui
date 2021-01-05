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

import { _scrapInputData, _scrapInputBodyData } from './utils';

import DateInput from '../../common/forms/DateInput';

class OutSourcing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.outsourcing;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Outsourcing'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Project"
                                name="project"
                                id="project"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingProjectName(e.target.value)
                                }
                            // value={subprop.project}
                            />
                            <TextInput
                                label="Subcontractor/Vendor"
                                name="vendor"
                                id="vendor"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingVendor(e.target.value)
                                }
                            // value={subprop.vendor}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />
                            <TextInput
                                label="Monthly Rent"
                                name="monthlyRent"
                                id="monthlyRent"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingMonthlyRent(e.target.value)
                                }
                            // value={subprop.monthlyRent}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput

                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingStructureId(e.target.value)
                                }
                                // value={subprop.structureId}
                                placeholder="Auto Fetch"
                            />

                            <TextInput

                                label="Contract Years"
                                name="contractYears"
                                id="contractYears"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingContractYears(e.target.value)
                                }
                            // value={subprop.contractYears}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput

                                label="No of Components"
                                name="numberOfComponents"
                                id="numberOfComponents"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingNumberOfComponents(e.target.value)
                                }
                            // value={subprop.numberOfComponents}

                            />
                            <TextInput

                                label="Planned Release Date"
                                name="plannedReleaseDate"
                                id="plannedReleaseDate"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingPlannedReleaseDate(e.target.value)
                                }
                            // value={subprop.plannedReleaseDate}

                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                size="col-md-4"
                                label="Weight"
                                name="weight"
                                id="weight"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingWeight(e.target.value)
                                }
                            // value={subprop.weight}

                            />
                            <TextInput
                                size="col-md-4"
                                label="Actual Start Date of Usage"
                                name="actualStartDateOfUsage"
                                id="actualStartDateOfUsage"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingActualStartDateOfUsage(e.target.value)
                                }
                            // value={subprop.actualStartDateOfUsage}

                            />
                            <TextInput
                                size="col-md-4"
                                label="Expected Release Date"
                                name="expectedReleaseDate"
                                id="expectedReleaseDate"
                                onChange={e =>
                                    this.props.handleChangeOutsourcingExpectedReleaseDate(e.target.value)
                                }
                            // value={subprop.expectedReleaseDate}

                            />
                        </FormRow>


                        <br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveOutSourcingData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetOutSourcingData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default OutSourcing;
