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

import {ref, reactive} from 'vue'
import {Delete, Edit, Loading, Plus, Present, Setting, User} from "@element-plus/icons-vue";

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


//默认选中的标签名称
const selectedName = ref("2")

//选中标签触发的回调
const tabClick = (tab, event) => {
  console.log("tab", tab.props, "event", event)
}

const tab = reactive({
  arr: [
    {name: "1", title: 'Akeelah', content: '内容1'},
    {name: "2", title: 'Jessika', content: '内容2'},
    {name: "3", title: 'Berserker.com', content: '内容3'},
  ]
})

//添加
const tabAdd = () => {
  let index = tab.arr.length
  index++

  tab.arr.push({
    name: index,
    title: '新选项卡' + index,
    content: '内容' + index
  })
}

//移除
const tabRemove = (name) => {
  console.log("name:", name)

  const index = tab.arr.findIndex((value) => {
    return value.name === name
  })

  tab.arr.splice(index, 1) //移除元素
}


const name = ref('')
const password = ref('')
const content = ref('Jessika')
const url = ref('Akeelah.com')
const url2 = ref('Berserker')
const email = ref('123456')
const selected1 = ref('2')


//单选框
const radio = ref("3")
const radio2 = ref("b")
const radio3 = ref("C")

const radioChange = (val) => {
  console.log("radioChange:", val)
}

const radioGroupChange = (val) => {
  console.log("radioGroupChange:", val)
}

//复选框
const checked = ref(["1", "2"])
const checked2 = ref([])

const checkboxGroupChange = (val) => {
  console.log("checkboxGroupChange", val)
}


const selected11 = ref('2')
const selected2 = ref('')
const selected3 = ref('C')
const selected4 = ref(['A', 'C'])

const data = reactive({
  options: [
    {value: 'A', label: '前端',},
    {value: 'B', label: '后端',},
    {value: 'C', label: '服务端',}
  ]
})

//回调
const selectChange = (val) => {
  console.log("selectChange:", val)
}


const date = ref('')

const dateChange = (val) => {
  console.log("dateChange:", val)
}

const data1 = ref({
  name: '',
  radio: '',
  checkbox: [],
  date: '',
  select: '',
  multipleSelect: [],
  textarea: ''
})

const add = () => {
  console.log(data1.value)
}

const reset = () => {
  data.value = {
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
  }
}


const data111 = ref({
  name: '',
  radio: '',
  checkbox: [],
  date: '',
  select: '',
  multipleSelect: [],
  textarea: ''
})

const add111 = () => {
  console.log(data111.value)
}

const reset111 = () => {
  data111.value = {
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
  }
}

//对话框
const dialog = ref(false)

const dialogClose = () => {
  console.log("关闭")
}

const currentPage = (val) => {
  console.log("currentPage:", val)
}


const data222 = ref({
  arr: [
    {id: '1', name: 'Akeelah', web: 'Akeelah.com', date: '2023-06-20'},
    {id: '2', name: 'Jessika', web: 'www.Jessika.com', date: '2023-06-21'},
    {id: '3', name: 'Berserker', web: 'Berserker.com', date: '2023-06-22'},
    {id: '4', name: 'Adam', web: 'www.Adam.com', date: '2023-06-22'}
  ]
})

//选中的复选框
let idArr = []
const selected222 = (data222) => {
  //console.log("selected", data)

  idArr = [] //重置

  data222.forEach((value) => {
    idArr.push(value.id)
  })

  console.log("idArr:", idArr)
}

//删除
const del = () => {
  console.log("del:", idArr)
}

