const auth = require('./auth');
const InviteCode = require('./InviteCode');
const book = require('./book');
//注册路由
module.exports = (app) => {
    app.use(auth.routes());
    app.use(InviteCode.routes());
    app.use(book.routes());
}