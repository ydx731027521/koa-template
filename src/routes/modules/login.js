const Router = require('koa-router');
const { login } = require('../../api/login');

const router = new Router();

router.get('/login', login);

module.exports = router;
