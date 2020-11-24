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
                label="Structure ID"
                name="structureID"
                id="structureID"
                onChange={e =>
                  this.props.handleChangeStructureId(e.target.value)
                }
                value={subprop.structureID}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Structure Weight"
                name="structureWeight"
                id="structureWeight"
                onChange={e =>
                  this.props.handleChangeStructureWeight(e.target.value)
                }
                value={subprop.structureWeight}
              />
              <TextInput
                label="Structure Type"
                name="structureType"
                id="structureType"
                onChange={e =>
                  this.props.handleChangeStructureType(e.target.value)
                }
                value={subprop.structureType}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Drawing NO"
                name="drawingNo"
                id="drawingNo"
                onChange={e => this.props.handleChangeDrawingNo(e.target.value)}
                value={subprop.drawingNo}
              />
            </FormRow>

            <Button
              btnText="Save"
              onClick={this.props.saveSubContractorData}
              btnType="primary"
            />
            <Button
              btnText="Cancel"
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
