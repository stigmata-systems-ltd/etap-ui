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

import { _healthSaftyInputData, _healthSaftyInputBodyData } from './utils';


class HealthSafty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.healthSafty;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'EHS'}>
                        <FormRow>
                            <SearchBox />
                        </FormRow><br />
                        <FormRow>

                            <DataTable

                                metaData={_healthSaftyInputData}
                                bodyData={_healthSaftyInputBodyData}
                                showEdit={true}


                            />
                        </FormRow><br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveHealthSaftyData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetHealthSaftyData}
                        />
                         <Button
                            btnText="DELETE"
                            btnType="cancel"
                            onClick={this.props.deleteHealthSaftyData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default HealthSafty;