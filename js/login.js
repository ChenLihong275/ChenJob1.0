// 二、登录功能
// 1、添加点击事件
// 2、获取表单数据
// 3、表单数据校验
// 4、发送请求
// 5、轻提示框显示
// 6、用户名及token存入本地
document.querySelector('#btn-login').addEventListener('click', async () => {
  const { username, password } = serialize(document.querySelector('.login-form'), { hash: true, empty: true })
  if (!/^\w{8,30}$/.test(username)) {
    return toastShow('用户名长度应为8-30位')
  }
  if (!/^\w{6,30}$/.test(password)) {
    return toastShow('密码长度应为6-30位')
  }
  try {
    const res = await axios.post('/login', { username, password })
    toastShow(res.data.message)
    setTimeout(() => (location.href = 'index.html'), 1500)
    localStorage.setItem('username', username)
    localStorage.setItem('token', res.data.data.token)
  } catch (error) {
    toastShow(error.response.data.message)
  }
})
