const Koa = require('koa');
const app = new Koa();
app.use((context) => {
    const { request: req } = context;
    const { url } = req;
    if (url === '/user') {
        context.body = '<h1>hahahaha</h1>';
    }
});
app.listen(3000, () => {
    console.log('启动成功');
});