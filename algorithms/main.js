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
let arr = [9, 7, 27, 15, 42, 2]
let sortedArr = quickSort(arr)
console.log(arr)
console.log(sortedArr)
console.log(binarySearch(sortedArr, 15))