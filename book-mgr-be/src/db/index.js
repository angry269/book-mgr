const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number,
});
const UserModel = mongoose.model('User', UserSchema);
const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr'); //连接数据库
    mongoose.connection.on('open', () => {
        console.log('连接成功');
        const user = UserModel({
            nickname: 'xiaoming',
            password: '123456',
            age: 89,
        });
        user.save();
    });
};
connect();