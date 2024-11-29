const fs = require("fs");
let data = fs.readFileSync('./day2.txt', { encoding: 'ascii' })

let resulp1 = data.split('\r\n').reduce((sum, game) => {
    let hands = game.split(':')[1].split(';')
    let gameID = Number(game.split(':')[0].replace(/[A-z]/g, ''))
    let possible = true

    hands.forEach(hand => {
        let cubes = hand.split(",")
        for (const cube in cubes) {
            const cubeD = cubes[cube]
            if (cubeD.indexOf('red') !== -1 && Number(cubeD.replace(/[A-z ]/g, '')) > 12) {
                possible = false
            } else if (cubeD.indexOf('green') !== -1 && Number(cubeD.replace(/[A-z ]/g, '')) > 13) {
                possible = false
            } else if (cubeD.indexOf('blue') !== -1 && Number(cubeD.replace(/[A-z ]/g, '')) > 14) {
                possible = false
            }
        }
    })
    if (possible) {
        return sum += gameID
    }
    return sum
}, 0)

//console.log(resulp1);

let resulp2 = data.split('\r\n').reduce((sum, game) => {
    let hands = game.split(':')[1].split(';')
    let gameID = Number(game.split(':')[0].replace(/[A-z]/g, ''))
    let possible = true

    let red = 0, green = 0, blue = 0;
    hands.forEach(hand => {
        let cubes = hand.split(",")
        for (const cube in cubes) {
            const cubeD = cubes[cube]
            if (cubeD.indexOf('red') !== -1) {
                Number(cubeD.replace(/[A-z ]/g, '')) > red ? red = Number(cubeD.replace(/[A-z ]/g, '')) : 1;
            } else if (cubeD.indexOf('green') !== -1) {
                Number(cubeD.replace(/[A-z ]/g, '')) > green ? green = Number(cubeD.replace(/[A-z ]/g, '')) : 1;
            } else if (cubeD.indexOf('blue') !== -1) {
                Number(cubeD.replace(/[A-z ]/g, '')) > blue ? blue = Number(cubeD.replace(/[A-z ]/g, '')) : 1;
            }
        }
    })
    console.log("mins", red, green, blue);


    return sum + (red * green * blue)
}, 0)

console.log(resulp2);