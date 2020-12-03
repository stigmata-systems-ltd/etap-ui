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

import { _siteApprovalInputData, _siteApprovalBodyData } from './utils';

import DateInput from '../../common/forms/DateInput';
import SearchBox from '../../common/forms/SearchBox';

class SiteApproval extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.siteApproval;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Site Approval'}>

                        <FormRow>
                            <SearchBox />
                        </FormRow><br />
                        <FormRow>

                            <DataTable

                                metaData={_siteApprovalInputData}
                                bodyData={_siteApprovalBodyData}
                                showEdit={true}


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

export default SiteApproval;
