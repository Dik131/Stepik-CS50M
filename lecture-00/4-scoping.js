const log = console.log
//JavaScript Scope

log(thisIsAConst) //ошибка, так как на момент выполнения этой строки эта константа ещё не объявлена
log(thisIsVar) //нет ошибки. Вернёт undefined - это называется hoisting
thisIsHoisted() //нет ошибки, так работают функции
thisIsNotHoisted() //а тут будет ошибка, т.к. это переменная со значением ананимной функции
varFunction() //ошибка, т.к. у var в этой строке ещё нет значения
thisIsGlobalVariable = 'hi' //можно объявить глобальную переменную вообще без ключевого слова

const thisIsAConst = 50
thisIsAConst++ //ошибка, так как это константа

const constObj = {}
constObj.a = 'a' //тут нет ошибки, так как ссылка на объект не изменяется

let thisIsLet = 51
thisIsLet = 50 //тут нет ошибки, так как это переменная
let thisIsLet = 52 //но объявит переменную заново не получится с тем же именем

var thisIsVar = 50
thisIsVar = 51 //нет ошибки
var thisIsVar = 52 //нет ошибки, так как var имеет global scope
var thisIsVar = "New value" //и можно даже так. Глобальная переменная будет просто перезаписана с новым типом и значением

function thisIsHoisted(){
    log('this is a function declared at the bottom of a file')
}

const thisIsNotHoisted = function(){
    log("should this be hoisted?")
}

var varFunction = function() {
    log('error: not a function')
}