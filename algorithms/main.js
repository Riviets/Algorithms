function binarySearch(arr, searchedEl) { //O(log(n))
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let tmp = arr[middle]
        if (tmp === searchedEl) return middle
        if (tmp < searchedEl) start = middle + 1
        if (tmp > searchedEl) end = middle - 1
    }
    return undefined
}
function simpleSearch(arr, searchedEl) { //O(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchedEl) return i
    }
    return undefined
}
function quickSort(arr) { //O(n * log(n))
    if (arr.length < 2)
        return arr
    let less = []
    let more = []
    let tmp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < tmp) less.push(arr[i])
        else more.push(arr[i])
    }
    return [...quickSort(less), tmp, ...quickSort(more)]
}
let graph = {
    "1": ["2","3"],
    "2": ["1","3","5(s)"],
    "3": ["1","2","4","5(s)"],
    "4": ["3"],
    "5(s)": ["2","3"]
}
let graph2 = {
    "1": ["2(s)","3"],
    "2(s)": ["1","3","5(s)"],
    "3": ["1","2(s)","4","5(s)"],
    "4": ["3"],
    "5(s)": ["2(s)","3"]
}

function isSearched(name) {
    return name.slice(-3) === "(s)"
}
let queue = []
let visited = []
function bfs(graph, start) {
    queue.push(start)
    while (queue.length > 0) {
        let current = queue.shift()
        if (!visited.includes(current)) {
            if (isSearched(current)) {
                return current
            }
            else {
                let neighbors = graph[current]
                for (let i = 0; i < neighbors.length; i++) {
                    queue.push(neighbors[i])
                }
            }
        }
        visited.push(current)
    }
    return null
}
console.log(bfs(graph, "1"))
visited = []
queue = []
console.log(bfs(graph2, "1"))

// let arr = [9, 7, 27, 15, 42, 2]
// let sortedArr = quickSort(arr)
// console.log(arr)
// console.log(sortedArr)
// console.log(binarySearch(sortedArr, 15))