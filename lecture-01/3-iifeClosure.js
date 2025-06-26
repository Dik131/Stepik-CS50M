const log = console.log

function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++){ 
        arr.push((function(x) {
            // Замыкание - функция, которая запоминает свое окружение
            // и может использовать переменные из этого окружения
            // В данном случае, мы создаем IIFE, которая принимает i как аргумент
            // и возвращает функцию, которая использует это значение i
            // Это позволяет избежать проблемы с замыканием в цикле
            return function () { console.log(x)} 
        })(i)) // IIFE - Immediately Invoked Function Expression
        // Создаем функцию, которая сразу вызывается и возвращает нужную функцию
    }
    
    return arr
}

const functionArr = makeFunctionArray()

functionArr[0]() // 0
functionArr[1]() // 1