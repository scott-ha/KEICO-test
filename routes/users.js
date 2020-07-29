var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// KEICO login
// http://xiplug.keico.co.kr/rest/login?uid=xpia-dev&pwd=1234
// query string
// /users/login
router.get('/login',
  async function(req, res, next) {
    try {
      const test_id = 'xpia-dev';
      const test_pwd = '1234';

      var uid = req.query.uid;
      var pwd = req.query.pwd;
      var rcd;

      var res_data = {
        "rcd": 0,
        "rms": "",
        "data": {
          "USR_SQ": 2,
          "USR_ID": "xpia-dev",
          "PWD": "1234",
          "USR_GB": 1,
          "USR_NM": "엑스피아개발자",
          "ACCT_DT": null,
          "STE_NM": "부천개발실",
          "STE_SQ": 1,
          "STE_ID": "xpia-dev",
          "OWN_SQ": null,
          "OWN_NM": null
        }
      };

      if (uid == test_id && pwd == test_pwd) {
        rcd = 0;
        res_data.rcd = rcd;
        res.status(200).send(res_data);
        res_data = '';
      } else {
        rcd = 1;
        rms = "ID/PWD  not allowed"
        res_data.rcd = rcd;
        res_data.rms = rms;
        res_data.data = '';
        res.status(200).send(res_data);
        res_data = '';
      }
    } catch (error) {
      console.log(error);
    }

  });

module.exports = router;
