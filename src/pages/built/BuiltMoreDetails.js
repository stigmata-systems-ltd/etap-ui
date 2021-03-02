import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";
import CustomDataTable from "../../common/CustomDataTable";
import { listBuiltDetailsMetaData } from "./utils";
import ContentLoader from "../../common/ContentLoader";
import Loader from "../../common/Loader";
import Popup from "../../common/forms/Popup";


class BuiltMoreDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        let id = window.atob(this.props.match.params.siteReqId);
        this.props.onPageLoad(id);
    };

    render() {
        return (
            <>

                <ContentLoader>
                    {this.props.built.isLoading && <Loader />}
                    {this.props.built.message && (
                        <Popup
                            type={this.props.built.isSuccess ? "success" : "error"}
                            message={this.props.built.message}
                            onClose={this.props.resetMessage}
                        />
                    )}
                    {this.props.built.dispatchError && (
                        <Popup
                            type="error"
                            message={this.props.built.dispatchErrMsg}
                            onClose={() => this.props.setDispatchError(false, "")}
                        />
                    )}
                    <FormContainer formTitle={"As Built Details"}>
                        {/* {this.props.built.builtTypeList && ( */}
                        <CustomDataTable
                            metaData={listBuiltDetailsMetaData()}
                            // bodyData={this.props.procurement.siteDispatchDetails}
                            bodyData={[{ component: "LG", id: "LG-1", drNo: "ABC161", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1620" },
                            { component: "LG", id: "LG-2", drNo: "ABC162", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1621" },
                            { component: "LG", id: "LG-3", drNo: "ABC163", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1622" }]}
                            progressPending={this.props.built.isLoading}
                            pagination={true}
                            paginationTotalRows={
                                this.props.built.builtTypeList &&
                                this.filteredItems(this.props.built.builtTypeList).length
                            }
                            paginationPerPage={5}
                            noHeader={true}
                            subHeader
                            subHeaderComponent={
                                <>
                                    {/* <TableFilter
                                placeholder="Search"
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
                            /> */}

                                </>
                            }
                        />
                        {/* )} */}

                    </FormContainer>
                </ContentLoader>
            </>

        );
    }
}

export default BuiltMoreDetails;
