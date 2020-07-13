<template>
  <div class="app-container">
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item label="批次号">
          <el-input  v-model="searchForm.batchNo" placeholder="请输入批次号"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="searchForm.department" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="一部" value="0"></el-option>
            <el-option label="二部" value="1"></el-option>
            <el-option label="三部" value="2"></el-option>
            <el-option label="四部" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品">
          <el-select v-model="searchForm.product" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="初曦水光套盒" value="0"></el-option>
            <el-option label="孤芳均衡面膜" value="1"></el-option>
            <el-option label="初曦洁面乳" value="2"></el-option>
            <el-option label="秘制精华油" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下单时间">
          <el-date-picker
            v-model="searchForm.orderTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="已完成" value="0"></el-option>
            <el-option label="待确认" value="1"></el-option>
            <el-option label="待发货" value="2"></el-option>
            <el-option label="待收货" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-download">导出</el-button>
        </el-form-item>
      </el-form>
    </el-col>


    <!--列表-->
    <el-table :data="getForm" highlight-current-row border stripe style="width: 100%;">
      <el-table-column type="index" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column prop="batchNo" label="批次号" align="center">
      </el-table-column>
      <el-table-column prop="department" label="部门" align="center">
      </el-table-column>
      <el-table-column prop="orderNum" label="订单笔数" align="center">
      </el-table-column>
      <el-table-column prop="product" label="产品" align="center">
      </el-table-column>
      <el-table-column prop="num" label="数量" align="center">
      </el-table-column>
      <el-table-column prop="orderTime" label="下单时间" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-col :span="24" class="toolbar">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total , prev, pager, next, jumper"
        :total="120"
        style="float: right;margin-top: 15px"
      >
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage:1,//当前分页
        searchForm:{
          batchNo:null,//批次号
          department:null,//部门
          product:null,//产品
          orderTime:null,//开始-结束时间段
          status:null,//状态
        },

        getForm:[
          {
            batchNo:"2020070901",
            department:"一部",
            orderNum:"6",
            product:"初曦水光套盒",
            num:"12",
            orderTime:"2020-07-09 12:00:00",
            status:"待收货"
          },
          {
            batchNo:"2020070902",
            department:"三部",
            orderNum:"3",
            product:"孤芳均衡面膜",
            num:"10",
            orderTime:"2020-07-09 11:00:00",
            status:"待发货"
          },
          {
            batchNo:"2020070903",
            department:"四部",
            orderNum:"9",
            product:"孤芳均衡面膜",
            num:"18",
            orderTime:"2020-07-09 10:00:00",
            status:"待确认"
          },
          {
            batchNo:"2020070904",
            department:"一部",
            orderNum:"2",
            product:"孤芳均衡面膜",
            num:"8",
            orderTime:"2020-07-09 10:00:00",
            status:"已完成"
          },{
            batchNo:"2020070901",
            department:"一部",
            orderNum:"6",
            product:"初曦水光套盒",
            num:"12",
            orderTime:"2020-07-09 12:00:00",
            status:"待收货"
          },
          {
            batchNo:"2020070902",
            department:"三部",
            orderNum:"3",
            product:"孤芳均衡面膜",
            num:"10",
            orderTime:"2020-07-09 11:00:00",
            status:"待发货"
          },
          {
            batchNo:"2020070903",
            department:"四部",
            orderNum:"9",
            product:"孤芳均衡面膜",
            num:"18",
            orderTime:"2020-07-09 10:00:00",
            status:"待确认"
          },
          {
            batchNo:"2020070904",
            department:"一部",
            orderNum:"2",
            product:"孤芳均衡面膜",
            num:"8",
            orderTime:"2020-07-09 10:00:00",
            status:"已完成"
          },{
            batchNo:"2020070901",
            department:"一部",
            orderNum:"6",
            product:"初曦水光套盒",
            num:"12",
            orderTime:"2020-07-09 12:00:00",
            status:"待收货"
          },
          {
            batchNo:"2020070902",
            department:"三部",
            orderNum:"3",
            product:"孤芳均衡面膜",
            num:"10",
            orderTime:"2020-07-09 11:00:00",
            status:"待发货"
          },
          {
            batchNo:"2020070903",
            department:"四部",
            orderNum:"9",
            product:"孤芳均衡面膜",
            num:"18",
            orderTime:"2020-07-09 10:00:00",
            status:"待确认"
          },
          {
            batchNo:"2020070904",
            department:"一部",
            orderNum:"2",
            product:"孤芳均衡面膜",
            num:"8",
            orderTime:"2020-07-09 10:00:00",
            status:"已完成"
          }
        ]

      }
    },
    created() {

    },
    methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
