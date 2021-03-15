<template>
    <div>
        <a-modal
      title="添加设备"
      :visible="props.show"
      @ok="submit"
      @cancel="close">
      <a-form :label-col="{span :6}" >
    <a-form-item label="名称" >
      <a-input v-model:value="addForm.name" />
    </a-form-item>
     <a-form-item label="价格" >
          <a-input-number v-model:value="addForm.price" :min="0" :max="999999" />
    </a-form-item>
     <a-form-item label="厂家"  >
      <a-input  v-model:value="addForm.producer"/>
    </a-form-item>
     <a-form-item label="生产日期"  >
     <a-date-picker v-model:value="addForm.DateInProducer"/>
     
    </a-form-item>
     <a-form-item label="种类"  >
      <a-input  v-model:value="addForm.classify"/>
    </a-form-item>
     <a-form-item label="入库数"  >
       <a-input-number v-model:value="addForm.count" :min="0" :max="999999" />
    </a-form-item>
  </a-form>
        </a-modal>
    </div>
</template>
<script src='./index.js'>

</script>