import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import CustomAlert from "../../common/forms/customAlert";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={"Dashboard"}>
          
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
