import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ServerContext, OSContext, AppContext } from "app";
import { UISample } from "sample";

export class UIApplication extends React.Component<{}, {}> {
  appContext: AppContext;
  constructor(props: any) {
    super(props);
    let serverCtx = new ServerContext('localhost', 'http://localhost:3000', 'http://localhost:3000');
    let osContext = new OSContext(this, serverCtx);
    this.appContext = new AppContext(this, osContext);
  }
  render() {
    return (<UISample appContext={this.appContext} />);
    //return (<div>Test</div>);
  }
}

function AutoAuthRoute() {
  let router = (
    <Router>
      <Switch>
        <Route path="/" component={UIApplication} />
      </Switch>
    </Router>
  );
  return router;
}

ReactDOM.render(<AutoAuthRoute />, document.getElementById('app'));
