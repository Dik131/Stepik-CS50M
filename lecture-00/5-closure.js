function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++){ //сейчас вы поймёте почему лучше использовать let, а не var
        arr.push(function() {
            console.log(i)
        })
    }
    return arr
}

const arr = makeFunctionArray()

arr[0]() //что вы ожидаете в терминале?