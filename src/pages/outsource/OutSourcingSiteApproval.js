import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { outSourcingSiteApprovalMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";

import TableFilter from "../../common/TableFilter";
import OutSourcingSiteApprovalViewMore from "./OutSourcingSiteApprovalViewMore";

class OutSourcingSiteApproval extends Component {
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
        this.props.getOutSourcingSiteApprovalDetails();
    }


    render() {
        return (
            <>
                <ContentLoader>
                    {this.props.outSourcingsiteApproval.isLoading && <Loader />}
                    {this.props.outSourcingsiteApproval.message && (
                        <CustomAlert
                            variant={this.props.outSourcingsiteApproval.isSuccess ? "success" : "danger"}
                            message={this.props.outSourcingsiteApproval.message}
                        />
                    )}

                    <OutSourcingSiteApprovalViewMore showMoreModal={this.props.outSourcingsiteApproval.showMoreModalFlag} />
                    <ConfirmModal
                        showModal={this.state.showApproveModal}
                        handleClose={() => {
                            this.setState({ showApproveModal: false, activeId: null })
                        }

                        }
                        title="Approve Site"
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
                        title="Reject Site Approval"
                        handleConfirm={() => {
                            this.props.handleReject(this.state.activeId);
                            this.setState({ showDeleteModal: false, activeId: null });
                        }}
                    >
                        <h6 className="text-danger">
                            Are you sure you want to Reject this request?
            </h6>
                    </ConfirmModal>
                    <FormContainer formTitle={"Out Sourcing : Site Approval"}>
                        {this.props.outSourcingsiteApproval.outSourcingSiteApprovalDetails && (
                            <CustomDataTable
                                metaData={outSourcingSiteApprovalMetaData(
                                    id => this.setState({ activeId: id, showApproveModal: true }),
                                    id => this.setState({ activeId: id, showDeleteModal: true }),
                                    (id) => this.props.showSiteApprovalMoreModal(id)
                                )}
                                bodyData={this.props.outSourcingsiteApproval.outSourcingSiteApprovalDetails}
                                progressPending={this.props.outSourcingsiteApproval.isLoading}
                                pagination={true}
                                paginationTotalRows={
                                    this.props.outSourcingsiteApproval.outSourcingSiteApprovalDetails &&
                                    this.props.outSourcingsiteApproval.outSourcingSiteApprovalDetails.length
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

export default OutSourcingSiteApproval;
