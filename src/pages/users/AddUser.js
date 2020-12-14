import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";

class AddUser extends Component {
  constructor(props) {
    super(props);
  }

 componentDidMount() {
        this.props.getProjectList();
        this.props.getRolesList();
      }

  render() {
    return (
      <Modal
        title={`${this.props.users.isEditMode ? "Update" : "Create New"} Users`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.users.isEditMode
            ? this.props.updateUser
            : this.props.addUser
        }
        handleClose={
          this.props.users.isEditMode
            ? this.props.closeAddUserModal
            : this.props.closeAddUserModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading",this.props.isLoading)}
        {this.props.isLoading && <Loader />}
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
              
              <SimpleDropDown
                  label="Project"
                  name="project"
                  onChange={e => this.props.handleChangeProject(e.target.value)}
                  value={this.props.users.project}
                  selectOptions={this.props.users.projectCodesList}
              />
            </FormRow>
            <FormRow>
              <TextInput
                size="col-md-4"
                label="BU"
                name="businessUnit"
                id="businessUnit"
                onChange={e =>
                  this.props.handleChangeBusinessUnit(e.target.value)
                }
                value={this.props.users.bu}
                placeholder="Auto Fetch"

              />
              <TextInput
                size="col-md-4"
                label="Segment"
                name="segment"
                id="segment"
                onChange={e =>
                  this.props.handleChangeSegment(e.target.value)
                }
                value={this.props.users.segment}
                placeholder="Auto Fetch"
              />
              <TextInput
                size="col-md-4"
                label="IC"
                name="independentCompany"
                id="independentCompany"
                onChange={e =>
                  this.props.handleIndependentCompany(e.target.value)
                }
                value={this.props.users.ic}
                placeholder="Auto Fetch"
              />
            </FormRow>

            <FormRow>
              <SimpleDropDown
                  label="Role"
                  name="role"
                  onChange={e => this.props.handleChangeRole(e.target.value)}
                  value={this.props.users.role}
                  selectOptions={this.props.users.rolesList}
              />
            </FormRow>
        
        {this.props.users.isModalMsg && (
          <p className="text-danger">{this.props.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddUser;
