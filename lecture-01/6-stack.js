const log = console.log// Функция для вывода в консоль

// const a = () => {
//     log('hi')
// }
// const b = () => {
//     a()
// }
// const c = () => {
//     b()
// }

// c() // Выводит 'hi'

// function addOne(num) {
//     return num + 1 // Функция, которая принимает число и возвращает его увеличенным на 1
// }


function addOne(num) {
    throw new Error('Oh, no, an error!') // Функция, которая принимает число и выбрасывает ошибку
}

function getNum() { 
    return addOne(5) // Функция, которая возвращает результат вызова addOne с аргументом 5
}

function c() {
    log(getNum() + getNum()) // Функция, которая выводит в консоль сумму двух вызовов getNum
}

c() // Выводит 12, так как getNum() возвращает 6, и 6 + 6 = 12