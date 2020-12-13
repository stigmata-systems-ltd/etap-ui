import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import { _addStructureInputData, _addStructureInputBodyData } from './utils';

class Structure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const subprop = this.props.structure;
    return (
      <>
        <ContentLoader>
          <FormContainer formTitle={'Add Structure'}>
            <FormRow>
              <TextInput
                label="Structure Name"
                name="structureName"
                id="structureName"
                onChange={e =>
                  this.props.handleChangeStructureName(e.target.value)
                }
                value={subprop.structureName}
              />
              <TextInput
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                onChange={e =>
                  this.props.handleChangeStructureFamily(e.target.value)
                }
                value={subprop.structureFamily}
              />
            </FormRow>

            <FormRow>
              <TextInput
                label="No of Attributes"
                name="noOfAttributes"
                id="noOfAttributes"
                onChange={e => this.props.handleChangeNumberOfAttributes(e.target.value)}
                value={subprop.noOfAttributes}
              />
            </FormRow>
            <FormRow>
              <DataTable

                metaData={_addStructureInputData}
                bodyData={_addStructureInputBodyData}

              />
            </FormRow><br/>

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

export default Structure;
