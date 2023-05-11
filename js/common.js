// 轻提示框封装函数
function toastShow(msg) {
  const toast = new bootstrap.Toast(document.querySelector('.my-toast'))
  document.querySelector('.toast-body').innerHTML = msg
  toast.show()
}
// 设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'
// 封装令牌，有令牌才可打开页面
function token() {
  if (localStorage.getItem('token')) return
  toastShow('登录失效，请重新登录')
  setTimeout(() => (location.href = 'login.html'), 1500)
}
// 渲染用户名函数
function renderUsername() {
  document.querySelector('.username').innerHTML = localStorage.getItem('username')
}
// 点击退出封装函数
function logout() {
  document.querySelector('#logout').addEventListener('click', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    location.href = 'login.html'
  })
}
// axios拦截器
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.dir(error)
    if (error.response.status === 401) {
      toastShow('登录失效，请重新登录')
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      setTimeout(() => (location.href = 'login.html'), 1500)
    }
    return Promise.reject(error)
  }
)
