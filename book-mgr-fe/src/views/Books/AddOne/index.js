import { defineComponent, reactive } from 'vue'; //便于开发
import { book } from "@/service";
import { message } from 'ant-design-vue';
import { result, clone } from '@/helpers/utils';
const defaultFormData = {
    name: '',
    price: 0,
    producer: '',
    DateInProducer: 0,
    classify: '',
    count: 0,
}
export default defineComponent({
    props: {
        show: Boolean,
    },
    setup(props, context) {
        const addForm = reactive(clone(defaultFormData));
        const submit = async() => {
            const form = clone(addForm);
            form.DateInProducer = addForm.DateInProducer.valueOf();
            const res = await book.add(form.name, form.price, form.producer, form.DateInProducer, form.classify, form.count);
            result(res).success(({ data }) => {

                Object.assign(addForm, defaultFormData); //提交之后重置输入界面
                message.success(data.msg);
            });
        }
        const close = () => {
            context.emit("update:show", false);
        };
        return {
            addForm,
            submit,
            props,
            close,
        };
    },
})