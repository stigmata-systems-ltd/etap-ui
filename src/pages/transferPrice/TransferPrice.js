import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { transferPriceMetaData } from "./utils";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/CustomDataTable";
import AddTransferPrice from "./AddTransferPrice";
import TransferPriceViewMore from "./TransferPriceViewMore";

class TransferPrice extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTransferPriceDetails();
  }

  render() {
    return (
      <>
        <ContentLoader>
          {this.props.transferPrice.isLoading && <Loader />}
          {this.props.transferPrice.message && (
            <CustomAlert
              variant={this.props.transferPrice.isSuccess ? "success" : "danger"}
              message={this.props.transferPrice.message}
            />
          )}
          <AddTransferPrice
            {...this.props}
            showModal={this.props.transferPrice.showEditModalFlag}
          />
          <TransferPriceViewMore
            {...this.props}
            showMoreModal={this.props.transferPrice.showMoreModalFlag}
          />
          <FormContainer formTitle={"Transfer Price"}>
            {this.props.transferPrice.transferPriceDetails && (
              <CustomDataTable
                metaData={transferPriceMetaData(
                  this.props.showTransferPriceModal,
                  this.props.showTransferPriceViewMoreModal
                )}
                bodyData={this.props.transferPrice.transferPriceDetails}
                progressPending={this.props.transferPrice.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.transferPrice.transferPriceDetails &&
                  this.props.transferPrice.transferPriceDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
              />
            )}
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default TransferPrice;
