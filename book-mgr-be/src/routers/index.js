const auth = require('./auth/index');
const InviteCode = require('./InviteCode/index');
//注册路由
module.exports = (app) => {
    app.use(auth.routes());
    app.use(InviteCode.routes());
}