import store from "../../store";

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map((item) => { });
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
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
    isParent: true,
    subNavs: [
      {
        id: "etapSub" +1,
        navText: "Masters",
        iconName: "faEdit",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/masters",
        hasMargin: false,
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
            navText: "IC",
            route: "/masters/viewIndependentCompany",
          },
          {
            id: "mastersSub" + 6,
            navText: "BU",
            route: "/masters/viewBusinessUnit",
          },
          {
            id: "mastersSub" + 7,
            navText: "Project",
            route: "/masters/viewProject",
          },
          {
            id: "mastersSub" + 8,
            navText: "WBS",
            route: "/masters/addWBS",
          },

          {
            id: "mastersSub" + 9,
            navText: "Users",
            route: "/masters/viewUsers",
          },

          {
            id: "mastersSub" + 10,
            navText: "Vendors",
            route: "/masters/viewVendors",
          },
        ],
      },
      {
        id: "etapSub" +2,
        navText: "Structure Management",
        iconName: "faBuilding",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/structure",
        hasMargin: false,
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
        id: "etapSub" +3,
        navText: "Schedule Management",
        iconName: "faClock",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/requirementRequest",
        hasMargin: false,
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
          {
            id: "requirementRequestSub" + 8,
            navText: "Site Dispatch",
            route: "/requirementRequest/siteDispatch",
          },
        ],
      },
      {
        id: "etapSub" +4,
        navText: "Dispatch management",
        iconName: "faTruck",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/dispatch",
        hasMargin: false,
        subNavs: [
          {
            id: "dispatch" + 1,
            navText: "Create Dispatch",
            route: "/dispatch/createDispatch",
          },
          {
            id: "dispatch" + 2,
            navText: "Dispatch",
            route: "/requirementRequest/addRequirements",
          },
        ],
      },
      {
        id: "etapSub" +5,
        navText: "Fabrication management",
        iconName: "faObjectGroup",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/fab",
        hasMargin: false,
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
          {
            id: "fab" + 3,
            navText: "Site Approval",
            route: "/newFabrication/siteApproval",
          },
          ,
        ],
      },
      {
        id: "etapSub" +6,
        navText: "Cost management",
        iconName: "faFileArchive",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/cost",
        hasMargin: false,
        subNavs: [
          {
            id: "cost" + 1,
            navText: "Actual fabrication cost",
            route: "/requirementRequest/addRequirements",
          },
          {
            id: "cost" + 4,
            navText: "Procurement",
            route: "/cost/procurement",
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
          {
            id: "cost" + 4,
            navText: "Condition Assessment",
            route: "/reuse/conditionAssessment",
          },
          {
            id: "cost" + 5,
            navText: "Transfer Price",
            route: "/reuse/transferPrice",
          },
          {
            id: "cost" + 6,
            navText: "Site Approval",
            route: "/outSourcing/outSourceSiteApproval",
          },
          {
            id: "cost" + 7,
            navText: "From Site Approval",
            route: "/reuse/fromSiteApproval",
          },
          {
            id: "cost" + 8,
            navText: "To Site Approval",
            route: "/reuse/toSiteApproval",
          },

        ],
      },
      {
        id: "etapSub" +7,
        navText: "Life cycle management",
        iconName: "faRandom",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/life",
        hasMargin: false,
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

    ]
  },
  {
    id: "4",
    navText: "Reports",
    iconName: "faChartPie",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
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
