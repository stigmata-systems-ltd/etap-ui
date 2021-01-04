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
        route: '/structure/viewComponent',
      },
      {
        id: 'mastersSub' + 3,
        navText: 'Add Structure Family',
        route: '/masters/viewStructureFamily',
      },
      {
        id: 'mastersSub' + 4,
        navText: 'Add Structure',
        route: '/masters/viewStructure',
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
        route: '/masters/viewUsers',
      },
      {
        id: 'mastersSub' + 8,
        navText: 'Add IC',
        route: '/masters/viewIndependentCompany',
      },
      {
        id: 'mastersSub' + 9,
        navText: 'Add BU',
        route: '/masters/viewBusinessUnit',
      },
      {
        id: 'mastersSub' + 10,
        navText: 'View Vendors',
        route: '/masters/viewVendors',
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
      // {
      //   id: 'requirementRequestSub' + 5,
      //   navText: 'View Requirements',
      //   route: '/requirementRequest/viewRequirements',
      // },

      {
        id: 'requirementRequestSub' + 6,
        navText: 'Add Surplus',
        route: '/surplus/add',
      },


    ],
  },
];
