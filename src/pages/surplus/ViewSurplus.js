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

import { _viewSurplusInputData, _viewSurplusInputBodyData } from './utils';


class ViewSurplus extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.viewSurplus;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'View Surplus'}>



                        <FormRow>
                            <SearchBox />
                        </FormRow><br/>
                        <FormRow>

                            <DataTable

                                metaData={_viewSurplusInputData}
                                bodyData={_viewSurplusInputBodyData}
                                

                            />
                        </FormRow><br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveViewSurplusData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetViewSurplusData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default ViewSurplus;