const data = [{
    name: '广东',
    pid: 0,
    id: 001,
    children: [{
        name: '深圳',
        pid: 001,
        id: 012,
        updata:true,
        children: [{
            name: '南山',
            pid: 012,
            id: 121,
            updata:false
        }]
    }]
}, {
    name: '福建',
    pid: 0,
    id: 002,
    children: [{
        name: '厦门',
        pid: 002,
        id: 021,
        children: [{
            name: '思明',
            pid: 021,
            id: 211,
            updata:false
        }]
    }]
}]


// export { data }
module.exports = data