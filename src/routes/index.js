import CombineRouters from 'koa-combine-routers';

import loginRoute from './modules/login';
import userRoute from './modules/user';
import demoRoute from './modules/demo';

module.exports = CombineRouters(
  loginRoute,
  userRoute,
  demoRoute
);
