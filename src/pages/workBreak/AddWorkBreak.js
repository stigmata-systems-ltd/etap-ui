import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import FileInput from '../../common/forms/FileInput';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';
import { CSVReader } from 'react-papaparse';
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import {transformWBSData,listWBSMetaData} from './utils';
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
        console.log('---------------------------');
        console.log(data);
        console.log('---------------------------');
      };

      componentDidMount() {
        this.props.getProjectList();
      }
    render() {
        const subprop = this.props.addWorkBreak;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add WBS'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Project Name"
                                name="projectName"
                                onChange={e => this.props.handleChangeProjectName(e.target.value)}
                                value={this.props.wbs.projectCodesList}
                            />

                        </FormRow>
                        <FormRow>
                            <Col className="col-3">
                                <Button
                                    btnText="Excel Template Upload"
                                    onClick={this.props.saveUsersData}
                                    btnType="primary"

                                />
                            </Col>
                            <Col className="col-3">
                                <CSVReader
                                    onDrop={this.props.handleOnDrop}
                                    onError={this.handleOnError}
                                    noDrag
                                    addRemoveButton
                                    onRemoveFile={this.handleOnRemoveFile}
                                    >
                                    <span>Click to upload.</span>
                                </CSVReader>
                            </Col>
                        </FormRow>

                        <FormRow>
                        {this.props.wbs.wbsUploadedData && (
            <CustomDataTable
              metaData={listWBSMetaData()}
              bodyData={transformWBSData(
                this.props.wbs.wbsUploadedData
              )}
              progressPending={this.props.wbs.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.wbs.wbsUploadedData &&
                this.props.wbs.wbsUploadedData.length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By ID"
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
                        </FormRow>
                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveUsersData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetUsersData}
                        />
                    
                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default AddWorkBreak;
