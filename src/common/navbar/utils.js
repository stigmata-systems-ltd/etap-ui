import store from "../../store";

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map((item) => {});
};
export const metaDataNavbar = [
  {
    id: "7",
    navText: "Dashboard",
    iconName: "faHome",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/dashboard",
    hasMargin: false,
  },
  {
    id: "8",
    navText: "E-Tap",
    iconName: "faCubes",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
    isParent: true,
  },
  {
    id: "1",
    navText: "Masters",
    iconName: "faEdit",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/masters",
    hasMargin: true,
    subNavs: [
      {
        id: "mastersSub" + 2,
        navText: "Component",
        route: "/masters/viewComponent",
      },
      {
        id: "mastersSub" + 3,
        navText: "Structure Family",
        route: "/masters/viewStructureFamily",
      },
      {
        id: "mastersSub" + 4,
        navText: "Structure",
        route: "/masters/viewStructure",
      },
      {
        id: "mastersSub" + 5,
        navText: "Project",
        route: "/masters/viewProject",
      },
      {
        id: "mastersSub" + 6,
        navText: "WBS",
        route: "/masters/addWBS",
      },

      {
        id: "mastersSub" + 7,
        navText: "Users",
        route: "/masters/viewUsers",
      },
      {
        id: "mastersSub" + 8,
        navText: "IC",
        route: "/masters/viewIndependentCompany",
      },
      {
        id: "mastersSub" + 9,
        navText: "BU",
        route: "/masters/viewBusinessUnit",
      },
      {
        id: "mastersSub" + 10,
        navText: "Vendors",
        route: "/masters/viewVendors",
      },
    ],
  },
  {
    id: "2",
    navText: "Structure Management",
    iconName: "faBuilding",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/structure",
    hasMargin: true,
    subNavs: [
      {
        id: "structureSub" + 3,
        navText: "Create Structure",
        route: "/structure/assignStructure",
      },
      {
        id: "structureSub" + 4,
        navText: "View Structure",
        route: "/structure/viewStructure",
      },
      // {
      //   id: 'structureSub' + 5,
      //   navText: 'View Component',
      //   route: '/structure/viewComponent',
      // },
    ],
  },
  {
    id: "3",
    navText: "Schedule Management",
    iconName: "faClock",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/requirementRequest",
    hasMargin: true,
    subNavs: [
      {
        id: "requirementRequestSub" + 4,
        navText: "Add Requirements",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "requirementRequestSub" + 5,
        navText: "View Requirements",
        route: "/requirementRequest/viewRequirements",
      },
      {
        id: "requirementRequestSub" + 6,
        navText: "Add Surplus",
        route: "/surplus/add",
      },
      {
        id: "requirementRequestSub" + 7,
        navText: "View Surplus",
        route: "/requirementRequest/viewSurplus",
      },
    ],
  },
  {
    id: "10",
    navText: "Dispatch management",
    iconName: "faTruck",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/dispatch",
    hasMargin: true,
    subNavs: [
      {
        id: "dispatch" + 1,
        navText: "Dispatch",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "11",
    navText: "Fabrication management",
    iconName: "faObjectGroup",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/fab",
    hasMargin: true,
    subNavs: [
      {
        id: "fab" + 1,
        navText: "As built details",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "fab" + 2,
        navText: "Modification management",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "12",
    navText: "Cost management",
    iconName: "faFileArchive",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/cost",
    hasMargin: true,
    subNavs: [
      {
        id: "cost" + 1,
        navText: "Actual fabrication cost",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "cost" + 2,
        navText: "Hire charges details",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "cost" + 3,
        navText: "Depreciation management",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "10",
    navText: "Dispatch management",
    iconName: "faTruck",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/dispatch",
    hasMargin: true,
    subNavs: [
      {
        id: "dispatch" + 1,
        navText: "Dispatch",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "11",
    navText: "Fabrication management",
    iconName: "faObjectGroup",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/fab",
    hasMargin: true,
    subNavs: [
      {
        id: "fab" + 1,
        navText: "As built details",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "fab" + 2,
        navText: "Modification management",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "12",
    navText: "Cost management",
    iconName: "faFileArchive",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/cost",
    hasMargin: true,
    subNavs: [
      {
        id: "cost" + 1,
        navText: "Actual fabrication cost",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "cost" + 2,
        navText: "Hire charges details",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "cost" + 3,
        navText: "Depreciation management",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "13",
    navText: "Life cycle management",
    iconName: "faRandom",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/life",
    hasMargin: true,
    subNavs: [
      {
        id: "Life" + 1,
        navText: "Inspection",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "Life" + 2,
        navText: "Physical verification",
        route: "/requirementRequest/addRequirements",
      },
      {
        id: "Life" + 3,
        navText: "Scrapping",
        route: "/requirementRequest/addRequirements",
      },
    ],
  },
  {
    id: "4",
    navText: "Reports",
    iconName: "faChartPie",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: true,
  },
  {
    id: "5",
    navText: "Form Track",
    iconName: "faDatabase",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
  },
  {
    id: "6",
    navText: "EP Tracking",
    iconName: "faMicrochip",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
  },
];
