import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailFilled } from "@ant-design/icons-vue";
import { auth } from '@/service';
import { message } from 'ant-design-vue';
import { result } from "@/helpers/utils"
export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
        MailFilled,
    },
    setup() {
        //注册表单
        const regForm = reactive({
            account: '',
            password: '',
            inviteCode: '',
        });
        const register = async() => {
                if (regForm.account === '') {
                    message.info('账户不能为空');
                    return;
                }
                if (regForm.password === '') {
                    message.info('密码不能为空');
                    return;
                }
                if (regForm.inviteCode === '') {
                    message.info('邀请码不能为空');
                    return;
                }
                const res = await auth.register(regForm.account,
                    regForm.password,
                    regForm.inviteCode);
                result(res).success((data) => {
                    message.success(data.msg);
                });
            }
            //登录表单
            //reqctive:响应式数据
        const loginForm = reactive({
            account: '',
            password: '',
        });
        //登录逻辑
        const login = async() => {
            if (loginForm.account === '') {
                message.info('账户不能为空');
                return;
            }
            if (loginForm.password === '') {
                message.info('密码不能为空');
                return;
            }
            const { data } = await auth.login(loginForm.account, loginForm.password);
            if (data.code) {
                message.success(data.msg);
                return;
            }
            message.error(data.msg);
        }
        return {
            //注册数据
            regForm,
            register,
            //登录数据
            loginForm,
            login,
        };
    },
});