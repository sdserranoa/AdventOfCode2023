const fs = require("fs");
let data = fs.readFileSync('./day1.txt', { encoding: 'ascii' })

resulp1 = data.split('\r\n').reduce((sum, val) => {
    let tmp = val.replace(/[A-z]/g, '')
    return sum + Number(tmp[0] + tmp[tmp.length - 1])
}, 0)
//console.log(resulp1);

nums = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
};

let sum = 0;
let findex;
let lindex;
let fnumber;
let lnumber;

resulp2 = data.split('\r\n')
    .forEach(val => {
        findex = val.length;
        lindex = -1;
        for (const number in nums) {
            if (val.indexOf(number) !== -1 && val.indexOf(number)<findex) {
                findex = val.indexOf(number)
                fnumber = nums[number]
            }
            if (val.lastIndexOf(number) !== -1 && val.lastIndexOf(number)>lindex) {
                lindex = val.lastIndexOf(number)
                lnumber = nums[number]
            }
        }
        sum+= Number(fnumber + lnumber)
    })

console.log(sum);

