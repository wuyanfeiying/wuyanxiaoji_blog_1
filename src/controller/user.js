/*
 * @Author: 溪如风
 * @LastEditTime: 2024-03-31 18:20:20
 */
const loginCheck = (username, password) => {
    if (username === 'zhangsan' && password === '123') {
        return true
    } else {
        return false
    }
}

module.exports = {
    loginCheck
}