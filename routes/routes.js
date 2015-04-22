module.exports = function(app, passport) {

  require('./authentication.js')(app, passport);
  require('./index.js')(app, passport);
  
};