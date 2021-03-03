import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const columns = [{
            title: "mingzi",
            dataIndex: "name",
        }, {
            title: "nianling",
            dataIndex: "age",

        }, ];
        const dataSource = [{
            name: 'red',
            age: 13
        }];
        return {
            columns,
            dataSource,
        }
    }
});