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

class AddUsers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const subprop = this.props.addusers;
    return (
      <>
        <ContentLoader>
          <FormContainer formTitle={'Add Users'}>
            <FormRow>
              <TextInput
                label="First Name"
                name="firstName"
                id="firstName"
                onChange={e =>
                  this.props.handleChangeFirstName(e.target.value)
                }
                // value={subprop.firstName}
              />
              <TextInput
                label="Last Name"
                name="lastName"
                id="lastName"
                onChange={e =>
                  this.props.handleChangeLastName(e.target.value)
                }
                // value={subprop.lastName}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="E-mail"
                name="email"
                id="email"
                onChange={e =>
                  this.props.handleChangeEmail(e.target.value)
                }
                // value={subprop.email}
              />
              <TextInput
                label="PS.No"
                name="psNo"
                id="psNo"
                onChange={e =>
                  this.props.handleChangePsNo(e.target.value)
                }
                // value={subprop.psNo}
                
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Role"
                name="role"
                id="role"
                onChange={e => this.props.handleChangeRole(e.target.value)}
                // value={subprop.role}
              />
            </FormRow>

            <Button
              btnText="Save"
              onClick={this.props.saveUsersData}
              btnType="primary"
            />
            <Button
              btnText="Cancel"
              btnType="cancel"
              onClick={this.props.resetUsersData}
            />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default AddUsers;
