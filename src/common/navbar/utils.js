import store from "../../store";

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map((item) => {});
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
    id: "2",
    navText: "E-Track",
    iconName: "faCubes",
    hasSubNav: true,
    isSubNavOpen: false,
    route: "/etrack",
    hasMargin: false,
    isParent: true,
    subNavs: [
      {
        id: "etrack" + 1,
        navText: "Structure Mgmt.",
        iconName: "faBuilding",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/etrack/structure",
        hasMargin: true,
        subNavs: [
          {
            id: "structMgmnt" + 1,
            navText: "Create",
            iconName: "faPlus",
            route: "/etrack/structure/assignStructure",
          },
          {
            id: "structMgmnt" + 2,
            navText: "Modify",
            iconName: "faEdit",
            route: "/etrack/structure/assignStructure",
          },
          {
            id: "structMgmnt" + 3,
            navText: "View",
            iconName: "faEye",
            route: "/etrack/structure/viewStructure",
          },
        ],
      },
      {
        id: "etrack" + 2,
        navText: "Requirement Mgmt.",
        iconName: "faClock",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/etrack/requirementRequest",
        subNavs: [
          {
            id: "scheduleMgmnt" + 1,
            navText: "Request Creation",
            iconName: "faPaperPlane",
            //hasSubNav: true,
            route: "/etrack/requirementRequest/addRequirements",

            // subNavs: [
            //   {
            //     id: "requirementRequestSub" + 1,
            //     navText: "Add Requirements",
            //     iconName: "faPlus",
            //     route: "/etrack/requirementRequest/addRequirements",
            //   },
            //   {
            //     id: "requirementRequestSub" + 2,
            //     navText: "View Requirements",
            //     iconName: "faEye",
            //     route: "/etrack/requirementRequest/viewRequirements",
            //   },
            //   {
            //     id: "requirementRequestSub" + 3,
            //     navText: "BU Approval",
            //     iconName: "faThumbsUp",
            //     route: "/etrack/requirementRequest/businessUnitApproval",
            //   },
            //   {
            //     id: "requirementRequestSub" + 4,
            //     navText: "TWCC Approval",
            //     iconName: "faThumbsUp",
            //     route: "/etrack/requirementRequest/twccApproval",
            //   },
            //   {
            //     id: "requirementRequestSub" + 5,
            //     navText: "CMPC Approval",
            //     iconName: "faThumbsUp",
            //     route: "/etrack/requirementRequest/cmpcApproval",
            //   },
            //   // {
            //   //   id: "requirementRequestSub" + 3,
            //   //   navText: "Site Dispatch",
            //   //   route: "/etap/requirementRequest/siteDispatch",
            //   // },
            // ],
          },
          {
            id: "scheduleMgmnt" + 2,
            navText: "Request Approval",
            iconName: "faFolderPlus",
            // hasSubNav: true,
            route: "/etrack/surplus",
            // subNavs: [
            //   {
            //     id: "surplusDecl" + 1,
            //     navText: "Add Surplus",
            //     iconName: "faPlus",
            //     route: "/etrack/surplus/add",
            //   },
            //   {
            //     id: "surplusDecl" + 2,
            //     navText: "View Surplus",
            //     iconName: "faEye",
            //     route: "/etrack/surplus/viewSurplus",
            //   },
            // ]
          },
        ],
      },
      // {
      //   id: "3",
      //   navText: "Dispatch management",
      //   iconName: "faTruck",
      //   hasSubNav: true,
      //   isSubNavOpen: false,
      //   route: "/dispatch",
      //   hasMargin: true,
      //   subNavs: [
      //     {
      //       id: "dispatch" + 1,
      //       navText: "Create Dispatch",
      //       route: "/etrack/dispatch/createDispatch",
      //     },
      //     {
      //       id: "dispatch" + 2,
      //       navText: "Site Dispatch",
      //       route: "/etrack/dispatch/siteDispatch",
      //     },
      //     {
      //       id: "dispatch" + 3,
      //       navText: "Condition Assessment",
      //       route: "/etrack/dispatch/conditionAssessment",
      //     },
      //     {
      //       id: "dispatch" + 4,
      //       navText: "TWCC Dispatch",
      //       route: "/etrack/dispatch/twccDispatch",
      //     },
      //   ],
      // },
      {
        id: "4",
        navText: "Fabrication Mgmt.",
        iconName: "faObjectGroup",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/fab",
        hasMargin: true,
        subNavs: [
          {
            id: "fabMgmnt" + 1,
            navText: "As built details",
            iconName: "faBuilding",
            hasSubNav: true,
            route: "/etrack/built",
            subNavs: [
              {
                id: "fabSub" + 1,
                navText: "Built details",
                route: "/etrack/built/builtDetails",
              },
              {
                id: "fabSub" + 2,
                navText: "Book Value",
                route: "/etrack/built/bookValue",
              },
            ],
          },
          // {
          //   id: "fabMgmnt" + 2,
          //   navText: "Modification management",
          //   hasSubNav: true,
          //   route: "/etrack/modificationMgmnt",
          //   subNavs: [

          //     {
          //       id: "modificationMgmntSub" + 1,
          //       navText: "Add Modification",
          //       route: "/etrack/modificationMgmnt/addModification",
          //     },
          //     {
          //       id: "modificationMgmntSub" + 2,
          //       navText: "CMPC Approval",
          //       route: "/etrack/modificationMgmnt/cmpcApproval",
          //     },
          //   ],
          // },

          // {
          //   id: "fab" + 3,
          //   navText: "Site Approval",
          //   route: "/newFabrication/siteApproval",
          // },
        ],
      },
      {
        id: "5",
        navText: "Cost Mgmt.",
        iconName: "faFileArchive",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/cost",
        hasMargin: true,
        subNavs: [
          {
            id: "costMgmnt" + 1,
            navText: "Cost Accounting",
            hasSubNav: true,
            route: "/etrack/fabCost",
            subNavs: [
              {
                id: "costMgmntSub" + 1,
                navText: "Procurement",
                route: "/etrack/fabCost/procurement",
              },
              {
                id: "costMgmntSub" + 2,
                navText: "Site Approval",
                route: "/etrack/fabCost/siteApproval",
              },
            ],
          },
          // {
          //   id: "costMgmnt" + 2,
          //   navText: "Hire charges details",
          //   hasSubNav: true,
          //   route: "/etrack/hireCharges",
          //   subNavs: [
          //     {
          //       id: "hireCharges" + 1,
          //       navText: "Procurement",
          //       route: "/etrack/hireCharges/procurement",
          //     },
          //     {
          //       id: "hireCharges" + 2,
          //       navText: "Site Approval",
          //       route: "/etrack/hireCharges/siteApproval",
          //     },
          //   ],
          // },
          // {
          //   id: "costMgmnt" + 3,
          //   navText: "Depreciation management",
          //   hasSubNav: true,
          //   route: "/etrack/depreciationMgmnt",
          //   subNavs: [
          //     {
          //       id: "depreciationMgmntSub" + 1,
          //       navText: "Depreciation Value",
          //       route: "/etrack/depreciationMgmnt/depreciationValue",
          //     },
          //     {
          //       id: "depreciationMgmntSub" + 2,
          //       navText: "TWCC Approval",
          //       route: "/etrack/depreciationMgmnt/twccApproval",
          //     },
          //   ],
          // },
          // {
          //   id: "cost" + 5,
          //   navText: "Transfer Price",
          //   route: "/reuse/transferPrice",
          // },
          // {
          //   id: "cost" + 6,
          //   navText: "Site Approval",
          //   route: "/outSourcing/outSourceSiteApproval",
          // },
          // {
          //   id: "cost" + 7,
          //   navText: "From Site Approval",
          //   route: "/reuse/fromSiteApproval",
          // },
          // {
          //   id: "cost" + 8,
          //   navText: "To Site Approval",
          //   route: "/reuse/toSiteApproval",
          // },
        ],
      },
      {
        id: "6",
        navText: "Life cycle Mgmt.",
        iconName: "faRandom",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/life",
        hasMargin: true,
        subNavs: [
          {
            id: "lifeCycleMgmnt" + 1,
            navText: "Surplus Declaration",
            iconName: "faUserCheck",
            hasSubNav: true,
            route: "/etrack/inspection",
            subNavs: [
              {
                id: "inspectionSub" + 1,
                navText: "EHS",
                iconName: "faMedkit",
                route: "/etrack/inspection/ehs",
              },
              {
                id: "inspectionSub" + 2,
                navText: "QA/QC",
                iconName: "faCheckSquare",
                route: "/etrack/inspection/qaqc",
              },
            ],
          },

          {
            id: "lifeCycleMgmnt" + 2,
            navText: "Scrap Declaration",
            iconName: "faScroll",
            hasSubNav: true,
            route: "/etrack/scrapping",
            subNavs: [
              {
                id: "scrappingSub" + 1,
                navText: "Add Scrap",
                iconName: "faScroll",
                route: "/etrack/scrapping/addScrap",
              },
            ],
          },
          {
            id: "lifeCycleMgmnt" + 3,
            navText: "Physical Inspection",
            iconName: "faCheckCircle",
            hasSubNav: true,
            route: "/etrack/physicalverification",
            subNavs: [
              {
                id: "physicalverificationSub" + 1,
                navText: "Initiate Verification",
                iconName: "faCheck",
                route:
                  "/etrack/physicalverification/initiatePhysicalVerification",
              },
              {
                id: "physicalverification" + 2,
                navText: "TWCC Approval",
                iconName: "faThumbsUp",
                route: "/etrack/physicalverification/twccApproval",
              },
              {
                id: "physicalverification" + 3,
                navText: "Auditor Approval",
                iconName: "faThumbsUp",
                route: "/etrack/physicalverification/auditorApproval",
              },
            ],
          },
        ],
      },
      {
        id: "7",
        navText: "Dispatch Mgmt",
        iconName: "faTruck",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/dispatch",
        hasMargin: true,
        subNavs: [
          {
            id: "dispatchSub" + 1,
            navText: "Dispatch",
            iconName: "faTruck",
            route: "/etrack/dispatch/twccDispatch",
          },
          {
            id: "dispatchSub" + 2,
            navText: "Procurement",
            iconName: "faBusinessTime",
            route: "/etrack/dispatch/procurement",
          },
          {
            id: "dispatchSub" + 3,
            navText: "Vendor",
            iconName: "faUser",
            route: "/etrack/dispatch/vendor",
          },
        ],
      },
      {
        id: "8",
        navText: "Masters",
        iconName: "faEdit",
        hasSubNav: true,
        isSubNavOpen: false,
        route: "/masters",
        hasMargin: true,
        subNavs: [
          {
            id: "mastersSub" + 1,
            navText: "IC",
            iconName: "faIndustry",
            route: "/etrack/masters/viewIndependentCompany",
          },
          {
            id: "mastersSub" + 2,
            navText: "BU",
            iconName: "faBusinessTime",
            route: "/etrack/masters/viewBusinessUnit",
          },
          {
            id: "mastersSub" + 3,
            navText: "Project",
            iconName: "faProjectDiagram",
            route: "/etrack/masters/viewProject",
          },
          {
            id: "mastersSub" + 4,
            navText: "WBS",
            iconName: "faSuitcase",
            route: "/etrack/masters/addWBS",
          },
          {
            id: "mastersSub" + 5,
            navText: "Users",
            iconName: "faUsers",
            route: "/etrack/masters/viewUsers",
          },
          {
            id: "mastersSub" + 6,
            navText: "Cost Management",
            iconName: "faRupeeSign",
            route: "/etrack/masters/viewUsers",
          },
          {
            id: "mastersSub" + 7,
            navText: "Structure Family",
            iconName: "faLayerGroup",
            route: "/etrack/masters/viewStructureFamily",
          },

          {
            id: "mastersSub" + 8,
            navText: "Structure",
            iconName: "faBuilding",
            route: "/etrack/masters/viewStructure",
          },
          {
            id: "mastersSub" + 9,
            navText: "Component Type",
            iconName: "faBoxes",
            route: "/etrack/masters/viewComponent",
          },
          {
            id: "mastersSub" + 10,
            navText: "Unavailability Reason",
            iconName: "faBan",
            route: "/etrack/masters/viewComponent",
          },

          {
            id: "mastersSub" + 11,
            navText: "Vendors",
            iconName: "faStore",
            route: "/etrack/masters/viewVendors",
          },
        ],
      },
      
      // {
      //   id: "8",
      //   navText: "Reports",
      //   iconName: "faChartPie",
      //   hasSubNav: false,
      //   isSubNavOpen: false,
      //   route: "/etrack",
      //   hasMargin: true,
      // },
    ],
  },
  // {
  //   id: "9",
  //   navText: "Form Track",
  //   iconName: "faDatabase",
  //   hasSubNav: false,
  //   isSubNavOpen: false,
  //   route: "/formTrack",
  //   isParent: true,
  // },
  // {
  //   id: "10",
  //   navText: "EP Tracking",
  //   iconName: "faMicrochip",
  //   hasSubNav: false,
  //   isSubNavOpen: false,
  //   route: "/eptrack",
  //   hasMargin: false,
  //   isParent: true,
  // },
];
