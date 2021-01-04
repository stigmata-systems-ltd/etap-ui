import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listViewRequirementsMetaData, transformViewRequirementList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
// import requirementViewMore from "../../container/requirement/requirementViewMore";

class ViewRequirementAction extends Component {
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
    this.props.getRequirementsList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.requirement.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.requirement.message}
          />
        )}
        {/* <requirementViewMore showAddComponentModal={this.props.requirement.showrequirementMoreModal} /> */}
        <FormContainer formTitle={"View Requirements"}>
          {this.props.requirement.requirementsList && (
            <CustomDataTable
              metaData={listViewRequirementsMetaData(
                (id) => this.props.handleApprove(id),
                (id) => this.props.handleReject(id),
                (id) => this.props.handleMore(id),

              )}
              bodyData={transformViewRequirementList(
                this.props.requirement.requirementsList
              )}
              progressPending={this.props.requirement.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.requirement.requirementsList &&
                this.props.requirement.requirementsList.length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By ID"
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
                </>
              }
            />
          )}
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewRequirementAction;
