<template>
    <div class="basic-layout">
        <div class="app-header">
           <div class="left">
               <div class="title">设备管理系统</div>
           </div>
           <div class="right">
               <div class="hello-msg">你好，xxx</div>
               <div class="logout">退出</div>
           </div>
        </div>
        <div class="app-header-placleholder"></div>
         <div class="app-context">
            <div class="left">
               <app-nav />
            </div>
           <div class="right">
              <router-view />
            </div>
        </div>
    </div>
</template>
<script src='./index.js'></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>