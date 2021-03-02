import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listBuiltTypeMetaData, listBuiltDetailsMetaData } from "./utils";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import BuiltViewMore from "../../container/built/builtMore";
import BuiltMoreEdit from "../../container/built/builtEdit";

class ViewAsBuilt extends Component {
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
        this.props.builtList();
    }


    filteredItems = (data) => {

        if (data) {
            return data.filter((item) => {
                for (let key in item) {
                    if (item[key] && item[key].toString().toLowerCase().includes(this.state.filterText.toLowerCase())) {
                        return true;
                    }
                }
            })
        }
    };


    render() {
        return (
            <ContentLoader>
                {this.props.built.isAddComponentMsg && (
                    <CustomAlert
                        variant="success"
                        message={this.props.built.message}
                    />
                )}
                <BuiltMoreEdit showBuiltEditMoreModal={this.props.built.showBuiltEditMoreModal} />
                <BuiltViewMore showBuiltViewMoreModal={this.props.built.showBuiltViewMoreModal} />

                <FormContainer formTitle={"As Built"}>
                    {/* {this.props.built.builtTypeList && ( */}
                    <CustomDataTable
                        metaData={listBuiltTypeMetaData(
                            (structureName) => { this.props.redirectToBuiltMoreDetails(structureName) },
                            (id) => this.props.handleEdit(id),
                            (id) => this.props.handleMore(id),
                            //(id) => this.props.redirectBuiltDetails(id),
                        )}
                        // bodyData={this.props.procurement.siteDispatchDetails}
                        bodyData={[{ structureName: "Launching Girders", structureCode: "STR 001", dcNo: "16" },
                        { structureName: "Tresties", structureCode: "STR 002", dcNo: "17" }]}
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

            </ContentLoader>
        );
    }
}

export default ViewAsBuilt;
