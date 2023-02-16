import axios from 'axios'

// request 就是小axios
const request = axios.create({
  // 指定请求的根路径
  baseURL: 'https://applet-base-api-t.itheima.net'
})

export default request
