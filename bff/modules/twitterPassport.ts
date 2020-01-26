import BffConst from '../const';
const TwitterStrategy = require('passport-twitter');
const passport = require('passport');

const twitterConsumerKey = BffConst.TWITTER_CONSUMER_KEY;
const twitterSecretKey = BffConst.TWITTER_CONSUMER_SECRET;
const callbackURL = `${BffConst.BASE_URL}${BffConst.CALLBACK_SLUG}`;

passport.serializeUser(function(user :any, done :any) {
  done(null, user);
});
passport.deserializeUser(function(user :any, done :any) {
  done(null, user);
});

passport.use(new TwitterStrategy({
    consumerKey: twitterConsumerKey,
    consumerSecret: twitterSecretKey,
    callbackURL: callbackURL,
  },
  function(token :string, tokenSecret :string, profile :any, done :any) {
    passport.session.id = profile.id;

    // tokenとtoken_secretをセット
    profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;

    done(null, profile);
  }
));

export { passport };
