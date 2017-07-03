import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/index/index';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/" component={IndexPage} />
//     </Router>
//   );
// }

const RouterConfig = function ({ history, app }) {
    const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/index/index'));
        });
      },
    },
    {
      path: '/test',
      name: 'testPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/test/index'));
        });
      },
    }
    ]

  return <Router history={history} routes={routes} />
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default RouterConfig;
