import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { toSiteApprovalMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";

import TableFilter from "../../common/TableFilter";

class ToSiteApproval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
            showApproveModal: false,
            showDeleteModal: false,
            filterText: "",
            resetPaginationToggle: false,

        };
    }
    componentDidMount() {
        this.props.getToSiteApprovalDetails();
    }


    render() {
        return (
            <>
                <ContentLoader>
                    {this.props.toSiteApproval.isLoading && <Loader />}
                    {this.props.toSiteApproval.message && (
                        <CustomAlert
                            variant={this.props.toSiteApproval.isSuccess ? "success" : "danger"}
                            message={this.props.toSiteApproval.message}
                        />
                    )}
                    {/* <ToSiteApprovalViewMore showMoreModal={this.props.toSiteApprovalDetails.showMoreModalFlag} /> */}
                    <ConfirmModal
                        showModal={this.state.showApproveModal}
                        handleClose={() => {
                            this.setState({ showApproveModal: false, activeId: null })
                        }

                        }
                        title="Approve To Site"
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
                        handleClose={() => {
                            this.setState({ showDeleteModal: false, activeId: null })
                        }
                        }
                        title="Reject To Site Approval"
                        handleConfirm={() => {
                            this.props.handleReject(this.state.activeId);
                            this.setState({ showDeleteModal: false, activeId: null });
                        }}
                    >
                        <h6 className="text-danger">
                            Are you sure you want to Reject this request?
            </h6>
                    </ConfirmModal>
                    <FormContainer formTitle={"Reuse : To Site Approval"}>
                        {this.props.toSiteApproval.toSiteApprovalDetails && (
                            <CustomDataTable
                                metaData={toSiteApprovalMetaData(
                                    id => this.setState({ activeId: id, showApproveModal: true }),
                                    id => this.setState({ activeId: id, showDeleteModal: true }),

                                )}
                                bodyData={this.props.toSiteApproval.toSiteApprovalDetails}
                                progressPending={this.props.toSiteApproval.isLoading}
                                pagination={true}
                                paginationTotalRows={
                                    this.props.toSiteApproval.toSiteApprovalDetails &&
                                    this.props.toSiteApproval.toSiteApprovalDetails.length
                                }
                                paginationPerPage={5}
                                noHeader={true}
                                subHeader
                                subHeaderComponent={
                                    <>
                                        <TableFilter
                                            placeholder="Search By DC No"
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
            </>
        );
    }
}

export default ToSiteApproval;
