// 轻提示框封装函数
function toastShow(msg) {
  const toast = new bootstrap.Toast(document.querySelector('.my-toast'))
  document.querySelector('.toast-body').innerHTML = msg
  toast.show()
}
// 设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'
