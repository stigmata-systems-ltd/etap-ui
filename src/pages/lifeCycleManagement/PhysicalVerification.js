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

import { _twccphysicalVerificationInputData, _twccphysicalVerificationInputBodyData } from './utils';

class PhysicalVerification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.physicalVerification;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'TWCC Physical Verification '}>

                        <FormRow>

                            <DataTable

                                metaData={_twccphysicalVerificationInputData}
                                bodyData={_twccphysicalVerificationInputBodyData}

                            />

                        </FormRow>

                        <br />

                        <FormRow>
                            <p><b>Forward for audit</b></p>
                            <CheckBox />


                        </FormRow><br />


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

export default PhysicalVerification;
