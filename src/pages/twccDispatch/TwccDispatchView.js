import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import CustomAlert from "../../common/forms/customAlert";
import { listTwccDispatchMetaData, transformTwccDispatchList } from "./utils";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import TwccDispatchViewMore from "./TwccDispatchViewMore";

class TwccDispatchView extends Component {
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
        this.props.twccDispatchList();
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
                {this.props.twccDispatch.isAddComponentMsg && (
                    <CustomAlert
                        variant="success"
                        message={this.props.twccDispatch.message}
                    />
                )}
                <TwccDispatchViewMore showTwccDispatchModal={this.props.twccDispatch.showTwccDispatchMoreModal} />
                <FormContainer formTitle={"Dispatch"}>
                    {this.props.twccDispatch.twccDispatchList && (
                        <CustomDataTable
                            metaData={listTwccDispatchMetaData(
                                (structureID, projectID) => { this.props.handleComponentCheck(structureID, projectID) },
                                (id) => this.props.handleMore(id),
                            )}
                            bodyData={transformTwccDispatchList(
                                this.filteredItems(this.props.twccDispatch.twccDispatchList)
                            )}
                            progressPending={this.props.twccDispatch.isLoading}
                            pagination={true}
                            paginationTotalRows={
                                this.props.twccDispatch.twccDispatchList &&
                                this.filteredItems(this.props.twccDispatch.twccDispatchList).length
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
                    )}
                </FormContainer>
            </ContentLoader>
        );
    }
}

export default TwccDispatchView;
