const express = require('express');
const router = express.Router();
import BffConst from '../const';
const login_controller = require('../controllers/loginController');
const muter_controller = require('../controllers/muterController');
const common_controller = require('../controllers/commonController');
const auth = require('../modules/twitterPassport');
const passport = auth.passport;

// ログイン
router.get(BffConst.LOGIN_CHECK_SLUG, login_controller.login_check);
router.get(BffConst.TWITTER_LOGIN_SLUG, passport.authenticate('twitter'));
router.get(BffConst.CALLBACK_SLUG, passport.authenticate('twitter',
{
  successRedirect: BffConst.LOGIN_SUCESS,
  failureRedirect: BffConst.LOGIN_FAILED,
  })
);
router.get(BffConst.LOGIN_SUCESS, login_controller.login_success);

// 共通API
router.get(BffConst.USER_INFO_SLUG, common_controller.user_info);

// ミュートリマインダーAPI
router.get(BffConst.MUTED_LIST_SLUG, muter_controller.muter_muted_users);
router.get(`${BffConst.UNMUTE_USER_SLUG}/:screen_name`, muter_controller.muter_unmute_user);
router.get(`${BffConst.MUTE_USER_SLUG}/:screen_name`, muter_controller.muter_mute_user);

module.exports = router;
