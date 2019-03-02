const Koa = require('koa');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const applyRoutes = require('./routes');
const config = require('./config');

const app = new Koa();

app.use(koaBody({
  multipart: true
}));

applyRoutes(app);

app.use(koaStatic('static', {
  // maxage: 30 * 24 * 60 * 60 * 1000
}));

app.listen(config('port'), () => {
  console.log(`🚀 Server ready at http://localhost:${config('port')}`);
});