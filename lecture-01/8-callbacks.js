const log = console.log

//doSomething - это HOC (Higher Order Component), который принимает функцию, в качестве аргумента - коллбэка
const doSomething = (callback) => {
  setTimeout(() => callback(1), 1000)
}

doSomething(log)
