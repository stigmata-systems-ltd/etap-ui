import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

import TableFilter from "../../common/TableFilter";
import FormContainer from "../../common/forms/FormContainer";
import CustomDataTable from "../../common/CustomDataTable";
import { listBuiltDetailsMetaData } from "./utils";


class BuiltMoreDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Built - Details`}
                showModal={this.props.showBuiltViewMoreModal}
                handleClose={this.props.closeBuiltViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}


                <FormContainer formTitle={"Built Details"}>
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
                                <TableFilter
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
                                />

                            </>
                        }
                    />
                    {/* )} */}

                </FormContainer>


            </Modal>
        );
    }
}

export default BuiltMoreDetails;
