const log = console.log
const url = ''

fetch(url) //fetch возвращает Promise
.then(function(res){
    return res.json() // возвращает новый Promise, который будет выполнен, когда данные будут получены
}) //then принимает callback
.then(function(json){
    return ({
        importantData: json.importantData,
        otherData: json.otherData
    })
}) // then возвращает новый Promise, который можно продолжать цепочкой
.then(function(data){
    log(data.importantData)
})
.catch(function(err){
  log(err)
}) // catch принимает callback для обработки ошибок
.finally(function(){
  log('finally')
}) // finally выполняется в любом случае, независимо от успеха или ошибки
//Это нужно для очистки ресурсов, закрытия соединений, логирования и т.д.

//Весь этот подход куда удобнее, чем использование колбеков, потому что он позволяет избежать "callback hell" 
// и делает код более читаемым и понятным.