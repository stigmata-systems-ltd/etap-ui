import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import FileInput from '../../common/forms/FileInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import Radio from '../../common/forms/Radio';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';

import { _scrapInputData, _scrapInputBodyData } from './utils';

import DateInput from '../../common/forms/DateInput';

class Scrap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.scrap;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Scrap'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Project"
                                name="project"
                                id="project"
                                onChange={e =>
                                    this.props.handleChangeScrapProjectName(e.target.value)
                                }
                            // value={subprop.project}
                            />
                            <TextInput
                                label="Vendor"
                                name="vendor"
                                id="vendor"
                                onChange={e =>
                                    this.props.handleChangeScrapVendor(e.target.value)
                                }
                            // value={subprop.vendor}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure"
                                name="structure"
                                id="structure"
                                onChange={e =>
                                    this.props.handleChangeScrapStructureName(e.target.value)
                                }
                            // value={subprop.structure}
                            />
                            <TextInput
                                label="Scrap Rate"
                                name="scrapRate"
                                id="scrapRate"
                                onChange={e =>
                                    this.props.handleChangeScrapRate(e.target.value)
                                }
                            // value={subprop.scrapRate}
                            />

                        </FormRow>
                        <FormRow>
                            <SimpleDropDown
                                size="col-sm-5"
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeScrapStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />

                            <TextInput
                                size="col-sm-4"
                                label="Auction ID"
                                name="auctionId"
                                id="auctionId"
                                onChange={e =>
                                    this.props.handleChangeScrapAuctionId(e.target.value)
                                }
                            // value={subprop.auctionId}
                            />
                            <FileInput size="col-sm-3" />


                        </FormRow>
                        <FormRow>
                            <TextInput
                                
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeScrapStructureId(e.target.value)
                                }
                                // value={subprop.structureId}
                                placeholder="Auto Fetch"
                            />
                        </FormRow>
                        <p><b>List of Components :</b></p>
                        <FormRow>

                            <DataTable

                                metaData={_scrapInputData}
                                bodyData={_scrapInputBodyData}
                                

                            />
                        </FormRow>

                        <br />



                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveSubContractorData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetSubContractorData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default Scrap;
