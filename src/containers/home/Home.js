import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

import navigation from '../../config/navigations';
import routes from '../../config/routes';

const Footer = React.lazy(() => import('./footer'));
const Header = React.lazy(() => import('./header'));

class Home extends Component {
  loading() {
    return (<div className="animated fadeIn pt-1 text-center">Loading...</div>)
  }

  render() {
    return (
      <div className="app theme-orange">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <Header />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} router={router} />
            </Suspense>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <Footer />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default Home;
