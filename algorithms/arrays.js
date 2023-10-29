function binarySearch(arr, searchedEl) { //O(logn)
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === searchedEl) return middle
        if (arr[middle] > searchedEl) end = middle - 1
        if (arr[middle] < searchedEl) start = middle + 1
    }
    return null
}
function linearSearch(arr, searchedEl) { //O(n)
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === searchedEl) return i
    return null
}
function quickSort(arr) { //O(n*logn)
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
function selectionSort(arr) { //O(n*n)
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let arr = [9, 7, 27, 15, 42, 2]
console.log(arr)
selectionSort(arr)
console.log(arr)
// let sortedArr = quickSort(arr)
// console.log(sortedArr)
// console.log(binarySearch(sortedArr, 15))