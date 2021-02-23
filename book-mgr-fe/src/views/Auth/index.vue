<template>
    <div class="auth">
         <div class="title-info">
            <img src="" alt="">
            <div class="title">设备管理系统 后台</div>
        </div>
        <div class="form">
            <a-tabs>
    <a-tab-pane key="1" tab="登录">
        <div class="item">
            <a-input placeholder="请输入用户名">
                  <template v-slot:prefix>
                 <UserOutlined />
                </template>
            </a-input>
        </div>
         <div class="item">
            <a-input placeholder="请输入密码">
                <template v-slot:prefix>
                 <LockOutlined />
                </template>
            </a-input>
        </div>
         <div class="item">
            <a href="">忘记密码</a>
        </div>
        <div class="item">
            <a-button type="primary">登录</a-button>
        </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="注册">
         <div class="item">
            <a-input 
            size="large"
            placeholder="请输入注册用户名" 
            v-model:value="regForm.account">  
                <template v-slot:prefix>
                 <UserOutlined />
                </template>
            </a-input>
           
        </div>
        <div class="item">
            <a-input placeholder="请输入注册密码"
            v-model:value="regForm.password">
                 <template v-slot:prefix>
                 <LockOutlined />
                </template>
            </a-input>
        </div>
         <div class="item">
            <a-input placeholder="请输入邀请码">
                   <template v-slot:prefix>
                 <MailFilled />
                </template>
            </a-input>
        </div>
         <div class="item">
            <a-button type="primary" 
            size="large"
            @click="register"
            >注册</a-button>
        </div>
        </a-tab-pane>
  </a-tabs>
        </div>
    </div>
   
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import './index.scss';
</style>