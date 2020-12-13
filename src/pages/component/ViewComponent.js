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
import SearchBox from '../../common/forms/SearchBox';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import { _viewComponentData, _viewComponentBodyData,_viewComponentModificationHistoryData,_viewComponentModificationHistoryBodyData } from './utils';
import Col6 from '../../common/forms/Col6';

class ViewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.assignStructure;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'View Component'}>



                        <FormRow>
                            <SearchBox />
                        </FormRow><br/>
                        <FormRow>

                            <DataTable

                                metaData={_viewComponentData}
                                bodyData={_viewComponentBodyData}

                            />
                        </FormRow><br />
                        <p><b>Modification History :</b></p>
                        <FormRow>

                            <DataTable

                                metaData={_viewComponentModificationHistoryData}
                                bodyData={_viewComponentModificationHistoryBodyData}

                            />
                        </FormRow><br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveViewStructureData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetViewStructureData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default ViewComponent;