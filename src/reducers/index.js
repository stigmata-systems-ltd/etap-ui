import { combineReducers } from "redux";
// import subContractorReducer from './subContractorReducer';
// import authReducer from './authReducer';
// import gridReducer from './gridReducer';
// import clientReducer from './clientReducer';
// import roles from './roleManagementReducer';
// import reports from './reportsReducer';
// import planningManager from './planningManagerReducer';
// import userManagementReducer from './userManagementReducer';
// import dashBoardReducer from './dashBoardReducer';
import componentReducer from "./componentReducer";
import structureReducer from "./structureReducer";
import transferPriceReducer from "./transferPriceReducer";
import wbsReducer from "./wbsReducer";
import projReducer from "./projectReducer";
import independentCompanyReducer from "./independentCompanyReducer";
import usersReducer from "./userReducer";
import structureFamilyReducer from "./structureFamilyReducer";
import vendorReducer from "./vendorReducer";
import businessUnitReducer from "./businessUnitReducer";
import requirementReducer from "./requirementReducer";
import assignStructureReducer from "./assignStructureReducer";
import structCompReducer from "./structCompReducer";
import authReducer from "./authReducer";
import surplusReducer from "./surplusReducer";
import scrapReducer from "./scrapReducer";
import siteDispatchReducer from "./siteDispatchReducer";
import procurementReducer from "./procurementReducer";

const rootReducer = combineReducers({
  structure: structureReducer,
  transferPrice: transferPriceReducer,
  component: componentReducer,
  wbs: wbsReducer,
  proj: projReducer,
  icbu: independentCompanyReducer,
  users: usersReducer,
  structureFamily: structureFamilyReducer,
  vendor: vendorReducer,
  businessUnit: businessUnitReducer,
  requirement: requirementReducer,
  assignStructure: assignStructureReducer,
  scr: structCompReducer,
  auth: authReducer,
  surplus: surplusReducer,
  scrap: scrapReducer,
  siteDispatch: siteDispatchReducer,
  procurement: procurementReducer,

});

export default rootReducer;
