import { defineComponent, ref, onMounted,  } from 'vue';
import { book } from '@/service';
import { message, Modal ,Input} from "ant-design-vue";
import { result, formatTimestamp } from "@/helpers/utils";
import AddOne from "./AddOne/index.vue";
import Update from "./Update/index.vue";
export default defineComponent({
    //注册组件
    components: {
        AddOne,
        Update,
    },
    setup() {
        const columns = [{
                title: "名字",
                dataIndex: "name",
            }, {
                title: "价格",
                dataIndex: "price",

            },
            {
                title: "厂家",
                dataIndex: "producer",

            },
            {
                title: "生产日期",
                dataIndex: "DateInProducer",
                slots: {
                    customRender: 'DateInProducer',
                }

            },
            {
                title: "分类",
                dataIndex: "classify",

            },
            {
                title: "库存",
                slots: {
                    customRender: 'count',
                }

            },
            {
                title: "操作",
                slots: {
                    customRender: 'actions',
                }

            },
        ];
        const curPage = ref(1); //ref:相应式数据
        const show = ref(false);
        const total = ref(0);
        const list = ref([]);
        const keyword = ref('');
        const isSearch = ref(false) //标记搜索状态
        const showUpdateModal=ref(false);
        const curEditBook=ref({});
            //组件被挂载时执行
        const getList = async() => {
            const res = await book.list({
                page: curPage.value,
                size: 10,
                keyword: keyword.value,
            });
            result(res).
            success(({ data: { list: l, total: t } }) => {
                list.value = l;
                total.value = t;
            });
        }
        onMounted(async() => {
            getList();
        });
        const setPage = (page) => {
            curPage.value = page;
            getList();
        }
        const onSearch = () => {
            //如果关键字为空，不显示返回键
            isSearch.value = Boolean(keyword.value);
            getList();

        };
        const backAll = () => {
                keyword.value = '';
                isSearch.value = false;
                getList();
            }
            //删除逻辑
        const remove = async({ text: record }) => {
            const { _id } = record;
            const res = await book.remove(_id);
            result(res).success(({ msg }) => {
                message.success(msg);
                getList();
            })
        }
        const updateCount = (type,record) => {
            
            let word="入库";
            if(type==='OUT_COUNT'){
                word="出库";
            }
            Modal.confirm({
                title: `${word}多少库存`,
                content:(<div>
                    <Input class="__book_input_count" />
                </div>),
                onOk:async()=>{
                   const el=  document.querySelector('.__book_input_count');
                   let num=el.value;
                   const res= await book.updateCount({
                       id:record._id,
                       num,
                       type,
                   });
                   result(res).success((data)=>{
                       const one=list.value.find((item)=>{
                            return item._id===record._id;
                       })
                       if (type ==='IN_COUNT' ) {
                        num = Math.abs(num);
                    } else {
                        num = -Math.abs(num);
                    }
                       if(one){
                           one.count=one.count+num;
                           message.success(`成功${word}`)
                       }
                   })
                }
            })
        }
        const update=({record})=>{
            showUpdateModal.value=true;
            curEditBook.value=record;
        };
        const updateCurBook=(newDate)=>{
            Object.assign(curEditBook.value, newDate);
        };
        return {
            columns,
            show,
            list,
            formatTimestamp,
            curPage,
            total,
            setPage,
            keyword,
            onSearch,
            backAll,
            isSearch,
            remove,
            updateCount,
            showUpdateModal,
            update,
            curEditBook,
        updateCurBook,
            
        }
    }
});