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
        navText: 'Add Structure',
        route: '/masters/addStructure',
      },
      {
        id: 'mastersSub' + 4,
        navText: 'Add Project',
        route: '/masters/addProject',
      },
      {
        id: 'mastersSub' + 5,
        navText: 'Add WBS',
        route: '/masters/addWBS',
      },

      {
        id: 'mastersSub' + 6,
        navText: 'Add Users',
        route: '/masters/addUsers',
      },
      {
        id: 'mastersSub' + 7,
        navText: 'Add IC/BU',
        route: '/masters/addIndependentCompany',
      },
      {
        id: 'mastersSub' + 8,
        navText: 'Add SubContractor',
        route: '/masters/addSubcontractor',
      },
    ],
  },
  {
    id: '2',
    navText: 'Structure',
    iconName: 'faLink',
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
     
      {
        id: 'structureSub' + 6,
        navText: 'Add Requirements',
        route: '/structure/addRequirements',
      },
      {
        id: 'structureSub' + 7,
        navText: 'View Requirements',
        route: '/structure/viewRequirements',
      },

      {
        id: 'structureSub' + 8,
        navText: 'View Surplus',
        route: '/structure/viewSurplus',
      },
      {
        id: 'structureSub' + 9,
        navText: 'Dispatch Management',
        route: '/structure/dispatchManagement',
      },
      {
        id: 'structureSub' + 10,
        navText: 'Technical Evaluation',
        route: '/structure/technicalEvaluation',
      },

    ],
  },
];
