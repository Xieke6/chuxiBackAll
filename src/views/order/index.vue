<template>
  <div class="app-container" ref="echarts">
    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="总订单数笔数" /></h3>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link>总出货量（盒）</el-link></p>
          <bar-chart :options = "statusOpstion" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="产品订单数笔数" /></h3>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link>初曦水光套盒出货量（盒）</el-link></p>
          <bar-chart :options = "statusOpstion" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link>孤芳均衡面膜出货量（盒）</el-link></p>
          <bar-chart :options = "statusOpstion" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link>初曦洁面乳出货量（盒）</el-link></p>
          <bar-chart :options = "statusOpstion" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link>秘制精华油出货量（盒）</el-link></p>
          <bar-chart :options = "statusOpstion" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="最近10天零售情况" /></h3>
      <el-col>
        <div class="chart-wrapper">
          <bar-chart :options = "newAgencyOption" :height="hei400" />
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
        hei400:"400px",

        statusOpstion:{//状态饼状图
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
          },
          series: [
            {
              name: '出货量',
              type: 'pie',
              radius: '55%',
              center: ['40%', '50%'],
              data: [
                {
                  name:"已完成",
                  value:282680
                },
                {
                  name:"待确认",
                  value:492710
                },
                {
                  name:"待发货",
                  value:145200
                },
                {
                  name:"待收货",
                  value:145200
                }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },

        dealerInventoryOption:{//经销商库存
          legend: {
            data: ['初曦水光套盒', '孤芳均衡面膜',"秘制精华油"]
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['已完成', '待确认', '待发货', '待收货']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '初曦水光套盒',
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
              data: [10086 , 10010 , 45236 , 23789 ],
            },
            {
              name: '孤芳均衡面膜',
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
              data: [7530 , 8080 , 6666 , 7777 ],
            },
            {
              name: '秘制精华油',
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
              data: [2500 , 5200 , 4321 , 1234],
            },
          ],
        },
        newAgencyOption:{//最近10天新增代理
          title: {
            text: '最近10天零售情况'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['初曦水光套盒', '孤芳均衡面膜', '秘制精华油',]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['07-01', '07-02',  '07-03', '07-04', '07-06', '07-06', '07-07', '07-08', '07-09' , '07-10']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '初曦水光套盒',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [110, 113, 117, 215, 120, 323, 175 , 134 , 211 , 225]
            },
            {
              name: '孤芳均衡面膜',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [100, 300 , 700 , 185 , 122 , 131 , 171 , 141 , 151 , 161]
            },
            {
              name: '秘制精华油',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [ 211 , 143 , 471 , 515, 247 , 423, 527 , 114 , 451 , 852 ]
            },
          ]
        },
      }
    },
    mounted() {

    },
    methods:{

    }
  }
</script>

<style scoped>
  .app-container{
    background-color:#f0f2f5;
    min-height: calc(100vh - 84px);
  }
  h3{
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
</style>
