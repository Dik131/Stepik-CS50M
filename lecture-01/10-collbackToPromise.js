const log = console.log
// Было: Callback Hell
// Сценарий: получить пользователя → получить его посты → получить комментарии
function getUserData(userId, callback) {
    setTimeout(() => {
        if (userId <= 0) {
            callback(new Error('Неверный ID пользователя'), null)
            return
        }
        callback(null, { id: userId, name: 'John Doe' })
    }, 1000)
}

function getUserPosts(user, callback) {
    setTimeout(() => {
        if (!user) {
            callback(new Error('Пользователь не найден'), null)
            return
        }
        callback(null, [
            { id: 1, title: 'Пост 1', userId: user.id },
            { id: 2, title: 'Пост 2', userId: user.id }
        ])
    }, 1000)
}

function getPostComments(posts, callback) {
    setTimeout(() => {
        const comments = posts.map(post => ({
            postId: post.id,
            comments: [`Комментарий к ${post.title}`]
        }))
        callback(null, comments)
    }, 1000)
}

// 😵 Использование - Callback Hell:
getUserData(1, function(err, user) {
    if (err) {
        log('Ошибка получения пользователя:', err)
        return
    }
    
    getUserPosts(user, function(err, posts) {
        if (err) {
            log('Ошибка получения постов:', err)
            return
        }
        
        getPostComments(posts, function(err, comments) {
            if (err) {
                log('Ошибка получения комментариев:', err)
                return
            }
            
            log('Результат:', { user, posts, comments })
        })
    })
})

// Решение: Преобразуем в промисы
const log = console.log

// Превращаем функции в Promise-based
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error('Неверный ID пользователя'))
                return
            }
            resolve({ id: userId, name: 'John Doe' })
        }, 1000)
    })
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user) {
                reject(new Error('Пользователь не найден'))
                return
            }
            resolve([
                { id: 1, title: 'Пост 1', userId: user.id },
                { id: 2, title: 'Пост 2', userId: user.id }
            ])
        }, 1000)
    })
}

function getPostComments(posts) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const comments = posts.map(post => ({
                postId: post.id,
                comments: [`Комментарий к ${post.title}`]
            }))
            resolve(comments)
        }, 1000)
    })
}

// 😍 Использование - Promise Chain:
getUserData(1)
    .then(user => {
        log('Пользователь получен:', user)
        return getUserPosts(user)  // Возвращаем Promise
    })
    .then(posts => {
        log('Посты получены:', posts)
        return getPostComments(posts)  // Возвращаем Promise
    })
    .then(comments => {
        log('Комментарии получены:', comments)
        log('🎉 Все данные загружены!')
    })
    .catch(error => {
        log('❌ Произошла ошибка:', error.message)
    })
    .finally(() => {
        log('🏁 Операция завершена')
    })
// Теперь код стал чище и понятнее, без вложенных колбеков!
// Также мы добавили обработку ошибок с помощью catch и finally для завершения операции.
// Это позволяет легко отслеживать ошибки и понимать, что происходит в каждом шаге.