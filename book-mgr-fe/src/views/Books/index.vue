<template>
    <div>
       <a-card>
            <h2>设备列表</h2>
            <a-divider/>
            <space-between> 
                <div class="search"><a-input-search 
                placeholder="请输入设备名称"  
                enterButton="Search"
                 size="large"
                 v-model:value="keyword"
                 @search="onSearch"
                 />
                 <!-- href设置为JavaScript，防止用户点击后后跳转 -->
                 <a v-if="isSearch" href="javascript:;" @click="backAll">返回</a>
                 </div>
            <a-button type="primary" size="large" @click="show=true">添加一条</a-button>
            </space-between>
            <a-divider/>
            <a-table :columns="columns" :data-source="list" :pagination="false"> 
                <template #DateInProducer="data">
                    {{formatTimestamp(data.record.DateInProducer)}}
                </template>
                <template #count="data">
                    <a href="javascript:;" @click="updateCount('IN_COUNT',data.record)">入库</a>
                   {{data.record.count}}
                   <a href="javascript:;" @click="updateCount('OUT_COUNT',data.record)">出库</a>
                </template>
                <template #actions="record">
                  <a href="javascript:;" @click="update(record)">编辑</a>
                    &nbsp
                   <a href="javascript:;" @click="remove(record)">删除</a>
                </template>
            </a-table>     
             <space-between style='margin-top:24px'> <!--两端对齐 -->
             <div/> 
                <a-pagination
                v-model:current="curPage"
                :total="total"
                :page-size='10'
                @change="setPage"
                />
            </space-between>
            
        </a-card>
        <add-one
        v-model:show="show"
        />
         <update 
        v-model:show="showUpdateModal"
        :book="curEditBook"
        @update="updateCurBook"
        />
    </div>
</template>
<script src="./index.jsx">
</script>
// scoped:防止污染
<style lang="scss" scoped>
@import "./index.scss";
</style>