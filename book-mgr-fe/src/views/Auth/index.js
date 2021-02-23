import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailFilled } from "@ant-design/icons-vue";
import { auth } from '@/service';
export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
        MailFilled,
    },
    setup() {
        const regForm = reactive({
            account: '',
            password: '',
        });
        const register = () => {
            auth.register(regForm.account, regForm.password);
        }
        return {
            regForm,
            register
        };
    },
});