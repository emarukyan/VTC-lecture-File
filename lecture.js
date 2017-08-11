const fs = require('fs')

const factorialR = (n) => {
    if (n === 1) {
        return 1
    } else {
        return n * factorialR(n - 1)
    }
}

const factorial = (n) => {
    let f = 1
    for (let i=1; i <= n; i++) {
        f = f * i
    }
    return f
}



const sumNumbers = (a, b) => a + b
const productNumbers = (a, b) => a * b

const somethingRange = (n, m, initialValue, action) => {
    for (let i = n; i < m; i++) {
        initialValue = action(i, initialValue)
    }
    return initialValue
}

var SumCase = true

const sumRange = (n, m) => {
    if (SumCase) {
        return somethingRange(n, m, 0, sumNumbers)
    } else {
        return somethingRange(n, m, 3434, sumNumbers)
    }
}

const productRange = (n, m) => {
    return somethingRange(n, m, 1, productNumbers)
}

// console.log(productRange(1, 10))
// console.log(sumRange(1, 10))

///////////////////////////////////////////////////

const f3 = () => {
    console.log('f4 RUN!')
}

const f2 = () => {
    console.log('f2 ashxatec')
}

console.log('before fopen call ')

fs.open('./lecture.js', 'r', (data) => {
    console.log('lecture opened')
    fs.open('./plan.txt', 'r', () => {
        console.log('plan.txt')
        fs.open('...', () => {
            fs.write('...', data, () => {
                
            })
        })
    })
})



console.log('after fopen call ')
