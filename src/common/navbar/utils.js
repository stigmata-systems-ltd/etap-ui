import store from "../../store";

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map((item) => { });
};
export const metaDataNavbar = [
  {
    id: "1",
    navText: "Dashboard",
    iconName: "faHome",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/dashboard",
    hasMargin: false,
  },
  {
    id: "4",
    navText: "E-Tap",
    iconName: "faCubes",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/etap",
    hasMargin: false,
    isParent: true,
    subNavs: [
      {
        id: "etap" + 1,
        navText: "Structure Management",
        iconName: "faBuilding",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/etap/structure",
        hasMargin: true,
        subNavs: [
          {
            id: "structMgmnt" + 1,
            navText: "Create Structure",
            route: "/etap/structure/assignStructure",
          },
          {
            id: "structMgmnt" + 2,
            navText: "View Structure",
            route: "/etap/structure/viewStructure",
          },
        ],
      },
      {
        id: "etap" + 2,
        navText: "Schedule Management",
        iconName: "faClock",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/etap/requirementRequest",
        subNavs: [
          {
          id: "scheduleMgmnt" + 1,
          navText: "Requirement Request",
          hasSubNav: true,
          route: "/etap/requirementRequest",
          subNavs: [
            {
              id: "requirementRequestSub" + 1,
              navText: "Add Requirements",
              route: "/etap/requirementRequest/addRequirements",
            },
            {
              id: "requirementRequestSub" + 2,
              navText: "View Requirements",
              route: "/etap/requirementRequest/viewRequirements",
            },
            {
              id: "requirementRequestSub" + 3,
              navText: "Site Dispatch",
              route: "/etap/requirementRequest/siteDispatch",
            },
          ],
        },
        {
          id: "scheduleMgmnt" + 2,
          navText: "Surplus Declaration",
          hasSubNav: true,
          route: "/etap/requirementRequest",
          subNavs: [
            {
              id: "surplusDecl" + 1,
              navText: "Add Surplus",
              route: "/etap/surplus/add",
            },
            {
              id: "surplusDecl" + 2,
              navText: "View Surplus",
              route: "/etap/requirementRequest/viewSurplus",
            },
          ]
        }
        ]
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
          {
            id: "fab" + 3,
            navText: "Site Approval",
            route: "/newFabrication/siteApproval",
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
    ]
  },
  {
    id: "2",
    navText: "Form Track",
    iconName: "faDatabase",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/formTrack",
    isParent: true,
  },
  {
    id: "3",
    navText: "EP Tracking",
    iconName: "faMicrochip",
    hasSubNav: false,
    isSubNavOpen: false,
    route: "/eptrack",
    hasMargin: false,
    isParent: true, 
  },
];
