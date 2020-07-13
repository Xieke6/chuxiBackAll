<template>
  <div class="app-container" ref="echarts">
    <panel-group />

    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="更美商贸" /></h3>
      <el-col :span="12">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link @click="()=>{this.$router.push('/charts/departmentCharts')}">总出货量（盒）</el-link></p>
          <bar-chart :options = "allShipmentOption" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="chart-wrapper">
          <p style="text-align: center;margin: 0"><el-link @click="()=>{this.$router.push('/charts/departmentCharts')}">总经理的管理费（税前/元）</el-link></p>
          <bar-chart :options = "managerOption" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="经销商库存" /></h3>
      <el-col>
        <div class="chart-wrapper">
          <bar-chart :options = "dealerInventoryOption" :height="hei400" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <h3><mallki class-name="mallki-text" text="新增代理" /></h3>
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
  import PanelGroup from './components/PanelGroup'

  export default {
    components: { Mallki , BarChart , PanelGroup},
    data(){
      return{
        hei400:"400px",
        allShipmentOption:{//总出货量
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
                  name:"初曦水光套盒",
                  value:882680
                },
                {
                  name:"孤芳均衡面膜",
                  value:892710
                },
                {
                  name:"秘制精华油",
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
        managerOption:{//总经理的管理费
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['已发放', '未发放', '惩罚扣除'],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            barWidth: '30%',
            label: {
              show: true,
              position: 'top'
            },
            data: [14307200.00, 9287760.00 , 0.00 ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }],
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
              data: ['公司库存（盒）', '发给自己的货（在途中）（盒）', '已委托（盒）', '手里的库存（盒）']
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
              data: [24900 , 3780 , 335260 , 92910 ],
            },
            {
              name: '孤芳均衡面膜',
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
              data: [7530 , 20880 , 439620 , 164030 ],
            },
            {
              name: '秘制精华油',
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
              data: [2180 , 14720 , 59360 , 32253],
            },
          ],
        },
        newAgencyOption:{//最近10天新增代理
          title: {
            text: '最近10天新增代理'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['销售代表', '总代理', '经销商',]
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
              name: '销售代表',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [10, 13, 17, 5, 20, 3, 7 , 14 , 21 , 25]
            },
            {
              name: '总代理',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [0, 3 , 7 , 15 , 2 , 3 , 7 , 4 , 5 , 6]
            },
            {
              name: '经销商',
              // smooth:false,
              type: 'line',
              // stack: '总量',
              data: [ 1 , 3 , 1 , 5, 7 , 3, 7 , 4 , 1 , 2 ]
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
  el-link{
    font-size: 16px;
  }
</style>
