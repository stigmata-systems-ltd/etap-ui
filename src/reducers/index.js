import { combineReducers } from 'redux';
// import subContractorReducer from './subContractorReducer';
// import authReducer from './authReducer';
// import gridReducer from './gridReducer';
// import clientReducer from './clientReducer';
// import roles from './roleManagementReducer';
// import reports from './reportsReducer';
// import planningManager from './planningManagerReducer';
// import userManagementReducer from './userManagementReducer';
// import dashBoardReducer from './dashBoardReducer';
import structureReducer from './structureReducer';

const rootReducer = combineReducers({
  structure: structureReducer,
 
});

export default rootReducer;
