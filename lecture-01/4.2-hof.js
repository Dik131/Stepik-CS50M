// Функция map применяет функцию func к каждому элементу массива array и возвращает новый массив с результатами
function map(array, func) {
    const result = [] // создаём новый массив для результатов
    array.forEach(function(val){
        result.push(func(val)) // применяем функцию к элементу и добавляем в результат
    }) // перебираем каждый элемент массива
    return result // возвращаем новый массив
}

// Функция filter возвращает новый массив, содержащий только те элементы array, для которых func возвращает true
function filter(array, func) {
    const result = [] // создаём новый массив для результатов
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) { // если функция возвращает true для элемента
            result.push(array[i]) // добавляем элемент в результат
        }
    }
    return result // возвращаем новый массив
}

// Функция reduce сводит массив к одному значению, используя функцию func и начальное значение initialValue
function reduce(array, func, initialValue) {
    // Если initialValue задано, используем его, иначе берём первый элемент массива
    let accumulator = initialValue !== undefined ? initialValue : array[0]
    // Если initialValue задано, начинаем с 0, иначе с 1 (так как первый элемент уже в аккумуляторе)
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        accumulator = func(accumulator, array[i]) // применяем функцию к аккумулятору и текущему элементу
    }
    return accumulator // возвращаем итоговое значение
}

const x = [0, 1, 2, 3, 4, 5]

// Пример использования map: увеличиваем каждый элемент на 1
console.log(map(x, (num) => num + 1)) // [1, 2, 3, 4, 5, 6]

// Пример использования filter: оставляем только элементы больше 1
console.log(filter(x, (num) => num > 1)) // [2, 3, 4, 5]

// Пример использования reduce: суммируем все элементы массива, начальное значение 0
console.log(reduce(x, (acc, num) => acc + num, 0)) // 15