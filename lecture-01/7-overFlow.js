const log = console.log
function recurse() {
    log('recurssion!')
    return recurse()
}

recurse()