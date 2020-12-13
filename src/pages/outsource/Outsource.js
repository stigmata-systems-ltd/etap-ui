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

class OutSource extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.outSource;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Out Source'}>
                        <FormRow>
                            <TextInput
                                label="DC Number"
                                name="dcNumber"
                                id="dcNumber"
                                onChange={e =>
                                    this.props.handleChangeOutSourceDcNumber(e.target.value)
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
                                    this.props.handleChangeOutSourceQuantityRequested(e.target.value)
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
                                    this.props.handleChangeOutSourceVendor(e.target.value)
                                }
                            // value={subprop.vendor}
                            />

                            <TextInput
                                label="To Site"
                                name="toSite"
                                id="toSite"
                                onChange={e =>
                                    this.props.handleChangeOutSourceToSite(e.target.value)
                                }
                            // value={subprop.toSite}
                            />


                        </FormRow>
                        <FormRow>
                            <DateInput
                                label="Dispatched Date"
                                name="dispatchedDate"
                                id="dispatchedDate"
                                onChange={e =>
                                    this.props.handleChangeOutSourceDispatchedDate(e.target.value)
                                }
                            // value={subprop.dispatchedDate}
                            />

                            <TextInput

                                label="Monthly Hire Charges"
                                name="monthlyHireCharges"
                                id="monthlyHireCharges"
                                onChange={e =>
                                    this.props.handleChangeOutSourceMonthlyHireCharges(e.target.value)
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
                                    this.props.handleChangeOutSourceQuantityDispatched(e.target.value)
                                }
                            // value={subprop.quantityDispatched}
                            />

                            <TextInput
                                size="col-sm-4"
                                label="Work Order Number"
                                name="workOrderNumber"
                                id="workOrderNumber"
                                onChange={e =>
                                    this.props.handleChangeOutSourceWorkOrderNumber(e.target.value)
                                }
                            // value={subprop.workOrderNumber}
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

export default OutSource;
