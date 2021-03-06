var sessionManager = require('../../controllers/session_manager_ctrl');
var express = require('express');
var router = express.Router();
var expressValidate = require('express-validation');
var apis = require('../../controllers/api_ctrl.js');
var utils = require('../../utils/') ;
var validations = require('../validations');


router.get('/', apis.index, utils.httpResponse);
/* GET users listing. */
router.get('/users', utils.logHttpReq, sessionManager.sessionChecker , expressValidate(validations.getUsers), utils.validationResponse, apis.getAllUsers, utils.httpResponse);
/*POST request for Signup */
router.post('/signup', utils.logHttpReq, expressValidate(validations.signup), utils.validationResponse, apis.signup, utils.httpResponse);
/*POST request for login */
router.post('/login', utils.logHttpReq, expressValidate(validations.login), utils.validationResponse, apis.login, utils.httpResponse);
/*POST request for Signup*/
router.post('/accounts', utils.logHttpReq,expressValidate(validations.createAccount), utils.validationResponse, apis.createAccount, utils.httpResponse);
/*GET accounts of specific users.  */
router.get('/accounts', utils.logHttpReq ,expressValidate(validations.getAccounts), utils.validationResponse, apis.getAccounts, utils.httpResponse);
/*GET accounts of specific users.  */
router.put('/accounts', utils.logHttpReq,expressValidate(validations.updateAccount), utils.validationResponse, apis.updateAccount, utils.httpResponse);
/*GET accounts of specific users.  */
router.delete('/accounts', utils.logHttpReq,expressValidate(validations.deleteAccount), utils.validationResponse, apis.deleteAccount, utils.httpResponse);
/*GET coins listing.  */    
router.get('/coins', utils.logHttpReq, expressValidate(validations.getCoins), utils.validationResponse, apis.getAllCoins, utils.httpResponse );
/*POST new coin.  */
router.post('/coins', utils.logHttpReq, expressValidate(validations.createCoins), utils.validationResponse, apis.createCoins, utils.httpResponse );
/*POST sendiOtp request.  */
router.post('/otp', utils.logHttpReq, utils.validationResponse, apis.sendOtp, utils.httpResponse );
/*POST request for Transaction*/
router.post('/transaction', utils.logHttpReq,expressValidate(validations.createTransaction), utils.validationResponse, apis.createTransaction, utils.httpResponse);
/*GET transactions listing.  */
router.get('/transaction', utils.logHttpReq ,expressValidate(validations.getTransaction), utils.validationResponse, apis.getTransactions, utils.httpResponse);
/*GET Address Balance.  */
router.post('/balance', utils.logHttpReq ,expressValidate(validations.getBalance), utils.validationResponse, apis.getBalance, utils.httpResponse);
/*GET transactions listing.  */
router.post('/block', utils.logHttpReq ,expressValidate(validations.getBlock), utils.validationResponse, apis.getBlock, utils.httpResponse);
/*GET transactions listing.  */
router.get('/gasprice', utils.logHttpReq ,expressValidate(validations.getGasPrice), utils.validationResponse, apis.getCurrentGasPrice, utils.httpResponse);

module.exports = router;

