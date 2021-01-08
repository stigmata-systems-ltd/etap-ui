import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listViewSurplusMetaData, transformViewSurplusList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

import SurplusViewMore from "../../container/surplus/surplusViewMore";

class ViewSurplusAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showApproveModal:false,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getSurplus();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.surplus.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.surplus.message}
          />
        )}
        <SurplusViewMore showAddComponentModal={this.props.surplus.showSurplusMoreModal} />
        <ConfirmModal
            showModal={this.state.showApproveModal}
            handleClose={() =>{
              this.setState({ showApproveModal: false, activeId: null })
            }
              
            }
            title="Approve Surplus"
            handleConfirm={() => {
              this.props.handleApprove(this.state.activeId);
              this.setState({ showApproveModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Approve this request?
            </h6>
          </ConfirmModal>

          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>{
              this.setState({ showDeleteModal: false, activeId: null })
            }
            }
            title="Reject Surplus"
            handleConfirm={() => {
              this.props.handleReject(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to Reject this request?
            </h6>
          </ConfirmModal>
        <FormContainer formTitle={"View Requirements"}>
          {this.props.surplus.surplusList && (
            <CustomDataTable
              metaData={listViewSurplusMetaData(
                id => this.setState({ activeId: id, showApproveModal: true }),
                id => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleMore(id),

              )}
              bodyData={transformViewSurplusList(
                this.props.surplus.surplusList
              )}
              progressPending={this.props.surplus.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.surplus.surplusList &&
                this.props.surplus.surplusList.length
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

export default ViewSurplusAction;
