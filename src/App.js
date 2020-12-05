import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';

//Pages Import
import AddStructure from './container/structure/addStructure';
import AddUsers from './container/users/addUsers';
import AddComponent from './container/component/addComponent';
import AddIndependentCompany from './container/independentCompany/independentCompany';
import AddProject from './container/project/addProject';
import AddSubContractor from './container/subContractor/addSubContractor';
import AddWorkBreak from './container/workBreak/addWorkBreak';
import AssignStructure from './container/assignStructure/assignStructure';
import AddRequirement from './container/requirement/addRequirement';

import ViewStructure from './pages/structure/ViewStructure';
import ViewComponent from './pages/component/ViewComponent';
import ViewRequirements from './pages/requirements/ViewRequirements';
import ViewSurplus from './pages/surplus/ViewSurplus';
import TechnicalEvaluation from './pages/technicalEvaluation/TechnicalEvaluation';
import HealthSafty from './pages/lifeCycleManagement/HealthSafty';
import QualityCheck from './pages/qualityCheck/QualityCheck';
import CmpcModification from './pages/modificationManagement/CmpcModification';

import DispatchManagement from './container/dispatchManagement/dispatchManagement';
import NewFabrication from './container/newFabrication/newFabrication';
import OutSource from './container/outSource/outSource';
import Scrap from './container/scrap/scrap';
import StructureModification from './container/modificationManagement/structureModification';

import Procurement from './container/procurement/procurement';
import OutSourcing from './container/dispatchManagement/outSourcing';
import TransferPrice from './container/reuse/transferPrice';
import Reuse from './container/reuse/reuse';
import InitiatingReuse from './container/initiatingReuse/initiatingReuse';

// import CreateComponent from './container/component/createComponent';
// import ViewStructure from './container/structure/viewStructure';
// import ViewComponent from './container/component/viewComponent';

import unauthorized from './common/Unauthorized';
import SiteApproval from './pages/dispatchManagement/SiteApproval';

// import { setRespInterceptor, setAuthHeader } from './utils/auth';
// setAuthHeader();
// setRespInterceptor();
class App extends Component {
  // constructor() {
  //   super()
  //   setInterceptor();
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/masters/addComponent"
            component={AddComponent}
          ></Route>
          <Route
            exact
            path="/masters/addStructure"
            component={AddStructure}
          ></Route>
          <Route
            exact
            path="/masters/addProject"
            component={AddProject}
          ></Route>
          <Route
            exact
            path="/masters/addUsers"
            component={AddUsers}
          ></Route>
          <Route
            exact
            path="/masters/addWBS"
            component={AddWorkBreak}
          ></Route>
          <Route
            exact
            path="/masters/addIndependentCompany"
            component={AddIndependentCompany}
          ></Route>
          <Route
            exact
            path="/masters/addSubcontractor"
            component={AddSubContractor}
          ></Route>
          <Route
            exact
            path="/structure/assignStructure"
            component={AssignStructure}
          ></Route>
          <Route
            exact
            path="/requirementRequest/addRequirements"
            component={AddRequirement}
          ></Route>
          <Route
            exact
            path="/structure/viewStructure"
            component={ViewStructure}
          ></Route>
          <Route
            exact
            path="/structure/viewComponent"
            component={ViewComponent}
          ></Route>
          <Route
            exact
            path="/requirementRequest/viewRequirements"
            component={ViewRequirements}
          ></Route>
          <Route
            exact
            path="/requirementRequest/viewSurplus"
            component={ViewSurplus}
          ></Route>
          <Route
            exact
            path="/dispatchManagement/dispatchManagement"
            component={DispatchManagement}
          ></Route>
          <Route
            exact
            path="/vendor/procurement"
            component={Procurement}
          ></Route>
          <Route
            exact
            path="/vendor/siteApproval"
            component={SiteApproval}
          ></Route>
          <Route
            exact
            path="/dispatchManagement/technicalEvaluation"
            component={TechnicalEvaluation}
          ></Route>
          <Route
            exact
            path="/vendor/newFabrication"
            component={NewFabrication}
          ></Route>
          <Route
            exact
            path="/vendor/outsource"
            component={OutSource}
          ></Route>
          <Route
            exact
            path="/lifeCycle/healthSafty"
            component={HealthSafty}
          ></Route>
          <Route
            exact
            path="/lifeCycle/qualityCheck"
            component={QualityCheck}
          ></Route>
          <Route
            exact
            path="/scrap/scrap"
            component={Scrap}
          ></Route>
          <Route
            exact
            path="/modification/structureModification"
            component={StructureModification}
          ></Route>
          <Route
            exact
            path="/modification/cmpcModification"
            component={CmpcModification}
          ></Route>
          <Route
            exact
            path="/outsourcing/outSourcing"
            component={OutSourcing}
          ></Route>
          <Route
            exact
            path="/outsourcing/siteApproval"
            component={SiteApproval}
          ></Route>
          <Route
            exact
            path="/reuse/transferPrice"
            component={TransferPrice}
          ></Route>
          <Route
            exact
            path="/reuse/initiatingReuse"
            component={InitiatingReuse}
          ></Route>
          <Route
            exact
            path="/reuse/reuse"
            component={Reuse}
          ></Route>



          <Route exact path="/unauthorized" component={unauthorized} />
        </Switch>
      </Router>
    );
  }
}

export default App;
