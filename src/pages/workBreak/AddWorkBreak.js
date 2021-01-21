import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import FileInput from "../../common/forms/FileInput";
import CheckBox from "../../common/forms/CheckBox";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import { CSVReader } from "react-papaparse";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import { transformWBSData, listWBSMetaData, CSVLoaderStyles } from "./utils";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformDropDownData } from "../../utils/dataTransformer";
import { Link } from "react-router-dom";
class AddWorkBreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  componentDidMount() {
    this.props.getProjectList();
  }
  filteredItems = (data) => {
    console.log(data);
    return (
      data &&
      data.filter(
        (item) =>
          item.wbs &&
          item.wbs.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    const subprop = this.props.addWorkBreak;
    return (
      <>
        <ContentLoader>
          <FormContainer formTitle={"Add WBS"}>
            <FormRow>
              <SearchableDropDown
                label="Project Name"
                name="projectName"
                labelSize="mx-2"
                fieldSize="col-md-6"
                selectOptions={transformDropDownData(
                  this.props.wbs.projectCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) => this.props.handleChangeProjectName(obj)}
                value={this.props.wbs.wbsProjectName}
              />
            </FormRow>
            <hr />{" "}
            <FormRow>
              <Col className="col-6 offset-3">
                <CSVReader
                  onDrop={this.props.handleOnDrop}
                  onError={this.handleOnError}
                  noDrag
                  addRemoveButton
                  onRemoveFile={this.handleOnRemoveFile}
                  style={CSVLoaderStyles}
                >
                  <span className="loader-text">Click to upload WBS File</span>
                </CSVReader>
              </Col>
            </FormRow>
            <br />
            <FormRow>
              {this.props.wbs.wbsUploadedData && (
                <CustomDataTable
                  metaData={listWBSMetaData()}
                  bodyData={this.filteredItems(transformWBSData(this.props.wbs.wbsUploadedData))}
                  progressPending={this.props.wbs.isLoading}
                  pagination={true}
                  paginationTotalRows={
                    this.props.wbs.wbsUploadedData &&
                    this.filteredItems(this.props.wbs.wbsUploadedData).length
                  }
                  paginationPerPage={5}
                  noHeader={true}
                  subHeader
                  subHeaderComponent={
                    <>
                      <TableFilter
                        placeholder="Search By ID"
                        size="col-md-12"
                        fieldSize="col-sm-5 border"
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
            </FormRow>
            <FormRow>
              <Col6>
                <Link to="/wbs.csv" target="_blank" download>
                  Download WBS Template
                </Link>
              </Col6>
              <Col6 size="col-md-6 d-flex justify-content-end">
                <Button
                  btnText="SAVE"
                  onClick={this.props.saveWBSData}
                  btnType="primary"
                />
                <Button
                  btnText="DISCARD"
                  btnType="btn-outline-secondary ml-2 mr-4"
                  onClick={this.props.resetUsersData}
                />
              </Col6>
            </FormRow>
            <br />
            <br />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default AddWorkBreak;
