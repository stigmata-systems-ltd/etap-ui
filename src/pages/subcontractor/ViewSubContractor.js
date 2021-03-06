import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';
import Radio from '../../common/forms/Radio';
import { _subContractorBodyData, _subContractorData, listVendorMetaData, transformVendorList } from './utils';
import Col6 from '../../common/forms/Col6';
import ConfirmModal from '../../common/ConfirmModal';
import TableFilter from '../../common/TableFilter';
import CustomDataTable from '../../common/CustomDataTable';
import AddSubContractor from './AddSubContractor';

class ViewSubContractor extends Component {
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
        this.props.vendorList();
    }

    // filteredItems = (data) => {
    //     console.log(data);
    //     return (
    //       data &&
    //       data.filter(
    //         (item) =>
    //           item.name &&
    //           item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
    //       )
    //     );
    //   };

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
        const subprop = this.props.addSubContractor;
        return (
            <>
                <ContentLoader>
                    {this.props.vendor.isLoading && <Loader />}
                    {this.props.vendor.isVendorMsg && (
                        <CustomAlert
                            variant="success"
                            message={this.props.vendor.message}
                        />
                    )}
                    <AddSubContractor {...this.props} />
                    <FormContainer formTitle={"Vendor Management"}>
                        {this.props.vendor.vendorList && (
                            <CustomDataTable
                                metaData={listVendorMetaData(
                                    (id) => this.setState({ activeId: id, showDeleteModal: true }),
                                    (id) => this.props.handleEdit(id),
                                )}
                                bodyData={this.filteredItems(this.props.vendor.vendorList)}
                                progressPending={this.props.vendor.isLoading}
                                pagination={true}
                                paginationTotalRows={
                                    this.props.vendor.vendorList &&
                                    this.filteredItems(this.props.vendor.vendorList).length
                                }
                                paginationPerPage={5}
                                noHeader={true}
                                subHeader
                                subHeaderComponent={
                                    <>
                                        <TableFilter
                                            placeholder="Search By Vendor Name"
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
                                                btnText="Add Vendor"
                                                btnType="btn-primary float-right"
                                                onClick={this.props.showAddVendorModal}
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
                            title="Delete Vendor"
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
            </>
        );
    }
}

export default ViewSubContractor;
