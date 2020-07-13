// import axios from 'axios';
// import qs from "qs";

import request from '@/utils/request2'

// const instance = axios.create({
//   baseURL: 'http://192.168.2.59:8080',
// });//重写axios

//修改部门产品下单开始时间跟结束时间
// export const getProductSales = params =>{ return instance.get("/openorder/getlist",qs.stringify(params))}
// export const updateTimeById = params =>{ return instance.put("/openorder/updatetimebyid",qs.stringify(params))}
// export const updateProductById = params =>{ return instance.put("/openorder/updateproductbyid",qs.stringify(params))}
// export const updateBatchBatch = params =>{ return instance.post("/openorder/updatebatch",params)}

//开放订货接口
export const getProductSales = params =>{
  return request({
    url: '/openOrder',
    method: 'get',
    params: params
  })
}
export const updateTimeById = params =>{
  return request({
    url: `/openOrder/${params.id}/time`,
    method: 'put',
    params: params
  })
}
export const updateProductById = params =>{
  return request({
    url: `/openOrder/${params.id}/pid`,
    method: 'put',
    params: params
  })
}
export const updateBatchBatch = params =>{
  return request({
    url: '/openOrder/updatebatch',
    method: 'put',
    data:params,
  })
}

