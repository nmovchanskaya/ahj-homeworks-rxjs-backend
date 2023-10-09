const combineRouters = require('koa-combine-routers');

const index = require('./index/index.js');
const messages = require('./messages/unread.js');

const router = combineRouters(
  index,
  messages
);

module.exports = router;
