import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/styles.css";

//Pages Import
// import AddStructure from './container/structure/addStructure';
import ViewUsers from "./container/users/viewUsers";
import AddComponent from "./container/component/addComponent";
// import AddIndependentCompany from './container/independentCompany/independentCompany';
import ViewIndependentCompany from "./container/independentCompany/viewIndependentCompany";
import ViewBusinessUnit from "./container/businessUnit/viewBusinessUnit";

import AddWorkBreak from "./container/workBreak/addWorkBreak";
import ViewWorkBreak from "./container/workBreak/viewWBS";
import AssignStructure from "./container/assignStructure/assignStructure";
import AddRequirement from "./container/requirement/addRequirement";
import AddScrap from "./container/scrap/addScrap";

import ViewStructure from "./container/structure/viewStructure";
import ViewComponent from "./container/component/viewComponent";
import ViewRequirements from "./container/requirement/viewRequirementAction";
import ViewSurplus from "./container/surplus/viewSurplusAction";
import TechnicalEvaluation from "./pages/technicalEvaluation/TechnicalEvaluation";
import HealthSafty from "./pages/lifeCycleManagement/HealthSafty";
import QualityCheck from "./pages/qualityCheck/QualityCheck";
import CmpcModification from "./pages/modificationManagement/CmpcModification";

import DispatchManagement from "./container/dispatchManagement/dispatchManagement";
import NewFabrication from "./container/newFabrication/newFabrication";
import OutSource from "./container/outSource/outSource";
import Scrap from "./container/scrap/scrap";
import StructureModification from "./container/modificationManagement/structureModification";

import Procurement from "./container/procurement/procurement";
import OutSourcing from "./container/dispatchManagement/outSourcing";
// import TransferPrice from "./container/transferPrice/transferPrice";
import Reuse from "./container/reuse/reuse";
import InitiatingReuse from "./container/initiatingReuse/initiatingReuse";
import InitiatePhyscialVerification from "./container/lifeCycleManagement/initialPhysicalVerification";

import unauthorized from "./common/Unauthorized";
import SiteApproval from "./pages/dispatchManagement/SiteApproval";
import SiteViewPhysicalVerification from "./pages/lifeCycleManagement/SiteViewPhysicalVerification";
import PhysicalVerification from "./pages/lifeCycleManagement/PhysicalVerification";
import AuditorPhysicalVerification from "./pages/lifeCycleManagement/AuditorPhysicalVerification";
import ViewStructureFamily from "./container/structureFamily/viewStructureFamily";
import ViewAssignStructure from "./container/assignStructure/viewAssignStructure";
import ViewAssignComponent from "./container/assignStructure/viewAssignComponent";
import AddSurplus from "./container/surplus/addSurplus";
import { setRespInterceptor, setAuthHeader } from "./utils/auth";
import Login from "./container/login/login";
import Dashboard from "./pages/dashboard/Dashboard";

const ViewProject = React.lazy(() =>
  import("./container/project/viewProjectContainer")
);

const ViewVendors = React.lazy(() =>
  import("./container/subContractor/viewSubContractor")
);

const SiteDispatch = React.lazy(() =>
  import("./container/siteDispatch/siteDispatch")
);
const TransferPrice = React.lazy(() =>
  import("./container/transferPrice/transferPrice")
);
const NewFabricationSiteApproval = React.lazy(() =>
  import("./container/siteApproval/siteApproval")
);
const OutSourcingSiteApproval = React.lazy(() =>
  import("./container/outSource/siteApproval")
);
const ConditionAssessment = React.lazy(() =>
  import("./container/conditionAssessment/conditionAssessment")
);
const FromSiteApproval = React.lazy(() =>
  import("./container/fromSiteApproval/fromSiteApproval")
);
const ToSiteApproval = React.lazy(() =>
  import("./container/toSiteApproval/toSiteApproval")
);
const CreateDispatch = React.lazy(() =>
  import("./container/createDispatch/createDispatch")
);
const DispatchStructure = React.lazy(() =>
  import("./container/createDispatch/dispatchStructure")
);
const PhysicalVerificationn = React.lazy(() =>
  import("./container/physicalVerification/physicalVerification")
);
const ViewAsBuilt = React.lazy(() =>
  import("./container/built/built")
);
const BuiltMoreDetails = React.lazy(() =>
  import("./container/built/builtMoreDetails")
);

