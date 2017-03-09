import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import ReactGA from 'react-ga';

import Config from 'Config';

/*
    Pages
*/

import App from 'App';
import Home from 'pages/Home';
import Competition from 'pages/Competition';
import PageNotFound from 'pages/PageNotFound';

import ExampleComponent from 'pages/ExampleComponent';
import ExampleTwoDeepComponent from 'pages/ExampleTwoDeepComponent';

import 'file-loader?name=page.js!page.js';
import 'file-loader?name=typeform.js!typeform.js';
import 'styles/styles.less';
import 'font/hackicon.font';

ReactGA.initialize(Config.tracking_id);


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />
    <Route path="competition" mapMenuTitle="Competition" component={Competition} />

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(
  <Router
    history={browserHistory}
    routes={routes}
    onUpdate={logPageView}
  />,
  document.getElementById('root')
);
