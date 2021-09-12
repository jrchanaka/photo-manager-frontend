import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Home = React.lazy(() => import('./containers/home/Home'));

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" name="Home" render={props => <Home {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
