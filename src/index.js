import Koa from 'koa';
import Body from 'koa-body';
import Cors from '@koa/cors';
import Json from 'koa-json';
import Static from 'koa-static';
import KoaHelMet from 'koa-helmet';
import path from 'path';
import Compose from 'koa-compose';
import Compress from 'koa-compress';

import router from './routes';

const isDev = process.env.NODE_ENV === 'production' ? true : false;

const app = new Koa();
const middleware = Compose([
  KoaHelMet(),
  Body(),
  Cors(),
  Json({ pretty: false, param: 'pretty' }),
  Static(path.join(__dirname, '../public')),
])

if (!isDev) {
  app.use(Compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);

