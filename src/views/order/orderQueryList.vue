<template>
  <div class="app-container">
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item label="订单号">
          <el-input  v-model="searchForm.orderNo" placeholder="请输入订单号"></el-input>
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
        <el-form-item label="团队">
          <el-select v-model="searchForm.team" filterable  placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="一部" value="0"></el-option>
            <el-option label="二部" value="1"></el-option>
            <el-option label="三部" value="2"></el-option>
            <el-option label="四部" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="买家">
          <el-select v-model="searchForm.buyer" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="买家1" value="0"></el-option>
            <el-option label="买家2" value="1"></el-option>
            <el-option label="买家3" value="2"></el-option>
            <el-option label="买家4" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="买家等级">
          <el-select v-model="searchForm.buyerLv" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="一级" value="0"></el-option>
            <el-option label="二级" value="1"></el-option>
            <el-option label="三级" value="2"></el-option>
            <el-option label="四级" value="3"></el-option>
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
        <el-form-item label="产品">
          <el-select v-model="searchForm.product" placeholder="全部">
            <el-option label="全部" value="null"></el-option>
            <el-option label="初曦水光套盒" value="0"></el-option>
            <el-option label="孤芳均衡面膜" value="1"></el-option>
            <el-option label="初曦洁面乳" value="2"></el-option>
            <el-option label="秘制精华油" value="3"></el-option>
          </el-select>
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
      <el-table-column prop="orderNo" label="订单号" align="center">
      </el-table-column>
      <el-table-column prop="department" label="部门" align="center">
      </el-table-column>
      <el-table-column prop="team" label="团队" align="center">
      </el-table-column>
      <el-table-column prop="buyer" label="买家" align="center">
      </el-table-column>
      <el-table-column prop="buyerLv" label="买家等级" align="center">
      </el-table-column>
      <el-table-column prop="orderTime" label="下单时间" align="center">
      </el-table-column>
      <el-table-column prop="product" label="产品" align="center">
      </el-table-column>
      <el-table-column prop="num" label="数量" align="center">
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
          orderNo:null,//批次号
          department:null,//部门
          team:null,//团队
          buyer:null,//买家
          buyerLv:null,//买家等级
          orderTime:null,//开始-结束时间段
          product:null,//产品
          status:null,//状态
        },

        getForm:[
          {
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },{
            orderNo:"2020070901",
            department:"一部",
            team:"team1",
            buyer:"买家1",
            buyerLv:"一级",
            orderTime:"2020-07-09 12:00:00",
            product:"初曦水光套盒",
            num:"12",
            status:"待收货"
          },
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
