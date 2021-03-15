import { defineComponent, reactive, watch } from 'vue'; //便于开发
import { book } from "@/service";
import { message } from 'ant-design-vue';
import { result, clone } from '@/helpers/utils';
import moment from "moment";
export default defineComponent({
    props: {
        show: Boolean,
        book: Object,
    },
    setup(props, context) {
        const editForm = reactive({
            name: '',
            price: 0,
            producer: '',
            DateInProducer: 0,
            classify: '',
            count: 0,
        });
        watch(() => props.book, (current) => {
            Object.assign(editForm, current);
            editForm.DateInProducer = moment(Number(editForm.DateInProducer))
        });

        const close = () => {
            context.emit("update:show", false);
        };
        const submit = async() => {
            const res = await book.update({
                id: props.book._id,
                name: editForm.name,
                price: editForm.price,
                producer: editForm.producer,
                DateInProducer: editForm.DateInProducer.valueOf(),
                classify: editForm.classify,
            });
            result(res).success(({ data, msg }) => {
                context.emit('update', data);
                message.success(msg)
                close();
            });
        };
        return {
            editForm,
            submit,
            props,
            close,
        };
    },
})