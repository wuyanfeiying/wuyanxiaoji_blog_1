/*
 * @Author: 溪如风
 * @LastEditors: chg
 * @LastEditTime: 2024-03-31 17:43:53
 */
const login = (username, password) => {
    if (username === 'zhangsan' && password === '123') {
        return Promise.resolve({
            msg: '登录成功'
        })
    } else {
        return Promise.reject(new Error('登录失败'))
    }
}