setAuthHeader();
setRespInterceptor();
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route
              exact
              path="/etrack/masters/addComponent"
              component={AddComponent}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewStructureFamily"
              component={ViewStructureFamily}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewStructure"
              component={ViewStructure}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewProject"
              component={ViewProject}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewUsers"
              component={ViewUsers}
            ></Route>
            <Route
              exact
              path="/etrack/masters/addWBS"
              component={AddWorkBreak}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewWBS"
              component={ViewWorkBreak}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewIndependentCompany"
              component={ViewIndependentCompany}
            ></Route>
            <Route
              exact
              path="/etrack/scrapping/addScrap"
              component={AddScrap}
            ></Route>
            <Route
              exact
              path="/etrack/surplus/add"
              component={AddSurplus}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewBusinessUnit"
              component={ViewBusinessUnit}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewVendors"
              component={ViewVendors}
            ></Route>
            <Route
              exact
              path="/etrack/structure/assignStructure"
              component={AssignStructure}
            ></Route>
            <Route
              exact
              path="/etrack/requirementRequest/addRequirements"
              component={AddRequirement}
            ></Route>
            <Route
              exact
              path="/etrack/masters/viewComponent"
              component={ViewComponent}
            ></Route>
            <Route
              exact
              path="/etrack/structure/viewStructure"
              component={ViewAssignStructure}
            ></Route>
            <Route
              exact
              path="/etrack/structure/viewComponent"
              component={ViewAssignComponent}
            ></Route>
            <Route
              exact
              path="/etrack/assignStructure/viewStructure"
              component={ViewAssignStructure}
            ></Route>
            <Route
              exact
              path="/assignStructure/viewComponent"
              component={ViewAssignComponent}
            ></Route>
            <Route
              exact
              path="/etrack/requirementRequest/viewRequirements"
              component={ViewRequirements}
            ></Route>
            <Route
              exact
              path="/etrack/surplus/viewSurplus"
              component={ViewSurplus}
            ></Route>
            <Route
              exact
              path="/dispatchManagement/dispatchManagement"
              component={DispatchManagement}
            ></Route>
            <Route
              exact
              path="/etrack/dispatch/procurement"
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
            <Route exact path="/vendor/outsource" component={OutSource}></Route>
            <Route
              exact
              // path="/lifeCycle/healthSafty"
              path="/etrack/inspection/ehs"
              component={HealthSafty}
            ></Route>
            <Route
              exact
              path="/etrack/inspection/qaqc"
              // path="/lifeCycle/qualityCheck"
              component={QualityCheck}
            ></Route>
            <Route
              exact
              path="/lifeCycle/initiatePhyscialVerification"
              component={InitiatePhyscialVerification}
            ></Route>
            <Route
              exact
              path="/lifeCycle/siteViewPhysicalVerification"
              component={SiteViewPhysicalVerification}
            ></Route>
            <Route
              exact
              path="/lifeCycle/twccPhysicalVerification"
              component={PhysicalVerification}
            ></Route>
            <Route
              exact
              path="/lifeCycle/auditorPhysicalVerification"
              component={AuditorPhysicalVerification}
            ></Route>

            <Route exact path="/scrap/scrap" component={Scrap}></Route>
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
              path="/outSourcing/siteApproval"
              component={OutSourcingSiteApproval}
            ></Route>

            <Route
              exact
              path="/reuse/initiatingReuse"
              component={InitiatingReuse}
            ></Route>
            <Route exact path="/reuse/reuse" component={Reuse}></Route>

            <Route exact path="/scrap/scrap" component={Scrap}></Route>
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
              path="/etrack/dispatch/vendor"
              component={SiteDispatch}
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
              path="/reuse/initiatingReuse"
              component={InitiatingReuse}
            ></Route>
            <Route exact path="/reuse/reuse" component={Reuse}></Route>

            <Route exact path="/scrap/scrap" component={Scrap}></Route>
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
              path="/newFabrication/siteApproval"
              component={NewFabricationSiteApproval}
            ></Route>
            <Route
              exact
              path="/etrack/built/builtDetails"
              component={ViewAsBuilt}
            ></Route>
            <Route
              exact
              path="/etrack/built/asBuiltDetails/:siteReqId"
              component={BuiltMoreDetails}
            ></Route>
            <Route
              exact
              path="/outSourcing/outSourceSiteApproval"
              component={OutSourcingSiteApproval}
            ></Route>
            <Route
              exact
              path="/etrack/dispatch/conditionAssessment"
              component={ConditionAssessment}
            ></Route>
            <Route
              exact
              path="/etrack/dispatch/twccDispatch"
              component={CreateDispatch}
            ></Route>
            <Route
              exact
              path="/reuse/fromSiteApproval"
              component={FromSiteApproval}
            ></Route>
            <Route
              exact
              path="/reuse/toSiteApproval"
              component={ToSiteApproval}
            ></Route>
            <Route
              exact
              path="/etrack/physicalverification/initiatePhysicalVerification"
              component={PhysicalVerificationn}
            ></Route>

            <Route
              exact
              path="/reuse/initiatingReuse"
              component={InitiatingReuse}
            ></Route>

            <Route
              exact
              path="/etrack/dispatch/createDispatch/dispatchStructure/:siteReqId"
              component={DispatchStructure}
            ></Route>
            
            <Route exact path="/reuse/reuse" component={Reuse}></Route>
          </Suspense>
          <Route exact path="/unauthorized" component={unauthorized} />
        </Switch>
      </Router>
    );
  }
}

export default App;
