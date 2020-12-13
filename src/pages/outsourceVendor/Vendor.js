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
import Radio from '../../common/forms/Radio';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import { _newFabricationInputData, _newFabricationBodyData } from './utils';

import DateInput from '../../common/forms/DateInput';

class Vendor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.vendor;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Vendor'}>
                        <FormRow>
                            <TextInput
                                label="DC Number"
                                name="dcNumber"
                                id="dcNumber"
                                onChange={e =>
                                    this.props.handleChangeVendorDcNumber(e.target.value)
                                }
                            // value={subprop.dcNumber}
                            />

                        </FormRow>



                        <FormRow>
                            <DataTable

                                metaData={_newFabricationInputData}
                                bodyData={_newFabricationBodyData}

                            />
                        </FormRow><br />
                        <FormRow>
                            <TextInput
                                label="Quantity Requested"
                                name="quantityRequested"
                                id="quantityRequested"
                                onChange={e =>
                                    this.props.handleChangeVendorQuantityRequested(e.target.value)
                                }
                            // value={subprop.quantityRequested}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Vendor"
                                name="vendor"
                                id="vendor"
                                onChange={e =>
                                    this.props.handleChangeVendor(e.target.value)
                                }
                            // value={subprop.vendor}
                            />
                            <TextInput
                                label="To Site"
                                name="toSite"
                                id="toSite"
                                onChange={e =>
                                    this.props.handleChangeVendorToSite(e.target.value)
                                }
                            // value={subprop.toSite}
                            />


                        </FormRow>

                        <FormRow>
                            <DateInput
                                label="Dispatched date"
                                name="dispatchedDate"
                                id="dispatchedDate"
                                onChange={e =>
                                    this.props.handleChangeVendorDispatchedDate(e.target.value)
                                }
                            // value={subprop.dispatchedDate}
                            />
                            <TextInput
                                label="Monthly Hire Charges"
                                name="monthlyHireCharges"
                                id="monthlyHireCharges"
                                onChange={e =>
                                    this.props.handleChangeVendorMonthlyHireCharges(e.target.value)
                                }
                            // value={subprop.monthlyHireCharges}
                            />



                        </FormRow>
                        <FormRow>
                            <TextInput
                                size="col-sm-4"
                                label="Quantity Dispatched"
                                name="quantityDispatched"
                                id="quantityDispatched"
                                onChange={e =>
                                    this.props.handleChangeVendorQuantityDispatched(e.target.value)
                                }
                            // value={subprop.quantityDispatched}
                            />

                            <TextInput
                                size="col-sm-4"
                                label="Work Order"
                                name="workOrder"
                                id="workOrder"
                                onChange={e =>
                                    this.props.handleChangeVendorWorkOrder(e.target.value)
                                }
                            // value={subprop.workOrder}
                            />
                            <FileInput size="col-sm-4" />


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

export default Vendor;
