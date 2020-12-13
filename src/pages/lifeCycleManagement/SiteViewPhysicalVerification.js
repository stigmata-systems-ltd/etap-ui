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

import { _siteViewPhysicalVerificationInputData, _siteViewPhysicalVerificationInputBodyData } from './utils';

class SiteViewPhysicalVerification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.siteViewPhysicalVerification;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Site View Physical Verification '}>
                        
                        <FormRow>

                            <DataTable

                                metaData={_siteViewPhysicalVerificationInputData}
                                bodyData={_siteViewPhysicalVerificationInputBodyData}

                            />

                        </FormRow>

                        <br/>


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

export default SiteViewPhysicalVerification;
