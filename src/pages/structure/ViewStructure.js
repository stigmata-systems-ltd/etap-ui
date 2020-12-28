import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listStructureMetaData, transformStructureList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AddStructure from "../../container/structure/addStructure";

class ViewStructure extends Component {
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
    this.props.structureList();
    this.props.structureFamilyList();
  }

  filteredItems = (data) => {
    console.log(data)
    return (
      data &&
      data.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <ContentLoader>
        {this.props.structure.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.structure.message}
          />
        )}
        <AddStructure showAddComponentModal={this.props.structure.showAddStructureModal} />
        <FormContainer formTitle={"Structure List"}>
          {this.props.structure.structureList && (
            <CustomDataTable
              metaData={listStructureMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformStructureList(
                this.filteredItems(this.props.structure.structureList), this.props.structure.structureFamilyList
              )}
              progressPending={this.props.structure.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.structure.structureList &&
                this.filteredItems(this.props.structure.structureList).length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By Structure"
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
                    btnText="Create New Structure"
                    btnType="btn-primary float-right"
                    onClick={this.props.showAddStructureModal}
                  />
                  </Col6>
                </>
              }
            />
          )}
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewStructure;
