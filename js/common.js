// 表单数据校验封装函数
function verify(username, password) {
  if (!/^\w{8,30}$/.test(username)) return toastShow('用户名长度应为8-30位')
  if (!/^\w{6,30}$/.test(password)) return toastShow('密码长度应为6-30位')
}
// 轻提示框封装函数
function toastShow(msg) {
  const toast = new bootstrap.Toast(document.querySelector('.my-toast'))
  document.querySelector('.toast-body').innerHTML = msg
  toast.show()
}
// 设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'
