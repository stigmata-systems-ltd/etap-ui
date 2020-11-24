import store from '../../store';

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map(item => {});
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
        route: '/masters/createComponent',
      },
      {
        id: 'mastersSub' + 3,
        navText: 'Add Structure',
        route: '/masters/createStructure',
      },
      {
        id: 'mastersSub' + 4,
        navText: 'Add Project',
        route: '/masters/createProject',
      },
      {
        id: 'mastersSub' + 5,
        navText: 'Add WBS',
        route: '/masters/addWBS',
      },
      {
        id: 'mastersSub' + 6,
        navText: 'Add Users',
        route: '/masters/createUsers',
      },
      {
        id: 'mastersSub' + 7,
        navText: 'Add SubContractor',
        route: '/masters/createSubcontractor',
      },
    ],
  },
];
