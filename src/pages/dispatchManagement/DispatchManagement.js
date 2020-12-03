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

import { _dispatchManagementInputData, _dispatchManagementBodyData } from './utils';
import Col6 from '../../common/forms/Col6';
import DateInput from '../../common/forms/DateInput';

class DispatchManagement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.dispatchManagement;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Dispatch Management'}>
                        <FormRow>
                            <SimpleDropDown
                                label="MR Number"
                                name="mrNumber"
                                id="mrNumber"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementMrNumber(e.target.value)
                                }
                            // value={subprop.mrNumber}
                            placeholder="Auto Fetch"
                            />
                            <SimpleDropDown
                                label="Site Name"
                                name="siteName"
                                id="siteName"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementSiteName(e.target.value)
                                }
                            // value={subprop.siteName}
                            />

                        </FormRow>
                        <FormRow>
                            <DateInput
                                label=" Date of Request"
                                name="dateOfRequest"
                                id="dateOfRequest"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementDateOfRequest(e.target.value)
                                }
                            // value={subprop.dateOfRequest}
                            />
                            <SimpleDropDown
                                label="Request Raised By"
                                name="requestRaisedBy"
                                id="requestRaisedBy"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementRequestRaisedBy(e.target.value)
                                }
                            // value={subprop.requestRaisedBy}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />
                            <TextInput
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementStructureId(e.target.value)
                                }
                            // value={subprop.structureId}
                            placeholder="Auto Fetch"
                            />

                        </FormRow>

                        <FormRow>
                            <DataTable

                                metaData={_dispatchManagementInputData}
                                bodyData={_dispatchManagementBodyData}

                            />
                        </FormRow><br/>
                        <FormRow>
                            <TextInput
                                label="Quantity Requested"
                                name="quantityRequested"
                                id="quantityRequested"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementQuantityRequested(e.target.value)
                                }
                            // value={subprop.quantityRequested}
                            />


                        </FormRow>
                        <FormRow>
                            <Radio label="Reuse" />
                            <Radio label="New Fabrication" />
                            <Radio label="Outsource" />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="DA or DC Number"
                                name="dispatchAdviceNumber"
                                id="dispatchAdviceNumber"
                                onChange={e =>
                                    this.props.handleChangeDispatchManagementDispatchAdviceNumber(e.target.value)
                                }
                            // value={subprop.dispatchAdviceNumber}
                            placeholder="Auto Fetch"
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

export default DispatchManagement;
