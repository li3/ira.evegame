module.exports = function(app, passport) {
  /* GET home page. */
  app.get('/', function(req, res, next) {

    var cache = [];
    var convertedRequest = JSON.stringify(req, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }

      return value;
    }, 2);

    res.render('index', { working: 'yes', request: convertedRequest});
  });

};