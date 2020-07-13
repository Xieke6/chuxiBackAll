<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" @click="changeMoreTime">批量修改时间</el-button>
      <el-button type="primary" @click="changeMoreProduct">批量修改产品名称</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="orderList"
      tooltip-effect="dark"
      style="width: 100%"
      border
      v-loading="listLoading"
      @selection-change="handleSelectionChange">
      getProductSales
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="部门名称">
        <template v-slot="scope">{{ scope.row.name }}</template>
      </el-table-column>

      <el-table-column
        label="产品名称">
        <template v-slot="scope">{{ scope.row.pname }}</template>
      </el-table-column>

      <el-table-column
        label="下单开始时间">
        <template v-slot="scope">{{ forCreateTime(scope.row.beginOrder*1000) }}</template>
      </el-table-column>

      <el-table-column
        label="下单开结束时间">
        <template v-slot="scope">{{ forCreateTime(scope.row.endOrder*1000) }}</template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="280">
        <template v-slot="scope">
          <el-button type="primary" @click="changeTime(scope.row)">修改时间</el-button>
          <el-button type="primary" @click="changeProductName(scope.row)">修改产品名称</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog
      title="修改时间"
      :visible.sync="dialogVisible"
      width="650px">
      <el-form ref="timeForm" :model="timeForm" :rules="rulesTime" label-width="80px">
        <el-form-item label="时间选择" prop="selectTime">
          <el-date-picker
            v-model="timeForm.selectTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmTime" :loading="timeLoading">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="修改产品名称"
      :visible.sync="productVisible"
      width="650px">
      <el-form ref="productForm" :model="productForm" :rules="rulesProduct" label-width="80px">
        <el-form-item label="产品名称" prop="productName">
          <el-select v-model="productForm.productName" placeholder="请选择产品名称">
            <el-option
              v-for="item in productList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="productVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmProduct" :loading="productLoading">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import {getProductSales , updateTimeById , updateProductById , updateBatchBatch} from '../../api/api';
  import util from '../../utils/util';

  export default {
    data(){
      return {
        productList:[//产品列表
          {
            label:"初曦水光套盒",
            value:"1"
          },
          {
            label:"孤芳均衡面膜",
            value:"2"
          },
          {
            label:"初曦洁面乳",
            value:"3"
          },
          {
            label:"秘制精华油",
            value:"4"
          },
        ],
        selectOrderList:[],//批量操作选中的id列表
        listLoading:false,//列表加载

        thisId:"",//当前选择的id
        timeLoading:false,//修改时间确定按钮loading
        dialogVisible:false,//修改时间是否展示
        timeForm:{//修改时间参数
          selectTime:[]
        },
        rulesTime:{//修改时间验证
          selectTime:[
            {required: true, message: '请选择开始/结束时间段'},
          ]
        },

        productLoading:false,//修改产品确定按钮loading
        productVisible:false,//修改产品名称展示
        productForm:{//修改产品名称参数
          productName:""
        },
        rulesProduct:{//修改产品名称正则
          productName: [
            { required: true, message: '请选择产品名', trigger: 'change' },
          ],
        },

        orderList:[],//订单列表

        changeType:0,//判断是单个修改还是批量修改,单个修改为1,批量修改为2
      }
    },
    methods:{
      //请求产品列表
      getList(){
        let params = {
        }
        this.listLoading = true;
        getProductSales(params).then( res =>{
          this.orderList = res.data;
          this.listLoading = false;
        }).catch( res => {

        })
      },

      //时间转化函数
      forCreateTime: function (row,) {
        if(row){
          return util.formatDate.format(new Date(row), 'yyyy-MM-dd hh:mm:ss');
        }
        else{
          return "暂无";
        }
      },

      //批量操作事件
      handleSelectionChange(val) {
        // let selectOrderList = [];
        // for (let item of val){
        //   selectOrderList.push(item.id);
        // }
        // this.selectOrderList = selectOrderList
        this.selectOrderList = val;
      },

      //批量修改时间按钮点击事件
      changeMoreTime(){
        if(this.selectOrderList.length ==0){
          this.$message({
            message: '请选择批量处理的数据！',
            type: 'warning'
          });
        }else {
          this.dialogVisible = true;
          this.timeForm.selectTime = [];
          this.changeType = 2;
        }
      },

      //批量修改产品名称
      changeMoreProduct(){
        if(this.selectOrderList.length ==0){
          this.$message({
            message: '请选择批量处理的数据！',
            type: 'warning'
          });
        }else {
          this.productVisible = true;
          this.productForm.productName = "";
          this.changeType = 2;
        }
      },


      //时间插件改变事件
      changeTime(val){
        this.thisId = val.id;
        this.timeForm.selectTime = [new Date(val.beginOrder*1000),new Date(val.endOrder*1000)]
        this.dialogVisible = true;
        this.changeType = 1;
      },

      //修改产品名称
      changeProductName(val){
        this.thisId = val.id;
        this.productForm.productName = val.pname
        this.productVisible = true;
        this.changeType = 1;
      },

      //确认修改产品事件
      confirmProduct(){
        this.productLoading = true;
        this.$refs.productForm.validate((valid) => {
          if (valid) {
            if(this.changeType == 1){
              let params = {
                pid:this.productForm.productName,
                id:this.thisId,
              }
              updateProductById(params).then( res =>{
                this.productLoading = false;
                this.productVisible = false;
                this.$message({
                  message: '修改成功！',
                  type: 'success'
                });
                this.getList();
              }).catch( res => {

              })
            }else if(this.changeType == 2){
              let selectOrderList = JSON.parse(JSON.stringify(this.selectOrderList));
              for(let i = 0 ; i< selectOrderList.length ; i++){
                selectOrderList[i].pid = this.productForm.productName;
                selectOrderList[i].pname = "";
              }
              let param = selectOrderList;
              updateBatchBatch(param).then( res =>{
                this.productLoading = false;
                this.productVisible = false;
                this.$message({
                  message: '批量修改成功！',
                  type: 'success'
                });
                this.getList();
              }).catch( res => {

              })
            }
          }else {
            this.productLoading = false;
          }
        })
      },

      //确认修改时间事件
      confirmTime(){
        this.timeLoading = true;
        this.$refs.timeForm.validate((valid) => {
          if (valid) {
            if(this.changeType == 1){
              let params = {
                startTime:new Date(this.timeForm.selectTime[0]).getTime()/1000,
                endTime:new Date(this.timeForm.selectTime[1]).getTime()/1000,
                id:this.thisId,
              }
              updateTimeById(params).then( res =>{
                this.timeLoading = false;
                this.dialogVisible = false;
                this.$message({
                  message: '修改成功！',
                  type: 'success'
                });
                this.getList();
              }).catch( res => {

              })
            }else if(this.changeType == 2){
              let selectOrderList = JSON.parse(JSON.stringify(this.selectOrderList));
              for(let i = 0 ; i< selectOrderList.length ; i++){
                selectOrderList[i].startTime = new Date(this.timeForm.selectTime[0]).getTime()/1000;
                selectOrderList[i].endTime=new Date(this.timeForm.selectTime[1]).getTime()/1000,
                selectOrderList[i].pname = "";
              }
              let param = selectOrderList;
              updateBatchBatch(param).then( res =>{
                this.timeLoading = false;
                this.dialogVisible = false;
                this.$message({
                  message: '批量修改成功！',
                  type: 'success'
                });
                this.getList();
              }).catch( res => {

              })
            }
          }else {
            this.timeLoading = false;
          }
        })
      }
    },
    created() {
      this.getList();
    }
  }
</script>

<style scoped>

</style>
