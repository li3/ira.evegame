module.exports = function(app, passport) {
  var callbackUrl = process.env.EVE_CREST_CALLBACK_URL
  var clientId = process.env.EVE_CREST_CLIENT_ID
  var clientSecret = process.env.EVE_CREST_CLIENT_SECRET

  /*
    Open Shift RHC Commands:
    rhc set-env EVE_CREST_CALLBACK_URL=<url> -a <name>
    rhc set-env EVE_CREST_CLIENT_ID=<client_id> -a <name>
    rhc set-env EVE_CREST_CLIENT_SECRET=<client_secret> -a <name>
  */

  if (!callbackUrl)
    throw 'No callback url specified';

  if (!clientId)
    throw 'No client id specified';

  if (!clientSecret)
    throw 'No client secret specified';

  passport.use('eve-sso', new OAuth2Strategy({
      authorizationURL: 'https://login.eveonline.com/oauth/authorize',
      tokenURL: 'https://login.eveonline.com/oauth/token',
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: callbackUrl
    }, function(token, refreshToken, profile, done) {
      done(null, {});
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};