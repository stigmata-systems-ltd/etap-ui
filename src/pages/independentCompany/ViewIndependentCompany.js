import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { icbuMetaData, icbuList } from "./utils";
import Button from "../../common/forms/Button";
// import AddIndependentCompany from "./AddIndependentCompany";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import Loader from "../../common/Loader";
import AddIndependentCompany from "../../container/independentCompany/independentCompany"

class ViewIndependentCompany extends Component {
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
    this.props.icbuList();
  }

//   filteredItems = (data) => {
//     return (
//       data &&
//       data.filter(
//         (item) =>
//           item.email &&
//           item.email.toLowerCase().includes(this.state.filterText.toLowerCase())
//       )
//     );
//   };

  render() {
    return (
      <ContentLoader>
        {this.props.icbu.isLoading && <Loader />}
        {this.props.icbu.isIcbuMsg && (
          <CustomAlert
            variant="success"
            message={this.props.icbu.message}
          />
        )}
        <AddIndependentCompany {...this.props} />
        <FormContainer formTitle={"View IC/BU"}>
          {this.props.icbu.icbuList && (
            <CustomDataTable
              metaData={icbuMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={icbuList(
                this.props.icbu.icbuList
              )}
              progressPending={this.props.icbu.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.icbu.icbuList &&
                this.props.icbu.icbuList.length
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
                  <Col6>
                  
                  <Button
                    btnText="Create New IC/BU"
                    btnType="btn-primary float-right"
                    onClick={this.props.showAddIcbuModal}
                  />
                  </Col6>
                </>
              }
            />
          )}
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Delete Project"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this Project?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewIndependentCompany;
