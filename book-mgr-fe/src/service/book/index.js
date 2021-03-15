import axios from 'axios';

export const add = (
    name,
    price,
    producer,
    DateInProducer,
    classify, count) => {
    return axios.post('http://localhost:3000/book/add', {
        name,
        price,
        producer,
        DateInProducer,
        classify,
        count,
    });
};
//获取列表的接口
export const list = (data) => {
    return axios.get('http://localhost:3000/book/list', {
        params: data,
    }, );
};
export const remove = (id) => {
    return axios.delete(`http://localhost:3000/book/${id}`, );
};
export const updateCount = (data = {}) => {
    return axios.post(`http://localhost:3000/book/update/count`, data);
};
export const update = (data = {}) => {
    return axios.post(`http://localhost:3000/book/update`, data);
};