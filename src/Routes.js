import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import detail from "./Pages/Detail";

class Routes extends React.Component {
    render() {
      return (
          <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Detail" component={detail} />
          </Switch>
        </Router>
      );
    }
  }

  export default Routes;