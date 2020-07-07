<template>
  <div id="app">
    <h2>测试table组件</h2>
    <vue-element-table-will
      :tableConfiguration="tableConfig"
    ></vue-element-table-will>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tableConfig: {
        pageData: {
          // 数据总数
          total: 0,
          // 当前页数
          pageNum: 1,
          // 每页显示多少条
          pageSize: 10
        },
        // 列表栏
        tableList: [
          { prop: "name", label: "姓名" },
          { prop: "age", label: "年龄" },
          {
            prop: "sex",
            label: "性别"
          }
        ],
        // 列表数据
        tableData: [
          {
            name: "张三",
            age: 18,
            sex: "男"
          },
          {
            name: "李四",
            age: 28,
            sex: "女"
          },
          {
            name: "王五",
            age: 18,
            sex: "未知"
          }
        ],
        operationWidth: 200,
        btnDescribe: "管理",
        // 操作
        operationList: [
          {
            type: "流程图",
            color: "info",
            fun: data => {
              this.instId = data.instId;
              this.$refs.FlowChart.show();
            }
          },
          {
            type: "办理",
            color: "primary",
            fun: data => {
              console.log(data);
              let per = { taskId: data.id, instId: data.instId };
              this.handleTaskStart(per);
            }
          }
        ],
        IsIndex: false
      }
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
