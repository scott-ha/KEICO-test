var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/xpia-dev',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": 0,
        "rms": "",
        "data": {
          "STE_SQ": 1,
          "OWN_SQ": 1,
          "STE_ID": "xpia-dev",
          "STE_NM": "부천개발실",
          "INS_DT": "2019-10-18 00:00:00",
          "TEL_NO": "010-213-5411",
          "ADDR": "경기 부천 "
        }
      }
      res.status(200).send(res_data);
      res_data = '';
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
