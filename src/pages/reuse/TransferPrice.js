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


import DateInput from '../../common/forms/DateInput';

class TransferPrice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.transferPrice;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Transfer Price'}>
                        <FormRow>
                            <TextInput
                                label="MR Number"
                                name="mrNumber"
                                id="mrNumber"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceMrNumber(e.target.value)
                                }
                            // value={subprop.mrNumber}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceStructureFamily(e.target.value)
                                }
                                // value={subprop.structureFamily}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                label="Component Type"
                                name="componentType"
                                id="componentType"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceComponentType(e.target.value)
                                }
                                // value={subprop.componentType}
                                placeholder="Auto Fetch"
                            />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceStructureId(e.target.value)
                                }
                                // value={subprop.structureId}
                                placeholder="Auto Fetch"
                            />
                            <TextInput
                                label="Component ID"
                                name="componentId"
                                id="componentId"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceComponentId(e.target.value)
                                }
                                // value={subprop.componentId}
                                placeholder="Auto Fetch"
                            />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Quantity Requested"
                                name="quantityRequested"
                                id="quantityRequested"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceQuantityRequested(e.target.value)
                                }
                                // value={subprop.quantityRequested}
                                placeholder="Auto Fetch"
                            />



                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="From Site"
                                name="fromSite"
                                id="fromSite"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceFromSite(e.target.value)
                                }
                            // value={subprop.fromSite}

                            />
                            <TextInput
                                label="To Site"
                                name="toSite"
                                id="toSite"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceToSite(e.target.value)
                                }
                            // value={subprop.toSite}

                            />



                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Dispatch Advice Number"
                                name="dispatchAdviceNumber"
                                id="dispatchAdviceNumber"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceDispatchAdviceNumber(e.target.value)
                                }
                                // value={subprop.dispatchAdviceNumber}
                                placeholder="Auto Fetch"
                            />
                            <DateInput
                                label="Dispatched On"
                                name="dispatchedOn"
                                id="dispatchedOn"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceDispatchedOn(e.target.value)
                                }
                            // value={subprop.dispatchedOn}

                            />



                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Quantity Dispatched"
                                name="quantityDispatched"
                                id="quantityDispatched"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceQuantityDispatched(e.target.value)
                                }
                            // value={subprop.quantityDispatched}

                            />
                            <TextInput
                                label="Transfer Price"
                                name="transferPrice"
                                id="transferPrice"
                                onChange={e =>
                                    this.props.handleChangeTransferPriceTransferPrice(e.target.value)
                                }
                            // value={subprop.transferPrice}

                            />



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

export default TransferPrice;
