<template>
  <div class="app-container">
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary">添加角色</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="getForm" border highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column type="index" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template v-slot="scope">
          <el-tooltip placement="left">
            <div slot="content" style="max-width: 200px !important;">{{scope.row.name}}</div>
            <span style="max-width: 250px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;cursor: pointer;text-align: left;">{{scope.row.name}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="描述" align="center">
        <template v-slot="scope">
          <el-tooltip placement="left">
            <div slot="content" style="max-width: 200px !important;">{{scope.row.description}}</div>
            <span style="max-width: 250px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;cursor: pointer;text-align: left;">{{scope.row.description}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" align="center">
        <template v-slot="scope" >
          <el-button type="primary" plain @click="changeRoles(scope.row)">修改</el-button>
          <el-button type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'role',
    data(){
      return{
        listLoading:false,
        getForm:[
          {
            name:"超级管理员",
            description:"超级管理员"
          },
          {
            name:"员工账户",
            description:"员工账户"
          },
          {
            name:"财务账户",
            description:"财务账户"
          }
        ]
      }
    },
    methods:{
      changeRoles(row){
        console.log(row)
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
