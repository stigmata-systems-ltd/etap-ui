import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import store from "../../store";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubNavOpen: false,
      currentOpenParentId: "0",
      isParentOpen: false,
      isLvl1Open: false,
      activeParent: "0",
      activeLvl1: "0",
      currentOpenLvl1Id: "0",
      isLvl2Open: false,
      activeLvl2: "0",
      currentOpenLvl2Id: "0",
      isLvl3Open: false,
      activeLvl3: "0",
      currentOpenLvl3Id: "0",
    };
  }
  componentDidMount = () => {
    console.log("didmount");
    this.setActiveMenu(this.props.navData);
  };
  renderSubNavs = (subNavs, id) => {
    return subNavs.map((subNav, index) => (
      <div
        key={index}
        class={`collapse ${
          this.state.isSubNavOpen && this.state.activeId === id && "show"
        }`}
      >
        <ul class="nav flex-column sub-menu">
          <li class="nav-item sub-nav">
            <button
              class="nav-link"
              onClick={() => this.handleSubMenuRedirect(subNav.route, id)}
            >
              {subNav.navText}
            </button>
          </li>
        </ul>
      </div>
    ));
  };
  handleSubMenuRedirect = (route, id) => {
    this.props.history.push(route);
    this.setState({ activeId: id });
    this.setState({ isSubNavOpen: true });
  };
  handleSubMenuShow = (navItem) => {
    this.setState({ activeId: navItem.id }, () => {
      if (navItem.hasSubNav) {
        if (this.state.activeId === navItem.id) {
          if (this.state.activeId === this.state.currentOpenParentId) {
            this.setState({ isSubNavOpen: !this.state.isSubNavOpen });
          } else {
            this.setState({ isSubNavOpen: true });
            this.setState({ currentOpenParentId: this.state.activeId });
          }
        }
      } else {
        this.props.history.push(navItem.route);
      }
    });
  };
  setActiveMenu = (navData) => {
    const parentPath = "/" + this.props.history.location.pathname.split("/")[1];
    const lvl1Path =
      parentPath + "/" + this.props.history.location.pathname.split("/")[2];
    const lvl2Path =
      lvl1Path + "/" + this.props.history.location.pathname.split("/")[3];
    const lvl3Path =
      lvl2Path + "/" + this.props.history.location.pathname.split("/")[4];

    navData.map((nav) => {
      if (nav.route === parentPath) {
        this.setState({ activeParent: nav.id });
        if (this.state.currentOpenParentId !== nav.id && nav.hasSubNav) {
          this.setState({
            isLvl1Open: true,
            currentOpenParentId: nav.id,
          });
          if (nav.hasSubNav) {
            nav.subNavs.map((lvl1Nav) => {
              if (lvl1Nav.route === lvl1Path) {
                this.setState({ activeLvl1: lvl1Nav.id });
                if (
                  this.state.currentOpenLvl1Id !== lvl1Nav.id &&
                  lvl1Nav.hasSubNav
                ) {
                  this.setState({
                    isLvl2Open: true,
                    currentOpenLvl1Id: lvl1Nav.id,
                  });
                }
              }
            });
          }
        }
      }
    });
  };
  showLvl4 = (navItem, hasSubNav) => {
    this.props.history.push(navItem.route);
  };
  showLvl3 = (navItem, hasSubNav) => {
    if (navItem.hasSubNav) {
      this.setState({ activeLvl2: navItem.id }, () => {
        if (this.state.activeLvl2 === navItem.id) {
          if (this.state.activeLvl2 === this.state.currentOpenLvl2Id) {
            this.setState({ isLvl3Open: !this.state.isLvl3Open });
          } else {
            this.setState({ isLvl3Open: true });
            this.setState({ currentOpenLvl2Id: this.state.activeLvl2 });
          }
        }
      });
    } else {
      this.props.history.push(navItem.route);
    }
  };
  renderLvl3 = (lvl2Nav, id) => {
    if (lvl2Nav && lvl2Nav.hasSubNav) {
      return lvl2Nav.subNavs.map((navItem, index) => (
        <div
          key={index}
          class={`collapse ${
            this.state.isLvl3Open && this.state.activeLvl2 === id && "show"
          }`}
        >
          <ul class="nav flex-column sub-menu">
            <li
              key={index}
              class={`nav-item ${
                this.state.activeLvl3 === navItem.id && "active"
              }`}
            >
              <button
                key={navItem.id}
                class={`nav-link ${
                  this.state.isLvl3Open &&
                  this.state.activeLvl3 === navItem.id &&
                  "show"
                }`}
                onClick={() => this.showLvl4(navItem, true)}
              >
                <div className="row w-100 align-items-end">
                  <div className="col-md-1 px-0">
                    {navItem.iconName && (
                      <FontAwesomeIcon
                        key={"navIcon" + navItem.id}
                        icon={fa[navItem.iconName]}
                        className="navIcons"
                      />
                    )}
                  </div>
                  <div className="col-md-10 pl-3 text-left">
                    <span class="menu-title">{navItem.navText}</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    {navItem.hasSubNav &&
                      (this.state.isLvl3Open &&
                      this.state.activeLvl3 === navItem.id ? (
                        <FontAwesomeIcon
                          icon={fa.faAngleDown}
                          className="menu-arrow"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={fa.faAngleRight}
                          className="menu-arrow"
                        />
                      ))}
                  </div>
                </div>
              </button>
              {/* {this.renderLvl3(navItem.subNavs, navItem.id)} */}
            </li>
          </ul>
        </div>
      ));
    }
  };
  showLvl2 = (navItem) => {
    this.setState({ activeLvl1: navItem.id }, () => {
      if (navItem.hasSubNav) {
        if (this.state.activeLvl1 === navItem.id) {
          if (this.state.activeLvl1 === this.state.currentOpenLvl1Id) {
            this.setState({ isLvl2Open: !this.state.isLvl2Open });
          } else {
            this.setState({ isLvl2Open: true });
            this.setState({ currentOpenLvl1Id: this.state.activeLvl1 });
          }
        }
      } else {
        this.props.history.push(navItem.route);
      }
    });
  };
  renderLvl2 = (lvl1Nav, id) => {
    if (lvl1Nav && lvl1Nav.hasSubNav) {
      return lvl1Nav.subNavs.map((navItem, index) => (
        <div
          key={index}
          class={`collapse ${
            this.state.isLvl2Open && this.state.activeLvl1 === id && "show"
          }`}
        >
          <ul class="nav flex-column sub-menu">
            <li
              key={index}
              class={`nav-item ${
                this.state.activeLvl2 === navItem.id && "active"
              }`}
            >
              <button
                key={navItem.id}
                class={`nav-link ${
                  this.state.isLvl2Open &&
                  this.state.activeLvl2 === navItem.id &&
                  "show"
                }`}
                onClick={() => this.showLvl3(navItem)}
              >
                <div className="row w-100 align-items-end">
                  <div className="col-md-1 px-0">
                    {navItem.iconName && (
                      <FontAwesomeIcon
                        key={"navIcon" + navItem.id}
                        icon={fa[navItem.iconName]}
                        className="navIcons"
                      />
                    )}
                  </div>
                  <div className="col-md-10 pl-3 text-left">
                    <span class="menu-title">{navItem.navText}</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    {navItem.hasSubNav &&
                      (this.state.isLvl2Open &&
                      this.state.activeLvl2 === navItem.id ? (
                        <FontAwesomeIcon
                          icon={fa.faAngleDown}
                          className="menu-arrow"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={fa.faAngleRight}
                          className="menu-arrow"
                        />
                      ))}
                  </div>
                </div>
              </button>
              {navItem.hasSubNav &&
                this.state.isLvl3Open &&
                this.renderLvl3(navItem, navItem.id)}
            </li>
          </ul>
        </div>
      ));
    }
  };
  showLvl1 = (navItem) => {
    this.setState({ activeParent: navItem.id }, () => {
      if (navItem.hasSubNav) {
        if (this.state.activeParent === navItem.id) {
          if (this.state.activeParent === this.state.currentOpenParentId) {
            this.setState({ isLvl1Open: !this.state.isLvl1Open });
          } else {
            this.setState({ isLvl1Open: true });
            this.setState({ currentOpenParentId: this.state.activeParent });
          }
        }
      } else {
        this.props.history.push(navItem.route);
      }
    });
  };
  renderLvl1 = (pNav, id) => {
    if (pNav && pNav.hasSubNav) {
      return pNav.subNavs.map((navItem, index) => (
        <div
          key={index}
          class={`collapse ${
            this.state.isLvl1Open && this.state.activeParent === id && "show"
          }`}
        >
          <ul class="nav flex-column sub-menu">
            <li
              key={index}
              class={`nav-item ${
                this.state.activeLvl1 === navItem.id && "active"
              }`}
            >
              <button
                key={navItem.id}
                class={`nav-link ${
                  this.state.isLvl1Open &&
                  this.state.activeLvl1 === navItem.id &&
                  "show"
                }`}
                onClick={() => this.showLvl2(navItem)}
              >
                <div className="row w-100 align-items-end">
                  <div className="col-md-1 px-0">
                    <FontAwesomeIcon
                      key={"navIcon" + navItem.id}
                      icon={fa[navItem.iconName]}
                      className="navIcons"
                    />
                  </div>
                  <div className="col-md-10 pl-3 text-left">
                    <span class="menu-title">{navItem.navText}</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    {navItem.hasSubNav &&
                      (this.state.isLvl2Open &&
                      this.state.activeLvl1 === navItem.id ? (
                        <FontAwesomeIcon
                          icon={fa.faAngleDown}
                          className="menu-arrow"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={fa.faAngleRight}
                          className="menu-arrow"
                        />
                      ))}
                  </div>
                </div>
              </button>
              {navItem.hasSubNav &&
                this.state.isLvl2Open &&
                this.renderLvl2(navItem, navItem.id)}
            </li>
          </ul>
        </div>
      ));
    }
  };
  render() {
    return this.props.navData.map((navItem, index) => {
      if (navItem.isParent) {
        return (
          <li
            key={index}
            class={`nav-item ${
              this.state.activeParent === navItem.id && "active"
            }`}
          >
            <button
              key={navItem.id}
              class={`nav-link ${
                this.state.isSubNavOpen &&
                this.state.activeParent === navItem.id &&
                "show"
              }`}
              onClick={() => this.showLvl1(navItem)}
            >
              <FontAwesomeIcon
                key={"navIcon" + navItem.id}
                icon={fa[navItem.iconName]}
                className="navIcons"
              />
              <span class="menu-title">{navItem.navText}</span>
              {navItem.hasSubNav &&
                (this.state.isLvl1Open &&
                this.state.activeParent === navItem.id ? (
                  <FontAwesomeIcon icon={fa.faMinus} className="menu-arrow" />
                ) : (
                  <FontAwesomeIcon icon={fa.faPlus} className="menu-arrow" />
                ))}
            </button>
            {navItem.hasSubNav &&
              this.state.isLvl1Open &&
              this.renderLvl1(navItem, navItem.id)}
          </li>
        );
      } else {
        return "";
      }
    });
  }
}

export default withRouter(NavItem);
