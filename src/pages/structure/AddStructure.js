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
                label="Structure Family"
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
                label="Attribute Description"
                name="structureWeight"
                id="structureWeight"
                onChange={e =>
                  this.props.handleChangeStructureWeight(e.target.value)
                }
                value={subprop.structureWeight}
              />
              <TextInput
                label="Type of Input"
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
                label="UoM"
                name="drawingNo"
                id="drawingNo"
                onChange={e => this.props.handleChangeDrawingNo(e.target.value)}
                value={subprop.drawingNo}
              />
            </FormRow>

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
