module.exports = function(app, passport) {

  app.get('/test', passport.authenticate('eve-sso', {scope: 'publicData'}));

  app.get('/auth/callback', function(req, res, next) {
    passport.authenticate('eve-sso', {
      successRedirect: '/',
      failureRedirect: '/auth/failure'
    })(req, res, next);
  });

  app.get('/auth/failure', function(req, res, next) {
    res.render('auth/failure', {});
  });
  
};