// 一、注册页面
// 1、添加点击事件
// 2、获取表单数据
// 3、表单数据校验
// 4、发送请求
// 5、轻提示框显示
document.querySelector('#btn-register').addEventListener('click', async () => {
  const { username, password } = serialize(document.querySelector('.register-form'), { hash: true, empty: true })
  if (!/^\w{8,30}$/.test(username)) {
    return toastShow('用户名长度应为8-30位')
  }
  if (!/^\w{6,30}$/.test(password)) {
    return toastShow('密码长度应为6-30位')
  }
  try {
    const res = await axios.post('/register', { username, password })
    toastShow(res.data.message)
  } catch (error) {
    toastShow(error.response.data.message)
  }
})
