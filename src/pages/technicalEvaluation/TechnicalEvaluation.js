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
import SearchBox from '../../common/forms/SearchBox';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import { _technicalEvaluationInputData, _technicalEvaluationInputBodyData } from './utils';


class TechnicalEvaluation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.assignStructure;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Technical Evaluation'}>

                        <FormRow>

                            <DataTable

                                metaData={_technicalEvaluationInputData}
                                bodyData={_technicalEvaluationInputBodyData}


                            />
                        </FormRow><br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveTechnicalEvaluationData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetTechnicalEvaluationData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default TechnicalEvaluation;