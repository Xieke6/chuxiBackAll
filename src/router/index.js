import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '',
    redirect: 'charts/index',
  },
  {
    path: '/charts',
    component: Layout,
    meta: { title: '首页'},
    children: [
      {
        path: 'index',
        component: () => import('@/views/charts/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: 'departmentCharts',
        hidden:true,
        component: () => import('@/views/charts/departmentCharts'),
        name: '部门图表',
        meta: { title: '部门图表', affix: false }
      },
      {
        path: 'distributionCharts/:id',
        hidden:true,
        component: () => import('@/views/charts/distributionCharts'),
        name: '分销图表',
        meta: { title: '分销图表', affix: false }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    meta:{title: '订单列表',icon: 'dashboard',},
    children: [
      {
        path: 'index',
        component: () => import('@/views/order/index'),
        name: '订单概况',
        meta: { title: '订单概况' , affix: false }
      },
      {
        path: 'batchQueryList',
        component: () => import('@/views/order/batchQueryList'),
        name: '批次查询列表',
        meta: { title: '批次查询列表' , affix: false }
      },
      {
        path: 'orderQueryList',
        component: () => import('@/views/order/orderQueryList'),
        name: '订单查询列表',
        meta: { title: '订单查询列表' , affix: false }
      }
    ]
  },
  {
    path: '/openOrderGoods',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/openOrderGoods/index'),
        name: '开放订货',
        meta: { title: '开放订货', icon: 'dashboard', affix: false }
      }
    ]
  },
  {
    path: '/roles',
    component: Layout,
    meta: { title: '权限列表'},
    children: [
      {
        path: 'role',
        component: () => import('@/views/roles/role'),
        name: '角色列表',
        meta: { title: '角色列表', icon: 'dashboard', affix: false }
      },
    ]
  },
  {
    path: '*',
    redirect: { path: '/404' }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
  // mode:"history"
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
