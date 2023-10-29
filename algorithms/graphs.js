let graph = {
    "1": ["2", "3"],
    "2": ["1", "3", "5(s)"],
    "3": ["1", "2", "4", "5(s)"],
    "4": ["3"],
    "5(s)": ["2", "3"]
}
let graph2 = {
    "1": ["2(s)", "3"],
    "2(s)": ["1", "3", "5(s)"],
    "3": ["1", "2(s)", "4", "5(s)"],
    "4": ["3"],
    "5(s)": ["2(s)", "3"]
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