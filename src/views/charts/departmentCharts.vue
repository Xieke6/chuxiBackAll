<template>
  <div class="charts">
    <el-row>
      <el-col>
        <div class="chart-wrapper">
          <bar-chart :options = "departmentOption" :height="auto" @getId="getId"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Mallki from '@/components/TextHoverEffect/Mallki';
  import BarChart from './components/BarChart'

  export default {
    components: { Mallki , BarChart },
    data(){
      return{
        auto:"1200px",
        departmentOption: {
          backgroundColor: '#344b58',
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['初曦水光套盒', '孤芳均衡面膜', '初曦洁面乳', '秘制精华油'],
            top:'15px',
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontFamily: "微软雅黑",
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['部门一部', '部门二部', '部门三部', '部门四部', '部门五部', '部门六部', '部门七部' , '部门八部' , '部门九部' , '部门十部']
          },
          series: [
            {
              name: '初曦水光套盒',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [320, 302, 301, 334, 390, 330, 320,250,270,410]
            },
            {
              name: '孤芳均衡面膜',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [120, 132, 101, 134, 90, 230, 210,450,650,110]
            },
            {
              name: '初曦洁面乳',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [220, 182, 191, 234, 290, 330, 310,220,330,440]
            },
            {
              name: '秘制精华油',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [150, 212, 201, 154, 190, 330, 410,700,200,100]
            }
          ]
        }
      }
    },
    mounted() {

    },
    methods:{
      getId(val){
        console.log(val)
        let id = val.dataIndex;
        this.$router.push(`/charts/distributionCharts/${id}`);
      }
    }
  }
</script>

<style scoped>
  .charts{
    background-color:#344b58;
    min-height: calc(100vh - 84px);
  }
  .app-container{
    background-color:#f0f2f5;
    min-height: calc(100vh - 84px);
  }
  h3{
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
  }
  el-link{
    font-size: 16px;
  }
</style>
