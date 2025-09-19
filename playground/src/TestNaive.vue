<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Naive UI 按需导入测试</h1>
    
    <!-- 测试按钮组件 -->
    <div class="mb-4">
      <n-button type="primary" class="mr-2">Primary Button</n-button>
      <n-button type="success" class="mr-2">Success Button</n-button>
      <n-button type="warning" class="mr-2">Warning Button</n-button>
      <n-button type="error">Error Button</n-button>
    </div>
    
    <!-- 测试输入框组件 -->
    <div class="mb-4">
      <n-input v-model:value="inputValue" placeholder="请输入内容" class="max-w-xs" />
      <p class="mt-2">输入值: {{ inputValue }}</p>
    </div>
    
    <!-- 测试消息组件 -->
    <div class="mb-4">
      <n-button @click="showMessage">显示消息</n-button>
    </div>
    
    <!-- 测试表格组件 -->
    <div class="mb-4">
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useMessage } from 'naive-ui'

// 输入框值
const inputValue = ref('')

// 消息
const message = useMessage()

// 显示消息
const showMessage = () => {
  message.success('这是来自 Naive UI 的成功消息！')
}

// 表格列
const columns = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '年龄',
    key: 'age'
  },
  {
    title: '地址',
    key: 'address'
  }
]

// 表格数据
const tableData = ref([
  {
    key: 0,
    name: '张三',
    age: 32,
    address: '北京市朝阳区'
  },
  {
    key: 1,
    name: '李四',
    age: 46,
    address: '上海市浦东新区'
  },
  {
    key: 2,
    name: '王五',
    age: 28,
    address: '广州市天河区'
  }
])

// 分页
const pagination = {
  pageSize: 10
}
</script>