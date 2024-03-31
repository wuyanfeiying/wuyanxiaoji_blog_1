const getList = (author, keyword) => {
    // 先返回假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1711873655439,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1711873742436,
            author: 'Lisi'
        },
        {
            id: 3,
            title: '标题C',
            content: '内容C',
            createTime: 1711873753437,
            author: 'wangwu'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: id,
        title: '标题A',
        content: '内容A',
        createTime: 1711873655439,
        author: '张三'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含 title content 属性
    return {
        id: 3, // 表示新建博客，插入到数据表里面的 id
        ...blogData
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一个博客对象，包含 title content 属性
    return false
}

const delBlog = (id) => {
    // id 就是要删除博客的 id
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}