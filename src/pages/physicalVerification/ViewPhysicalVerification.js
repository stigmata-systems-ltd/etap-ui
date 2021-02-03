import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { physicalVerificationMetaData } from "./utils";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";

import TableFilter from "../../common/TableFilter";
import AddPhysicalVerification from "./AddPhysicalVerification";

class ViewPhysicalVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
            filterText: "",
            resetPaginationToggle: false,

        };
    }
    componentDidMount() {
        this.props.getPhysicalVerificationDetails();
    }


    render() {
        return (
            <>
                <ContentLoader>
                    {this.props.physicalVerification.isLoading && <Loader />}
                    {this.props.physicalVerification.message && (
                        <CustomAlert
                            variant={this.props.physicalVerification.isSuccess ? "success" : "danger"}
                            message={this.props.physicalVerification.message}
                        />
                    )}

                    <AddPhysicalVerification showMoreModal={this.props.physicalVerification.showMoreModalFlag} />


                    <FormContainer formTitle={"Physical Verification Details"}>
                        {this.props.physicalVerification.physicalVerificationDetails && (
                            <CustomDataTable
                                metaData={physicalVerificationMetaData(

                                    (id) => this.props.showPhysicalVerificationModal(id)
                                )}
                                bodyData={this.props.physicalVerification.physicalVerificationDetails}
                                progressPending={this.props.physicalVerification.isLoading}
                                pagination={true}
                                paginationTotalRows={
                                    this.props.physicalVerification.physicalVerificationDetails &&
                                    this.props.physicalVerification.physicalVerificationDetails.length
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

export default ViewPhysicalVerification;
