import store from '../../store';

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map(item => { });
};
export const metaDataNavbar = [

  {
    id: '7',
    navText: 'Dashboard',
    iconName: 'faHome',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/dashboard',
    hasMargin: false,
  },
  {
    id: '8',
    navText: 'E-Tap',
    iconName: 'faCubes',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/etap',
    hasMargin: false,
  },
  {
    id: '1',
    navText: 'Masters',
    iconName: 'faEdit',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/masters',
    hasMargin: true,
    subNavs: [
      {
        id: 'mastersSub' + 2,
        navText: 'Component',
        route: '/structure/viewComponent',
      },
      {
        id: 'mastersSub' + 3,
        navText: 'Structure Family',
        route: '/masters/viewStructureFamily',
      },
      {
        id: 'mastersSub' + 4,
        navText: 'Structure',
        route: '/masters/viewStructure',
      },
      {
        id: 'mastersSub' + 5,
        navText: 'Project',
        route: '/masters/viewProject',
      },
      {
        id: 'mastersSub' + 6,
        navText: 'WBS',
        route: '/masters/addWBS',
      },

      {
        id: 'mastersSub' + 7,
        navText: 'Users',
        route: '/masters/viewUsers',
      },
      {
        id: 'mastersSub' + 8,
        navText: 'IC',
        route: '/masters/viewIndependentCompany',
      },
      {
        id: 'mastersSub' + 9,
        navText: 'BU',
        route: '/masters/viewBusinessUnit',
      },
      {
        id: 'mastersSub' + 10,
        navText: 'Vendors',
        route: '/masters/viewVendors',
      },
    ],
  },
  {
    id: '2',
    navText: 'Structure Management',
    iconName: 'faBuilding',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/structure',
    hasMargin: true,
    subNavs: [
      {
        id: 'structureSub' + 3,
        navText: 'Create Structure',
        route: '/structure/assignStructure',
      },
      {
        id: 'structureSub' + 4,
        navText: 'View Structure',
        route: '/structure/viewStructure',
      },
      // {
      //   id: 'structureSub' + 5,
      //   navText: 'View Component',
      //   route: '/structure/viewComponent',
      // },
    ]
  },
  {
    id: '3',
    navText: 'Schedule Management',
    iconName: 'faClock',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/requirementRequest',
    hasMargin: true,
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
        navText: 'Add Surplus',
        route: '/surplus/add',
      },
      {
        id: 'requirementRequestSub' + 7,
        navText: 'View Surplus',
        route: '/requirementRequest/viewSurplus',
      },
      

    ],
  },
  {
    id: '4',
    navText: 'Reports',
    iconName: 'faChartPie',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/etap',
    hasMargin: true,
  },
  {
    id: '5',
    navText: 'Form Track',
    iconName: 'faDatabase',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/etap',
    hasMargin: false,
  },
  {
    id: '6',
    navText: 'EP Tracking',
    iconName: 'faMicrochip',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/etap',
    hasMargin: false,
  },
];
