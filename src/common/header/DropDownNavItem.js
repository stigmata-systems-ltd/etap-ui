import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { logout } from "../../utils/auth";
import { withRouter } from 'react-router-dom';
import { NonceProvider } from 'react-select';

class DropDownNavItem extends Component {
  getOnClickFunc = ({ navText }) => {
    if (navText === 'Profile') {
      this.props.history.push('/profile');
    } else if (navText === 'Logout') {
      logout(this.props.history);
      this.props.history.push('/login');
    } 
  };

  render() {
    return this.props.navData.map(navItem => (
      <button
        class="dropdown-item"
        onClick={() => {
          this.getOnClickFunc(navItem);
          
          }}
      >
        <FontAwesomeIcon
          key={'navIcon' + navItem.id}
          icon={fa[navItem.iconName]}
          className="navIcons mdi mdi-settings text-primary drop-down-icon"
        />
        {navItem.navText}
      </button>
    ));
  }
}

export default withRouter(DropDownNavItem);
