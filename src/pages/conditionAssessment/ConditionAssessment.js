import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { conditionAssessmentMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";

import TableFilter from "../../common/TableFilter";

class ConditionAssessment extends Component {
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
        this.props.getConditionAssessmentDetails();
    }


    render() {
        return (
            <>
                <ContentLoader>
                    {this.props.conditionAssessment.isLoading && <Loader />}
                    {this.props.conditionAssessment.message && (
                        <CustomAlert
                            variant={this.props.conditionAssessment.isSuccess ? "success" : "danger"}
                            message={this.props.conditionAssessment.message}
                        />
                    )}
                    {/* <OutSourcingSiteApprovalViewMore showMoreModal={this.props.outSourcingsiteApproval.showMoreModalFlag} /> */}
                    <ConfirmModal
                        showModal={this.state.showApproveModal}
                        handleClose={() => {
                            this.setState({ showApproveModal: false, activeId: null })
                        }

                        }
                        title="Approve Condition Assessment"
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
                        title="Reject Condition Assessment"
                        handleConfirm={() => {
                            this.props.handleReject(this.state.activeId);
                            this.setState({ showDeleteModal: false, activeId: null });
                        }}
                    >
                        <h6 className="text-danger">
                            Are you sure you want to Reject this request?
            </h6>
                    </ConfirmModal>
                    <FormContainer formTitle={"Reuse : Condition Assessment"}>
                        {this.props.conditionAssessment.conditionAssessmentDetails && (
                            <CustomDataTable
                                metaData={conditionAssessmentMetaData(
                                    id => this.setState({ activeId: id, showApproveModal: true }),
                                    id => this.setState({ activeId: id, showDeleteModal: true }),

                                )}
                                bodyData={this.props.conditionAssessment.conditionAssessmentDetails}
                                progressPending={this.props.conditionAssessment.isLoading}
                                pagination={true}
                                paginationTotalRows={
                                    this.props.conditionAssessment.conditionAssessmentDetails &&
                                    this.props.conditionAssessment.conditionAssessmentDetails.length
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

export default ConditionAssessment;
