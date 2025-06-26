async function login(req, res, callback) {
    //если бы это был синхронный код, то мы бы написали его так:
    // const user = User.findOne({email: req.body.email})

    try {
    // но так как это асинхронный код, то мы должны использовать промисы или async/await
    const user = await User.findOne({email: req.body.email})
    const isMatch = await user.comparePassword(req.body.password)
   
    if (!isMatch) return res.status(401).send('Incorrect password')

    const payload = {id: user.id, email: user.email}
    const token = await jwt.sign(payload, config.secret, {})
    
    user.token = token
    const success = user.save()

    res.json({token})
    } catch (error) {
        callback(error)
    }
}