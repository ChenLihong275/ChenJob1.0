// 三、首页内容
// 1、有令牌才可打开首页
// 2、页面用户名修改
// 3、右上角退出首页
// 4、打开默认渲染页面
token()
logout()
async function render() {
  renderUsername()
  const res = await axios({ url: '/dashboard' })
  Object.keys(res.data.data.overview).forEach(key => (document.querySelector(`.${key}`).innerHTML = res.data.data.overview[key]))
}
render()
