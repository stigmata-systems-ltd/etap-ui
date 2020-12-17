import store from '../../store';

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map(item => { });
};
export const metaDataNavbar = [
  
  {
    id: '1',
    navText: 'Masters',
    iconName: 'faMagnet',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/masters',
    subNavs: [
      {
        id: 'mastersSub' + 2,
        navText: 'Add Component',
        route: '/masters/addComponent',
      },
      {
        id: 'mastersSub' + 3,
        navText: 'Add Structure Family',
        route: '/masters/viewStructureFamily',
      },
      {
        id: 'mastersSub' + 4,
        navText: 'Add Structure',
        route: '/masters/addStructure',
      },
      {
        id: 'mastersSub' + 5,
        navText: 'Add Project',
        route: '/masters/viewProject',
      },
      {
        id: 'mastersSub' + 6,
        navText: 'Add WBS',
        route: '/masters/addWBS',
      },

      {
        id: 'mastersSub' + 7,
        navText: 'Add Users',
        route: '/masters/addUsers',
      },
      {
        id: 'mastersSub' + 8,
        navText: 'Add IC/BU',
        route: '/masters/addIndependentCompany',
      },
      {
        id: 'mastersSub' + 9,
        navText: 'Add SubContractor',
        route: '/masters/viewSubContractor',
      },
    ],
  },
  {
    id: '2',
    navText: 'Structure & Component',
    iconName: 'faBuilding',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/structure',
    subNavs: [
      {
        id: 'structureSub' + 3,
        navText: 'Assign Structure',
        route: '/structure/assignStructure',
      },
      {
        id: 'structureSub' + 4,
        navText: 'View Structure',
        route: '/structure/viewStructure',
      },
      {
        id: 'structureSub' + 5,
        navText: 'View Component',
        route: '/structure/viewComponent',
      },
    ]
  },
  {
    id: '3',
    navText: 'Schedule Management',
    iconName: 'faClock',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/requirementRequest',
    subNavs: [
      {
        id: 'requirementRequestSub' + 4,
        navText: 'Add Requirements',
        route: '/requirementRequest/addRequirements',
      },
      {
        id: 'requirementRequestSub' + 5,
        navText: 'View Requirements',
        route: '/requirementRequest/viewRequirements',
      },

      {
        id: 'requirementRequestSub' + 6,
        navText: 'View Surplus',
        route: '/requirementRequest/viewSurplus',
      },


    ],
  },
  {
    id: '4',
    navText: 'Dispatch Management',
    iconName: 'faCogs',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/dispatchManagement',
    subNavs: [
      {
        id: 'dispatchManagementSub' + 5,
        navText: 'Dispatch Management',
        route: '/dispatchManagement/dispatchManagement',
      },
      {
        id: 'dispatchManagementSub' + 6,
        navText: 'Technical Evaluation',
        route: '/dispatchManagement/technicalEvaluation',
      },

    ],
  },
  {
    id: '5',
    navText: 'New Fabrication',
    iconName: 'faUser',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/vendor',
    subNavs: [
      {
        id: 'vendorSub' + 6,
        navText: 'Vendor',
        route: '/vendor/newFabrication',
      },
      {
        id: 'dispatchManagementSub' + 7,
        navText: 'Procurement',
        route: '/vendor/procurement',
      },
      {
        id: 'dispatchManagementSub' + 8,
        navText: 'Site Approval',
        route: '/vendor/siteApproval',
      },
      {
        id: 'vendorSub' + 7,
        navText: 'Outsource',
        route: '/vendor/outsource',
      },
    ],
  },
  {
    id: '6',
    navText: 'Life Cycle Management',
    iconName: 'faLifeRing',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/lifeCycle',
    subNavs: [
      {
        id: 'lifeCycleSub' + 7,
        navText: 'EHS',
        route: '/lifeCycle/healthSafty',
      },
      {
        id: 'lifeCycleSub' + 8,
        navText: 'QA/QC',
        route: '/lifeCycle/qualityCheck',
      },
      {
        id: 'lifeCycleSub' + 9,
        navText: 'Initiate Physical Verification',
        route: '/lifeCycle/initiatePhyscialVerification',
      },
      {
        id: 'lifeCycleSub' + 10,
        navText: 'Site View Physical Verification',
        route: '/lifeCycle/siteViewPhysicalVerification',
      },
      {
        id: 'lifeCycleSub' + 11,
        navText: 'Physical Verification',
        route: '/lifeCycle/twccPhysicalVerification',
      },
      {
        id: 'lifeCycleSub' + 12,
        navText: 'Auditor Physical Verification',
        route: '/lifeCycle/auditorPhysicalVerification',
      },
    ],
  },
  {
    id: '7',
    navText: 'Scrap',
    iconName: 'faRecycle',
    isSubNavOpen: false,
    route: '/scrap/scrap',

  },
  {
    id: '8',
    navText: 'Modification Management',
    iconName: 'faEdit',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/modification',
    subNavs: [
      {
        id: 'modificationSub' + 9,
        navText: 'Structure Modification',
        route: '/modification/structureModification',
      },
      {
        id: 'modificationSub' + 10,
        navText: 'CMPC Modification',
        route: '/modification/cmpcModification',
      },
    ],
  },
  {
    id: '9',
    navText: 'Outsourcing',
    iconName: 'faAddressCard',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/outsourcing',
    subNavs: [
      {
        id: 'outsourcingSub' + 10,
        navText: 'Outsourcing',
        route: '/outsourcing/outSourcing',
      },
      {
        id: 'outsourcingSub' + 11,
        navText: 'Site Approval',
        route: '/outsourcing/siteApproval',
      },
      {
        id: 'outsourcingSub' + 11,
        navText: 'Vendor',
        route: '/outsourcing/Vendor',
      },
    ],
  },
  {
    id: '10',
    navText: 'Initiating Reuse',
    iconName: 'faAddressCard',
    route: '/reuse/initiatingReuse',

  },
  {
    id: '11',
    navText: 'Reuse',
    iconName: 'faLowVision',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/reuse',
    subNavs: [
      {
        id: 'reuseSub' + 12,
        navText: 'Transfer Price',
        route: '/reuse/transferPrice',
      },
      {
        id: 'reuseSub' + 13,
        navText: 'Reuse',
        route: '/reuse/reuse',
      },

    ],
  },


];
