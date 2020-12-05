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

import { _reuseRequirmentInputData, _reuseRequirmentInputBodyData, _reuseSurplusInputData, _reuseSurplusInputBodyData } from './utils';

import DateInput from '../../common/forms/DateInput';
import Col6 from '../../common/forms/Col6';

class InitiatingReuse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.initiatingReuse;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Initiating Reuse'}>
                        <FormRow>
                            <SimpleDropDown
                                label="MR Number"
                                name="mrNumber"
                                id="mrNumber"
                                onChange={e =>
                                    this.props.handleChangeMrNumber(e.target.value)
                                }
                            // value={subprop.mrNumber}
                            />
                        </FormRow>
                        <FormRow>
                            <Col6>
                                <p><b>Requirement</b></p>
                                <DataTable

                                    metaData={_reuseRequirmentInputData}
                                    bodyData={_reuseRequirmentInputBodyData}

                                />
                            </Col6>
                            <Col6>
                                <p><b>Surplus</b></p>
                                <DataTable

                                    metaData={_reuseSurplusInputData}
                                    bodyData={_reuseSurplusInputBodyData}

                                />
                            </Col6>
                        </FormRow>

                        <br />
                        <p>Auto Fetch Fields</p>
                        <FormRow>
                            <SimpleDropDown

                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />
                            <TextInput

                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeStructureId(e.target.value)
                                }
                            // value={subprop.structureId}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput

                                label="Quantity"
                                name="quantity"
                                id="quantity"
                                onChange={e =>
                                    this.props.handleChangeQuantity(e.target.value)
                                }
                            // value={subprop.quantity}

                            />
                            <SimpleDropDown

                                label="Dispatch"
                                name="dispatch"
                                id="dispatch"
                                onChange={e =>
                                    this.props.handleChangeDispatch(e.target.value)
                                }
                            // value={subprop.dispatch}
                            />
                        </FormRow>
                        <br />


                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveOutSourcingData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetOutSourcingData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default InitiatingReuse;
