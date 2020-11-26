import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';

//Pages Import
import CreateStructure from './container/structure/createStructure';
import AddUsers from './container/users/addUsers';

// import CreateComponent from './container/component/createComponent';
// import ViewStructure from './container/structure/viewStructure';
// import ViewComponent from './container/component/viewComponent';

import unauthorized from './common/Unauthorized';
// import { setRespInterceptor, setAuthHeader } from './utils/auth';
// setAuthHeader();
// setRespInterceptor();
class App extends Component {
  // constructor() {
  //   super()
  //   setInterceptor();
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/masters/createComponent"
            component={CreateStructure}
          ></Route>
          <Route
            exact
            path="/masters/createStructure"
            component={CreateStructure}
          ></Route>
          <Route
            exact
            path="/masters/addUsers"
            component={AddUsers}
          ></Route>
          <Route exact path="/unauthorized" component={unauthorized} />
        </Switch>
      </Router>
    );
  }
}

export default App;