//编辑
const edit = (index, row) => {
  console.log("index:", index, "row:", row)
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
    <el-icon-search/>
  </el-icon>

  <hr>
  <h3>按钮</h3>
  <el-button type="primary">
    <el-icon>
      <el-icon-search/>
    </el-icon>
    <span> 搜索 </span>
  </el-button>

  <el-button type="primary">
    <el-icon>
      <el-icon-search/>
    </el-icon>
  </el-button>

  <el-button type="primary" circle>
    <el-icon>
      <el-icon-search/>
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
          <el-icon-search/>
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
          <el-icon-search/>
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
          <el-icon-search/>
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
  <hr>
  <hr>

  <h3>标签页</h3>
  <el-tabs v-model="selectedName" @tab-click="tabClick">
    <el-tab-pane label="Akeelah" name="1">内容1</el-tab-pane>
    <el-tab-pane label="Jessika" name="2">内容2</el-tab-pane>
    <el-tab-pane label="Akeelah.com" name="3">内容3</el-tab-pane>
  </el-tabs>

  <h3>卡片风格</h3>
  <el-tabs v-model="selectedName" @tab-click="tabClick" type="card">
    <el-tab-pane label="Akeelah" name="a">内容1</el-tab-pane>
    <el-tab-pane label="Jessika" name="b">内容2</el-tab-pane>
    <el-tab-pane label="Jessika.com" name="c">内容3</el-tab-pane>
  </el-tabs>

  <h3>带有边框的卡片风格</h3>
  <el-tabs v-model="selectedName" @tab-click="tabClick" type="border-card">
    <el-tab-pane label="Berserker" name="A">内容1</el-tab-pane>
    <el-tab-pane label="Adam" name="B">内容2</el-tab-pane>
    <el-tab-pane label="Berserker.com" name="C">内容3</el-tab-pane>
  </el-tabs>

  <h3>动态添加</h3>
  <el-button @click="tabAdd">添加</el-button>

  <el-tabs v-model="selectedName" @tab-remove="tabRemove" closable type="card">
    <el-tab-pane v-for="(value) in tab.arr" :key="value.name" :label="value.title" :name="value.name">
      {{ value.content }}
    </el-tab-pane>
  </el-tabs>
  <hr>
  <hr>

  <div style="width: 300px" >
    <el-icon>
      <el-icon-search />
    </el-icon>
    <!-- clearable 可一键清空 -->
    <h3>输入框</h3>
    <el-input v-model="name" clearable placeholder="请输入用户名"/>

    <!-- show-password 可切换显示隐藏密码 -->
    <h3>密码框</h3>
    <el-input v-model="password" show-password placeholder="请输入密码"/>

    <h3>文本域</h3>
    <el-input type="textarea" v-model="content" rows:2/>

    <h3>输入内容长度限制 - 输入框</h3>
    <el-input v-model="name" maxlength="10" show-word-limit/>

    <h3>输入内容长度限制 - 文本域</h3>
    <el-input type="textarea" v-model="content" maxlength="20" rows:3 show-word-limit/>

    <h3>尺寸</h3>
    大
    <el-input size="large"/>
    默认
    <el-input/>
    小
    <el-input size="small"/>

    <h3>前置</h3>
    <el-input v-model="url">
      <template #prepend>https://</template>
    </el-input>

    <h3>后置</h3>
    <el-input v-model="email">
      <template #append>@qq.com</template>
    </el-input>

    <h3>前置后置</h3>
    <el-input v-model="url2">
      <template #prepend>https://</template>
      <template #append>.com</template>
    </el-input>

    <h3>前置后置扩展 - 搜索</h3>
    <el-input placeholder="请输入课程名称">
      <template #prepend>
        <el-select v-model="selected1" placeholder="请选择" style="width: 100px;">
          <el-option label="前端" value="1"/>
          <el-option label="后端" value="2"/>
          <el-option label="服务端" value="3"/>
        </el-select>
      </template>
      <template #append>
        <el-button>
          <el-icon>
            <el-icon-search/>
          </el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
  <hr>
  <hr>


  <h3>单选框</h3>
  <el-radio v-model="radio" value="1">前端</el-radio>
  <el-radio v-model="radio" value="2">后端</el-radio>
  <el-radio v-model="radio" value="3">服务端</el-radio>

  <h3>单选框 - 事件绑定</h3>
  <el-radio v-model="radio2" value="a" @change="radioChange">前端</el-radio>
  <el-radio v-model="radio2" value="b" @change="radioChange">后端</el-radio>
  <el-radio v-model="radio2" value="c" @change="radioChange">服务端</el-radio>

  <h3>单选框组</h3>
  <el-radio-group v-model="radio3" @change="radioGroupChange">
    <el-radio value="A">前端</el-radio>
    <el-radio value="B">后端</el-radio>
    <el-radio value="C">服务端</el-radio>
  </el-radio-group>

  <h3>复选框</h3>
  <el-checkbox-group v-model="checked">
    <el-checkbox value="1">前端</el-checkbox>
    <el-checkbox value="2">后端</el-checkbox>
    <el-checkbox value="3">服务端</el-checkbox>
  </el-checkbox-group>

  <h3>事件绑定</h3>
  <el-checkbox-group v-model="checked2" @change="checkboxGroupChange">
    <el-checkbox value="1">前端</el-checkbox>
    <el-checkbox value="2">后端</el-checkbox>
    <el-checkbox value="3">服务端</el-checkbox>
  </el-checkbox-group>
  <hr>
  <hr>

  <div style="width: 300px;">
    <h3>下拉框</h3>
    <el-select v-model="selected11" placeholder="请选择">
      <el-option value="1" label="前端"/>
      <el-option value="2" label="后端"/>
      <el-option value="3" label="服务端"/>
    </el-select>

    <h3>下拉框 - 事件绑定</h3>
    <el-select v-model="selected2" @change="selectChange" placeholder="请选择">
      <el-option value="a" label="前端"/>
      <el-option value="b" label="后端"/>
      <el-option value="c" label="服务端"/>
    </el-select>

    <h3>动态下拉框</h3>
    <el-select v-model="selected3" placeholder="请选择">
      <el-option v-for="item in data.options"
                 :value="item.value"
                 :label="item.label"
                 :key="item.value"/>
    </el-select>

    <h3>多选 - multiple</h3>
    <el-select v-model="selected4" multiple @change="selectChange" placeholder="请选择">
      <el-option v-for="item in data.options"
                 :value="item.value"
                 :label="item.label"
                 :key="item.value"/>
    </el-select>
  </div>
  <hr>
  <hr>


  <h3>日期</h3>
  <el-date-picker v-model="date" type="date" placeholder="请选择"/>

  <h3>日期时间</h3>
  <el-date-picker v-model="date" type="datetime" placeholder="请选择"/>

  <h3>事件绑定</h3>
  <el-date-picker v-model="date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" @change="dateChange"/>
  <hr>
  <hr>


  <el-form label-width="80" style="width: 400px;">
    <el-form-item label="文本框">
      <el-input v-model="data1.name" placeholder="请填写名称"/>
    </el-form-item>

    <el-form-item label="单选框">
      <el-radio-group v-model="data1.radio">
        <el-radio value="1">前端</el-radio>
        <el-radio value="2">后端</el-radio>
        <el-radio value="3">服务端</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="复选框">
      <el-checkbox-group v-model="data1.checkbox">
        <el-checkbox value="a">前端</el-checkbox>
        <el-checkbox value="b">后端</el-checkbox>
        <el-checkbox value="c">服务端</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="日期时间">
      <el-date-picker v-model="data1.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"/>
    </el-form-item>

    <el-form-item label="下拉框">
      <el-select v-model="data1.select" placeholder="请选择">
        <el-option value="A" label="前端"/>
        <el-option value="B" label="后端"/>
        <el-option value="C" label="服务端"/>
      </el-select>
    </el-form-item>

    <el-form-item label="多选框">
      <el-select v-model="data1.multipleSelect" multiple placeholder="请选择">
        <el-option value="AA" label="前端"/>
        <el-option value="BB" label="后端"/>
        <el-option value="CC" label="服务端"/>
      </el-select>
    </el-form-item>

    <el-form-item label="文本域">
      <el-input type="textarea" v-model="data1.textarea" rows:2 placeholder="请填写内容"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <hr>
  <hr>


  <el-button @click="dialog = true">打开</el-button>

  <!-- draggable 允许拖拽 -->
  <el-dialog v-model="dialog" width="500" title="标题" draggable @close="dialogClose">
    <el-form label-width="80">
      <el-form-item label="文本框">
        <el-input v-model="data111.name" placeholder="请填写名称"/>
      </el-form-item>

      <el-form-item label="单选框">
        <el-radio-group v-model="data111.radio">
          <el-radio value="1">前端</el-radio>
          <el-radio value="2">后端</el-radio>
          <el-radio value="3">服务端</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="复选框">
        <el-checkbox-group v-model="data111.checkbox">
          <el-checkbox value="a">前端</el-checkbox>
          <el-checkbox value="b">后端</el-checkbox>
          <el-checkbox value="c">服务端</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="日期时间">
        <el-date-picker v-model="data111.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"/>
      </el-form-item>

      <el-form-item label="下拉框">
        <el-select v-model="data111.select" placeholder="请选择">
          <el-option value="A" label="前端"/>
          <el-option value="B" label="后端"/>
          <el-option value="C" label="服务端"/>
        </el-select>
      </el-form-item>

      <el-form-item label="多选框">
        <el-select v-model="data111.multipleSelect" multiple placeholder="请选择">
          <el-option value="AA" label="前端"/>
          <el-option value="BB" label="后端"/>
          <el-option value="CC" label="服务端"/>
        </el-select>
      </el-form-item>

      <el-form-item label="文本域">
        <el-input type="textarea" v-model="data111.textarea" rows:2 placeholder="请填写内容"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add111">添加</el-button>
        <el-button @click="reset111">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <hr>
  <hr>


  <h3>page-size:每页显示记录数 total:总记录数</h3>
  <el-pagination layout="prev, pager, next" :page-size="10" :total="50"/>

  <h3>background:显示背景</h3>
  <el-pagination layout="prev, pager, next,total" :page-size="5" :total="50" background/>

  <h3>layout="total" 显示总数</h3>
  <el-pagination layout="prev, pager, next, total" :page-size="5" :total="50"/>

  <h3>layout="jumper" 跳转</h3>
  <el-pagination layout="prev, pager, next, jumper, total" :page-size="5" :total="50"/>

  <h3>事件绑定</h3>
  <el-pagination layout="prev, pager, next" :page-size="5" :total="50" @current-change="currentPage"/>
  <hr>
  <hr>


  <h3>表格</h3>
  <el-table :data="data222.arr" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="web" label="网站" width="300"/>
    <el-table-column prop="date" label="日期"/>
  </el-table>

  <h3>带边框表格</h3>
  <el-table :data="data222.arr" border style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="web" label="网站" width="300"/>
    <el-table-column prop="date" label="日期"/>
  </el-table>

  <h3>设置高度固定表头</h3>
  <el-table :data="data222.arr" border height="120" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="web" label="网站" width="300"/>
    <el-table-column prop="date" label="日期"/>
  </el-table>

  <h3>type="selection" 多选</h3>
  <el-table :data="data222.arr" border style="width: 800px;">
    <el-table-column type="selection" width="55"/>

    <el-table-column prop="id" label="编号" width="80"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="web" label="网站" width="300"/>
    <el-table-column prop="date" label="日期"/>
  </el-table>

  <h3>按钮</h3>
  <el-button type="primary" @click="del">删除</el-button>

  <el-table :data="data222.arr" @selection-change="selected222" border style="width: 900px;margin: 3px 0;">
    <el-table-column type="selection" width="55"></el-table-column>

    <el-table-column prop="id" label="编号" width="80"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="web" label="网站" width="300"/>
    <el-table-column prop="date" label="日期"/>

    <el-table-column label="操作" width="150">
      <template #default="scope">
        <el-button size="small" type="primary" @click="edit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next, jumper, total" :page-size="5" :total="50"/>
</template>

<style scoped>

</style>
