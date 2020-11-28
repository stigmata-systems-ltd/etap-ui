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
import DataTable from '../../common/DataTable';
import Radio from '../../common/forms/Radio';
import { _subContractorBodyData, _subContractorData } from './utils';

class AddSubContractor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.addSubContractor;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add SubContractor/Vendor'}>
                        <FormRow>
                            <Button
                                btnText="Edit Vendor Status"
                                onClick={this.props.editVendorStatus}
                                btnType="primary"
                            />
                        </FormRow><br/>
                        <FormRow>
                            <TextInput
                                label="Vender Name"
                                name="vendorName"
                                id="vendorName"
                                onChange={e =>
                                    this.props.handleChangeVendorName(e.target.value)
                                }
                            // value={subprop.vendorName}
                            />
                            <TextInput
                                label="Vendor Code"
                                name="vendorCode"
                                id="vendorCode"
                                onChange={e =>
                                    this.props.handleChangeVendorCode(e.target.value)
                                }
                            // value={subprop.vendorCode}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="E-mail"
                                name="vendorEmail"
                                id="vendorEmail"
                                onChange={e =>
                                    this.props.handleChangeVendorEmail(e.target.value)
                                }
                            // value={subprop.vendorEmail}
                            />
                            <TextInput
                                label="Contact Number"
                                name="contactNumber"
                                id="contactNumber"
                                onChange={e =>
                                    this.props.handleChangeContactNumber(e.target.value)
                                }
                            // value={subprop.contactNumber}

                            />
                        </FormRow>
                        <FormRow>
                            <Radio label="Fabrication" />
                            <Radio label="Outsourcing" />
                            <Radio label="Scrap" />
                        </FormRow><br />
                        {/* <FormRow>
                            <DataTable

                                metaData={_subContractorData}
                                bodyData={_subContractorBodyData}

                            />
                        </FormRow><br /> */}


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

export default AddSubContractor;
