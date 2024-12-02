const fs = require("fs");
let data = fs.readFileSync('./day3.txt', { encoding: 'ascii' })

let sum = 0

let matrix = data.split('\r\n')

//i=y
//j=x
//k=y
//l=x
for (let i = 0; i < matrix.length; i++) {
    let num = ''
    let addNumber = false
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j].match(/[0-9]/g)) {
            num += matrix[i][j]
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (k > -1 && k < matrix.length && l > -1 && l < matrix[i].length) {
                        if (matrix[k][l].match(/[^.\w]/g)) {
                            addNumber = true
                        }
                    }
                }
            }

        } else {
            if (addNumber) {
                sum += Number(num)
                addNumber = false
            }
            num = ''
        }
    }
    if (num && addNumber) {
        sum += Number(num)
        addNumber = false
    }

}

//console.log("sum", sum);

//For second part add a hashmap that stores the numbers and the position of the gear
sum = 0

let map = new Map()


for (let i = 0; i < matrix.length; i++) {
    let num = ''
    let addNumber = false
    let gearX = 0
    let gearY = 0
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j].match(/[0-9]/g)) {
            num += matrix[i][j]
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (k > -1 && k < matrix.length && l > -1 && l < matrix[i].length) {
                        if (matrix[k][l].match(/[*]/g)) {
                            addNumber = true
                            gearX = k
                            gearY = l
                        }
                    }
                }
            }

        } else {
            if (addNumber) {
                if (map.has([gearX, gearY] + '')) {
                    let currentArr = map.get([gearX, gearY] + '')
                    currentArr.push(num)
                    map.set([gearX, gearY] + '', currentArr)
                } else {
                    let newArr = []
                    newArr.push(num)
                    map.set([gearX, gearY] + '', newArr)
                }
                sum += Number(num)
                addNumber = false
            }
            num = ''
            gearX = 0
            gearY = 0
        }
    }
    if (num && addNumber) {
        if (map.has([gearX, gearY] + '')) {
            let currentArr = map.get([gearX, gearY] + '')
            currentArr.push(num)
            map.set([gearX, gearY] + '', currentArr)
        } else {
            let newArr = []
            newArr.push(num)
            map.set([gearX, gearY] + '', newArr)
        }
        sum += Number(num)
        addNumber = false
    }

}
sum = 0

map.forEach((gear) => {
    if (gear.length === 2) {
        sum += Number(gear[0]) * Number(gear[1])
    }
})
console.log(map);

console.log("sum", sum);


//console.log("map",map);