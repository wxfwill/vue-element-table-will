# 使用说明

> 基于vue和element-ui的table表格的二次封装

## 开始

* npm install vue-elememt-table-will

* 在`main.js`中引入并注册。
* import vueElementTableWill from "vue-elememt-table-will";
*  Vue.use(vueElementTableWill);

* 在组件中使用 

`<vue-element-table-will :tableConfiguration="tableConfig"></vue-element-table-will>`

## 参数说明（tableConfiguration）

|   参数        |    默认值      |       类型    |     描述             |
|   :---:       |    :---:      |       :---:   |   :---:               |
|  `tableList`    |    []         |     `Array`  | 表格头部列表各项描述  |
|  `tableData`    |    []         |     `Array`  |   表格数据           |
|  `operationList`|    []         |     `Array`  |   操作栏按钮列表     |
|      `align`    |    `center`   |    `String`  |  表格内容居中显示      |
|  `operationWidth`|    100        |     `Number`  |   操作栏的宽度       |
|  `btnDescribe`    |    操作        |     `String`  |   表格操作按钮描述      |
|  `isShowPage`    |    true         |     `Boolean`  |   是否展示列表分页      |
|  `pageData`    |    {}        |     `Object`  |   分页数据      |
|  `IsIndex`    |    false       |     `Boolean`  |   是否显示表格序号      |
|  `IsSelection`    |    false        |     `Boolean`  |   是否显示多选      |
|  `isReserve`    |    false         |     `Boolean`  |   是否保留分页之前的数据 |
|  `IsrRdio`    |    false         |     `Boolean`  |   是否展示多选      |
|  `isborder`    |    true        |     `Boolean`  |   是否展示表格边框      |

**tableList描述**
> tableList 数组每项`item`为一个对象，`prop`对应后台每一项的字段，`label`为描述，eg:
```js
    tableList: [
        {prop: "title", label: "流程标题", width: 340},
        {prop: "nodeName", label: "任务名称"},
        {prop: "createTime", label: "任务创建时间"}
    ]
```

**operationList描述**
> operationList每一项代表一个按钮，`type`按钮名称，`color`按钮颜色（值参考element-ui）`fun`点击按钮触发的回调
```js
    operationList: [
          {
            type: "流程图",
            color: "info",
            fun: (data) => {
                // ....
            }
          },
          {
            type: "办理",
            color: "primary",
            fun: (data) => {
                // .....
            }
          }
    ]
```

**pageData描述**

```js
> 默认值为
pageData: {
    // 数据总数
    total: 0,
    // 当前页数
    pageNum: 1,
    // 每页显示多少条
    pageSize: 10
}
```

## 事件说明

* `handleCurrentChange` 点击分页
* `handleSizeChange` 改变分页数量
* `handleSelectionChange` 多选

