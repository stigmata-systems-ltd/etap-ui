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

import { _physicalVerificationRequirmentInputData, _physicalVerificationInputBodyData } from './utils';

class InitiatePhyscialVerification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.initialPhysicalVerification;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Initiate Physical Verification'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Site"
                                name="site"
                                id="site"
                                onChange={e =>
                                    this.props.handleChangeSite(e.target.value)
                                }
                            // value={subprop.site}
                            />
                        </FormRow>
                        <FormRow>

                            <DataTable

                                metaData={_physicalVerificationRequirmentInputData}
                                bodyData={_physicalVerificationInputBodyData}

                            />

                        </FormRow>

                        <br />

                        <FormRow>
                            <TextInput

                                label="Inspection ID"
                                name="inspectionId"
                                id="inspectionId"
                                onChange={e =>
                                    this.props.handleChangeInspectionId(e.target.value)
                                }
                            // value={subprop.inspectionId}
                            placeholder="Auto Fetch"
                            />


                        </FormRow><br/>


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

export default InitiatePhyscialVerification;
