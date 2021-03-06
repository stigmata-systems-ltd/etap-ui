import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listUsersMetaData, transformUsersList } from "./utils";
import Button from "../../common/forms/Button";
import AddUser from "../../container/users/addUsers";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.usersList();
  }


  filteredItems = (data) => {
    // return (
    //   data &&
    //   data.filter(
    //     (item) =>
    //       item.userName &&
    //       item.userName.toLowerCase().includes(this.state.filterText.toLowerCase())
    //   )
    // );
    if (data) {
      return data.filter((item) => {
        for (let key in item) {
          if (item[key] && item[key].toString().toLowerCase().includes(this.state.filterText.toLowerCase())) {
            return true;
          }
        }
      })
    }
  };

  render() {
    return (
      <ContentLoader>
        {this.props.users.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.component.message}
          />
        )}
        <AddUser showAddComponentModal={this.props.users.showAddUsersModal} />
        <FormContainer formTitle={"Users Management"}>
          {this.props.users.usersList && (
            <CustomDataTable
              metaData={listUsersMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformUsersList(
                this.filteredItems(this.props.users.usersList)
              )}
              progressPending={this.props.users.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.users.usersList &&
                this.filteredItems(this.props.users.usersList).length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By PS No"
                    fieldSize="float-left col-sm-10"
                    onFilter={(e) => {
                      e.target.value === "" &&
                        this.setState({
                          resetPaginationToggle: !this.state
                            .resetPaginationToggle,
                        });
                      this.setState({ filterText: e.target.value });
                    }}
                    filterText={this.state.filterText}
                  />
                  <Col6>

                    <Button
                      btnText="Add User"
                      btnType="btn-primary float-right"
                      onClick={this.props.showAddUsersModal}
                    />
                  </Col6>
                </>
              }
            />
          )}
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewUsers;
