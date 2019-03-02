const upload = require('./upload');
const auth = require('./auth');

/**
 * 应用路由
 * @param {Koa} app 
 */
function applyRoutes(app) {
  app.use(upload.routes());
  app.use(auth.routes());
}

module.exports = applyRoutes;