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

import { _viewStructureInputData, _viewStructureInputBodyData } from './utils';
import Col6 from '../../common/forms/Col6';

class ViewStructure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.assignStructure;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'View Structure'}>



                        <FormRow>
                            <SearchBox />
                        </FormRow><br/>
                        <FormRow>

                            <DataTable

                                metaData={_viewStructureInputData}
                                bodyData={_viewStructureInputBodyData}

                            />
                        </FormRow><br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveViewStructureData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetViewStructureData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default ViewStructure;