import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import TableFilter from "../../common/TableFilter";

import Loader from "../../common/Loader";
import { createDispatchMetaData } from "./utils";
import CustomDataTable from "../../common/CustomDataTable";
import FormRow from "../../common/forms/FormRow";
import Button from "../../common/forms/Button";
import Popup from "../../common/forms/Popup";

class CreateDispatch extends Component {
  constructor() {
    super();
    this.state = {
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getSiteReqDetails();
  }

  filteredItems = (data) => {
    return (
      data &&
      data.filter(
        (item) =>
          item.structureName &&
          item.structureName
            .toLowerCase()
            .includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <>
        <ContentLoader>
          {this.props.createDispatch.isLoading && <Loader />}
          {this.props.createDispatch.message && (
            <Popup
              type={this.props.createDispatch.isSuccess ? "success" : "error"}
              message={this.props.createDispatch.message}
              onClose={this.props.resetMessage}
            />
          )}
          <FormContainer formTitle={"Create Dispatch"}>
            {this.props.createDispatch.siteReqDetails && (
              <CustomDataTable
                metaData={createDispatchMetaData(
                  this.props.redirectToDispatchStructure
                )}
                bodyData={this.filteredItems(
                  this.props.createDispatch.siteReqDetails.reverse()
                )}
                progressPending={this.props.createDispatch.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.createDispatch.siteReqDetails &&
                  this.props.createDispatch.siteReqDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
                subHeader
                subHeaderComponent={
                  <TableFilter
                    placeholder="Search By Structure"
                    size="mr-auto col-md-6"
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
                }
              />
            )}
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default CreateDispatch;
