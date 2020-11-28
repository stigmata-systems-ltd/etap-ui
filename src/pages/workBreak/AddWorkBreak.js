import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import FileInput from '../../common/forms/FileInput';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';

class AddWorkBreak extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.addWorkBreak;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add WBS'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Project Name"
                                name="projectName"
                                onChange={e => this.props.handleChangeProjectName(e.target.value)}
                            // value={subprop.project}
                            />

                        </FormRow>
                        <FormRow>
                            <Col className="col-3">
                                <Button
                                    btnText="Excel Template Download"
                                    onClick={this.props.saveUsersData}
                                    btnType="primary"

                                />
                            </Col>
                            <Col className="col-3">
                                <FileInput />
                            </Col>
                        </FormRow>


                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveUsersData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetUsersData}
                        />
                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default AddWorkBreak;
