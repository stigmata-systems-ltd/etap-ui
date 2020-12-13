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
import { _componentBodyData, _componentData } from './utils';

class AddComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.component;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add Component'}>
                        <FormRow>
                            <Button
                                btnText="Edit Status"
                                onClick={this.props.saveSubContractorData}
                                btnType="primary"
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Component Type"
                                name="componentType"
                                id="componentType"
                                onChange={e =>
                                    this.props.handleChangeComponentType(e.target.value)
                                }
                            // value={subprop.componentType}
                            />

                        </FormRow>
                        <FormRow>
                            <DataTable

                                metaData={_componentData}
                                bodyData={_componentBodyData}

                            />
                        </FormRow><br />



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

export default AddComponent;
