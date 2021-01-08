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
import { transformDropDownData } from "../../utils/dataTransformer";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Col6 from '../../common/forms/Col6';
import DateInput from '../../common/forms/DateInput';
import TextArea from '../../common/forms/TextArea';

class AddSurplus extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getProjectList();
        
      }
    render() {
        const subprop = this.props.addRequirement;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Surplus Declaration'}>
                        <FormRow>
                        <SearchableDropDown
                                    label="Project Name"
                                    name="projectName"
                                    selectOptions={transformDropDownData(this.props.surplus.projectCodesList, "id", "name")}
                                    onChange={(obj) => this.props.handleChangeRequirementProjectName(obj)}
                                    value={this.props.surplus.projectName}
                        />
                         <SearchableDropDown
                                    label="Structure Name"
                                    name="structureName"
                                    selectOptions={transformDropDownData(this.props.surplus.structureList, "id", "name")}
                                    onChange={(obj) => this.props.handleChangeStructureList(obj)}
                                    value={this.props.surplus.structureID}
                        />
                        </FormRow>

                        <FormRow>
                        <TextInput
                            label="Structure Family"
                            name="structureFamily"
                            id="structureFamily"
                            value={this.props.surplus.structureFamily.label}
                        />
                        <DateInput
                                label="Surplus From"
                                name="surplusFrom"
                                id="surplusFrom"
                                onChange={e =>
                                    this.props.handleSurplusFromChange(e.target.value)
                                }
                                value={this.props.surplus.dateFrom}
                            />
                        </FormRow>
                        <FormRow>
                            <FileInput
                            size="col-md-12"
                            label="Select Photo"
                            onChange={e => this.props.handleFileUpload(e.target.files[0])}
                            />
                        </FormRow>
                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveSurplus}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetSurplus}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default AddSurplus;
