function login(req, res, callback) {
  User.findOne({email: req.body.email})
    .then(function(user) {
      if (!user) {
        return res.status(401).send('User not found');
      }
      return user.comparePassword(req.body.password)
        .then(function(isMatch) {
          if (!isMatch) {
            return res.status(401).send('Incorrect password');
          }
          const payload = {id: user.id, email: user.email};
          return jwt.sign(payload, config.secret, {});
        })
        .then(function(token) {
          user.token = token;
          return user.save();
        })
        .then(function() {
          res.json({token});
        });
    })
    .catch(function(err) {
      callback(err);
    });
}