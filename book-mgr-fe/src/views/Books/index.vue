<template>
    <div>
       <a-card>
            <h2>设备列表</h2>
            <a-divider/>
            <space-between> 
                <div class="search"><a-input-search 
                placeholder="请输入设备名称"  
                enterButton="Search"
                 size="large"/>
                 </div>
            <a-button type="primary" 
            size="large"
            >添加一条</a-button></space-between>
            <a-divider/>
            <a-table
           :columns="columns"
           :data-source="dataSource"
           > 
            </a-table>
        </a-card>
    </div>
</template>
<script src="./index.js">
</script>
// scoped:防止污染
<style lang="scss" scoped>
@import "./index.scss";
</style>