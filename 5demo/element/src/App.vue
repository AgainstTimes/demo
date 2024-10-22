<script setup>
import {ElMessage, ElMessageBox, ElNotification} from 'element-plus'

// 消息
const openMsg = () => {
  ElMessage({
    type: 'success', // success | warning | info | error
    message: 'dengruicode.com',
    showClose: true
  })
}

// 确认框
const openConfirm = () => {
  ElMessageBox.confirm('确认删除?', '标题', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(() => {
    console.log('确认')
  }).catch(() => {
    console.log('取消')
  })
}

// 通知
const openNotify = () => {
  ElNotification({
    title: '标题',
    message: 'Akeelah',
    duration: 1500 // 展示时间 [单位:毫秒]
  })
}

// 通知2
const openNotify2 = () => {
  ElNotification({
    type: 'success', // success | warning | info | error
    title: '标题',
    message: 'Akeelah.com',
    duration: 1500,
    position: 'bottom-right'
  })
}

import {ref} from 'vue'

//默认选中的菜单索引
//const selectedIndex = ref("2-2")
const selectedIndex = ref("3")

//选中菜单触发的回调
const selected = (index, indexPath) => {
  console.log("index", index, "indexPath", indexPath)
}

//默认展开的菜单索引
const defaultOpeneds = ref(["1", "3"])

//用户执行的命令
const userCommand = (command) => { //点击菜单触发的回调
  console.log("command:", command)
}
</script>

<template>
  <h3>按钮</h3>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>

  <hr>
  <h3>按钮属性</h3>
  <el-button plain>朴素按钮</el-button>
  <el-button round>圆角按钮</el-button>
  <el-button circle>圆</el-button>
  <el-button disabled>禁用按钮</el-button>
  <el-button loading>加载中</el-button>

  <hr>
  <h3>尺寸</h3>
  <el-button size="large">大型按钮</el-button>
  <el-button>默认按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <hr>
  <hr>
  <h3>图标</h3>
  <el-icon>
    <Plus/>
  </el-icon>
  <el-icon>
    <Edit/>
  </el-icon>
  <el-icon>
    <Delete/>
  </el-icon>
  <el-icon class="is-loading">
    <Loading/>
  </el-icon>

  <hr>
  <h3>属性</h3>
  <el-icon size="30" color="red">
    <Search/>
  </el-icon>

  <hr>
  <h3>按钮</h3>
  <el-button type="primary">
    <el-icon>
      <Search/>
    </el-icon>
    <span> 搜索 </span>
  </el-button>

  <el-button type="primary">
    <el-icon>
      <Search/>
    </el-icon>
  </el-button>

  <el-button type="primary" circle>
    <el-icon>
      <Search/>
    </el-icon>
  </el-button>

  <hr>
  <h3>按钮组</h3>
  <el-button-group>
    <el-button type="primary">
      <el-icon>
        <Plus/>
      </el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon>
        <Edit/>
      </el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon>
        <Delete/>
      </el-icon>
    </el-button>
  </el-button-group>
  <hr>
  <hr>

  <el-button @click="openMsg">消息</el-button>
  <el-button @click="openConfirm">确认框</el-button>
  <el-button @click="openNotify">通知</el-button>
  <el-button @click="openNotify2">通知2</el-button>
  <hr>
  <hr>
  <h3>水平导航</h3>
  <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected">
    <el-menu-item index="1">Akeelah</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>


  <h3>水平导航-自定义样式</h3>
  <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#545c64"
           text-color="#fff" active-text-color="#ffd04b" style="height: 40px; width: 600px;">
    <el-menu-item index="1">Jessika</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>

  <h3>垂直导航</h3><br>
  <el-menu :default-active="selectedIndex" @select="selected" style="width: 200px;">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Search/>
        </el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Edit/>
      </el-icon>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Delete/>
      </el-icon>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <Setting/>
      </el-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>

  <h3>垂直导航-默认展开和自定义样式</h3>
  <el-menu :default-active="selectedIndex" @select="selected" :default-openeds="defaultOpeneds"
           background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 200px;">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Search/>
        </el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Edit/>
      </el-icon>
      <template #title>导航二</template>
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <Search/>
        </el-icon>
        <span>导航三</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon>
        <Setting/>
      </el-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>

  <h3>面包屑</h3>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
    <el-breadcrumb-item>
      <el-icon>
        <Plus/>
      </el-icon>
      Berserker
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <el-icon>
        <present/>
      </el-icon>
      Berserker.com
    </el-breadcrumb-item>
  </el-breadcrumb>

  <h3>下拉菜单</h3><br>
  <el-dropdown @command="userCommand">
            <span>
                个人中心<el-icon><User/></el-icon>
            </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="order">订单</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>

</style>
