const data =  require('./data')

function changeTree(arr) {
    const flatA = flatArr(arr)
    const speaicl = getSpeacilIds(flatA)
    return JSON.stringify(changeParentStatus(data,speaicl) )
}

/**
 * @description 扁平化数组
 * @param {Array} arr 树结构数组
 */
function flatArr(arr) {
    const result = []
    function flat(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(item => {
                if (item.children) {
                    flat(item.children)
                }
                result.push(item)
            })
        }
    }
    flat(arr)
    return result
}

/**
 * @description 将扁平数组遍历更改当前的激活状态
 * @param {Array} arr 一维数组
 */
function getSpeacilIds(arr) {
    if (Array.isArray(arr)) {
        arr.forEach((item,index) => {
            // 如果节点有更新标记,抛出父节点。并且打上标记符
            const element = item;
            if (item.updata) {
                const parentIndex = arr.findIndex(i => {
                    return i.id === item.pid
                });
                if (parentIndex > -1) {   
                    // 修改父节点 更新属性
                    arr[parentIndex] = Object.assign({}, arr[parentIndex], {updata:true})
                }
            }
            // const path = `/${item.name}`
        })
    }
    return arr
}

function changeParentStatus(arr, flatArr) {
    function change(arr, flatArr, parent) {
        if (Array.isArray(arr)) {    
            arr.forEach((item, i) => {
                const itemElement = item
                const index = flatArr.findIndex(i => {
                    return i.id === item.id
                });
                // 找出 扁平数组元素
                const element = flatArr[index]
                if (index > -1) {
                    // 删除 扁平数据的children
                    element.children = null;
                };
                // 注入本级路径
                const path = `/${itemElement.name}`
                if (parent && parent.path) {
                    itemElement.path = `${parent.path}${path}`
                } else {
                    itemElement.path = `${path}`
                }
                // 合并
                arr[i] = Object.assign({}, element, itemElement)
                console.log('====================================');
                console.log(arr[i]);
                console.log('====================================');
                if (item.children) {
                    change(item.children,flatArr, arr[i])
                }
            })
        };
    };
    const newArr = JSON.parse(JSON.stringify(arr))
    const newFlatArr = JSON.parse(JSON.stringify(flatArr))
    change(newArr, newFlatArr)
    return newArr
}

console.log('====================================');
console.log(changeTree(data));
console.log('====================================');