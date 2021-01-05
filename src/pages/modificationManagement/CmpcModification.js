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

import { _cmpcInputData, _cmpcInputBodyData,_cmpcModificationInputData,_cmpcModificationInputBodyData } from './utils';
import Col6 from '../../common/forms/Col6';

class CmpcModification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.assignStructure;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'CMPC Modification'}>


                        <FormRow>

                            <DataTable

                                metaData={_cmpcInputData}
                                bodyData={_cmpcInputBodyData}

                            />
                        </FormRow>
                        <br />
                        <FormRow>

                            <DataTable

                                metaData={_cmpcModificationInputData}
                                bodyData={_cmpcModificationInputBodyData}

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

export default CmpcModification;
