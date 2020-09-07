const Router = require('koa-router');
const { user } = require('../../api/user');

const router = new Router();

router.get('/user', user);

module.exports = router;
