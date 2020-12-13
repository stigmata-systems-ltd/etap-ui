import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import FaIcon from '../../common/FaIcon';

class AddProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.addproject;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add Project'}>
                       
                        <FormRow>
                            <TextInput
                                label="Project Name"
                                name="projectName"
                                id="projectName"
                                onChange={e =>
                                    this.props.handleChangeProjectName(e.target.value)
                                }
                            //  value={subprop.projectName}
                            />
                            <SimpleDropDown
                                label="Segment"
                                name="segment"
                                onChange={e => this.props.handleChangeSegment(e.target.value)}
                            // value={subprop.segment}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Area"
                                name="area"
                                id="area"
                                onChange={e =>
                                    this.props.handleChangeArea(e.target.value)
                                }
                            // value={subprop.area}
                            />
                            <SimpleDropDown
                                label="Business Unit"
                                name="businessUnit"
                                onChange={e => this.props.handleChangeBusinessUnit(e.target.value)}
                            // value={subprop.businessUnit}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Site Location"
                                name="siteLocation"
                                id="siteLocation"
                                onChange={e =>
                                    this.props.handleChangeSiteLocation(e.target.value)
                                }
                            // value={subprop.siteLocation}
                            />
                            <SimpleDropDown
                                label="Independent Company"
                                name="independentCompany"
                                id="independentCompany"
                                onChange={e =>
                                    this.props.handleChangeIndependentCompany(e.target.value)
                                }
                            // value={subprop.independentCompany}
                            />

                            <Button
                                btnText="Add Location"
                                onClick={this.props.saveUsersData}
                                btnType="primary"
                            />
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

export default AddProject;
