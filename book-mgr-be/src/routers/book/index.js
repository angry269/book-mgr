const Router = require('@koa/router');
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const { getBody } = require('../../helpers/utils');
const BOOK_CONST = {
    IN: 'IN_COUNT',
    OUT: 'OUT_COUNT',
}
const router = new Router({
    prefix: '/book',
});
router.post('/add', async(ctx) => {
    const {
        name,
        price,
        producer,
        DateInProducer,
        classify,
        count,
    } = getBody(ctx);

    const book = new Book({
        name,
        price,
        producer,
        DateInProducer,
        classify,
        count,
    })
    const res = await book.save();
    ctx.body = {
        data: res,
        code: 1,
        msg: "添加成功",
    };
});

router.get('/list', async(ctx) => {
    const {
        page = 1,
            keyword = '',
    } = ctx.query;
    let = {
        size = 10,
    } = ctx.query;
    size = Number(size) //将字符串转化为数
    const query = {};
    //防止keyword为空
    if (keyword) {
        query.name = keyword;
    }
    const list = await Book
        .find(query)
        .skip((page - 1) * size)
        .limit(size)
        .exec();
    const total = await Book.countDocuments();
    ctx.body = {
        data: { total, list, page, size, },
        code: 1,
        msg: "获取列表成功",
    };
})
router.delete('/:id', async(ctx) => {
    const {
        id
    } = ctx.params;
    const delMsg = await Book.deleteOne({
        _id: id,
    });
    ctx.body = {
        data: delMsg,
        msg: "删除成功",
        code: 1,
    };
});
router.post('/update/count', async(ctx) => {
    const {
        id,
        type,
    } = ctx.request.body;
    let msg = "入库";
    let { num } = ctx.request.body; //let声明的式变量可以修改
    Number(num);
    const book = await Book.findOne({
        _id: id,
    }).exec();
    if (!book) {
        ctx.body = {
            code: 0,
            msg: '没有找到数据'
        }
        return;
    }
    if (type === BOOK_CONST.IN) {
        num = Math.abs(num);
    } else {
        num = -Math.abs(num);
        msg = "出库";
    }
    book.count = book.count + num;
    if (book.count < 0) {
        ctx.body = {
            code: 0,
            msg: '出库失败'
        }
        return;
    }
    const res = await book.save();
    ctx.body = {
        data: res,
        code: 1,
        msg: `${msg}成功`
    }
});
router.post('/update', async(ctx) => {
    const {
        id,
        ...others
    } = ctx.request.body;
    const one = await Book.findOne({
        _id: id,
    }).exec();
    if (!one) {
        ctx.body = {
            msg: "书籍不存在",
            code: 0,
        };
        return;
    }
    const newQuery = {};
    Object.entries(others).forEach(([key, value]) => {
        if (value) {
            newQuery[key] = value;
        }
    });
    Object.assign(one, newQuery);
    const res = await one.save();
    ctx.body = {
        data: res,
        msg: "修改成功",
        code: 1,
    };
});
module.exports = router;