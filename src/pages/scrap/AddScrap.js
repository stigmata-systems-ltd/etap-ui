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

class AddScrap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getProjectList();
        this.props.getVendorList();
      }
    render() {
        const subprop = this.props.addRequirement;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'scrap Declaration'}>
                        <FormRow>
                        <SearchableDropDown
                                    label="Project Name"
                                    name="projectName"
                                    selectOptions={transformDropDownData(this.props.scrap.projectCodesList, "id", "name")}
                                    onChange={(obj) => this.props.handleChangeRequirementProjectName(obj)}
                                    value={this.props.scrap.projectName}
                        />
                         <SearchableDropDown
                                    label="Structure Name"
                                    name="structureName"
                                    selectOptions={transformDropDownData(this.props.scrap.structureProjectList, "structureId", "strcutureName")}
                                    onChange={(obj) => this.props.handleChangeStructureList(obj)}
                                    value={this.props.scrap.structureID}
                        />
                        </FormRow>

                        <FormRow>
                        <TextInput
                            label="Structure Family"
                            name="structureFamily"
                            id="structureFamily"
                            value={this.props.scrap.structureFamily}
                            disabled={true}
                            
                        />
                        <TextInput
                            label="Structure Code"
                            value={this.props.scrap.structureCode}
                            disabled={true}
                        />
                        </FormRow>
                        <FormRow>
                        
                        <SearchableDropDown
                                    label="Vendor"
                                    name="vendor"
                                    selectOptions={transformDropDownData(this.props.scrap.vendorCodesList, "id", "name")}
                                    onChange={(obj) => this.props.handleChangeVendorName(obj)}
                                    value={this.props.scrap.vendor}
                        />
                        <TextInput
                            label="Scrap Rate"
                            name="scrapRate"
                            id="scrapRate"
                            value={this.props.scrap.scrapRate}
                            onChange={(e) => this.props.handleChangeScrapRate(e.target.value)}
                        />
                        </FormRow>
                        <FormRow>
                        <TextInput
                            label="Auction ID"
                            name="auctionID"
                            id="auctionID"
                            value={this.props.scrap.auctionID}
                            onChange={(e) => this.props.handleChangeAuctionID(e.target.value)}
                        />
                            <FileInput
                            size="col-md-6"
                            label="Upload Documents"
                            onChange={e => this.props.handleFileUpload(e.target.files[0])}
                            />
                        </FormRow>
                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveScrap}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetScrap}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default AddScrap;
