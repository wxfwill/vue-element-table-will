<template>
  <div>
    <el-table
      id="tableId"
      :data="tableConfig.tableData"
      ref="table"
      :border="tableConfig.isborder"
      :row-key="getRowKey"
      style="width: 100%"
      :class="tableConfig.IsrRdio ? 'radio' : ''"
      @selection-change="handleSelectionChange"
    >
      <!-- 多选 -->
      <el-table-column
        type="selection"
        :align="tableConfig.align"
        width="55"
        v-if="tableConfig.IsSelection"
        :reserve-selection="tableConfig.isReserve"
      >
      </el-table-column>
      <!-- 序号 -->
      <el-table-column
        :align="tableConfig.align"
        fixed
        label="序号"
        width="50"
        v-if="tableConfig.IsIndex"
      >
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :align="tableConfig.align"
        :label="item.label"
        :width="item.width"
        v-for="(item, index) in tableConfig.tableList"
        :key="index"
      >
        <template slot-scope="scope">
          <span v-if="item.render" v-html="item.render(scope.row)"></span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        :label="tableConfig.btnDescribe"
        :align="tableConfig.align"
        :width="tableConfig.operationWidth"
        v-if="
          tableConfig.operationList.length > 0 &&
            !tableConfig.operationListBtnStatus
        "
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in tableConfig.operationList"
            :key="index"
            :disabled="item.isabled"
            :type="item.color"
            @click="item.fun(scope.row, scope.$index)"
            size="mini"
            >{{ item.type }}</el-button
          >
        </template>
      </el-table-column>
      <slot name="operationListBtnStatus"></slot>
      <!-- <el-table-column fixed="right" :label="tableConfig.btnDescribe" :align="tableConfig.align" :width="tableConfig.operationWidth" v-else>
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in tableConfig.operationList"
            :key="index"
            :disabled="item.isabled"
            :type="item.color"
            @click="item.fun(scope.row)"
            size="mini"
            >{{ item.type }}</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
    <div class="clearfix mgt20" v-if="tableConfig.isShowPage">
      <div class="fl total-cont" v-show="tableConfig.pageData.total > 0">
        共{{ tableConfig.pageData.total }}条记录
      </div>
      <div class="fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableConfig.pageData.pageNum"
          :hide-on-single-page="true"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="tableConfig.pageData.pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="tableConfig.pageData.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue-element-table-will",
  data() {
    return {};
  },
  props: {
    tableConfiguration: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    tableConfig() {
      return Object.assign(
        {
          // 列表栏位
          tableList: [
            { prop: "title", label: "流程标题", width: 340 },
            { prop: "nodeName", label: "任务名称" },
            {
              prop: "taskType",
              label: "类型"
            },
            {
              prop: "statusNote",
              label: "状态"
            },
            { prop: "createTime", label: "任务创建时间" }
          ],
          // 列表数据
          tableData: [
            {
              title: "测试1",
              taskType: 1,
              statusNote: 1,
              createTime: "2020"
            },
            {
              title: "测试1",
              taskType: 1,
              statusNote: 1,
              createTime: "2020"
            },
            {
              title: "测试1",
              taskType: 1,
              statusNote: 1,
              createTime: "2020"
            }
          ],
          // 操作
          operationList: [],
          // 操作栏按钮状态是否根据数据不同展示不同
          operationListBtnStatus: false,
          // 表格内容是否居中
          align: "center",
          // 操作栏位的宽度
          operationWidth: 100,
          // 是否展示分页
          isShowPage: true,
          // 分页信息
          pageData: {
            // 数据总数
            total: 0,
            // 当前页数
            pageNum: 1,
            // 每页显示多少条
            pageSize: 10
          },
          // 是否隐藏序号栏位
          IsIndex: true,
          //是否显示多选
          IsSelection: false,
          // 是否保留分页之前的数据
          isReserve: false,
          // 是否展示单选
          IsrRdio: false,
          // 是否显示边框
          isborder: true,
          // 操作按钮描述
          btnDescribe: "操作"
        },
        this.tableConfiguration
      );
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
    getRowKey(row) {
      return row.id;
    },
    //多选
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
      if (this.tableConfig.IsrRdio && val.length > 1) {
        this.$refs.table.clearSelection();
        //val.pop() 删除数组最后一项，并返回删除元素
        this.$refs.table.toggleRowSelection(val.pop());
      }
    },
    showRow(row) {
      // event.preventDefault();
      // this.$refs.table.toggleRowSelection(row);
    }
  }
};
</script>
<style lang="scss" scoped></style>
