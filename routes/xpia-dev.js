var express = require('express');
var router = express.Router();

var gtw_id, dev_id;
/* GET users listing. */
router.get('/plugs',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": 0,
        "rms": "",
        "data": [{
            "DEV_SQ": 588,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7B42D1",
            "DEV_NM": "842E14FFFE7B42D1",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 2,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 587,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7B44D4",
            "DEV_NM": "842E14FFFE7B44D4",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 4,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 589,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7B45AB",
            "DEV_NM": "842E14FFFE7B45AB",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 26,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 590,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D383D",
            "DEV_NM": "842E14FFFE7D383D",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 4,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 591,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D39E0",
            "DEV_NM": "842E14FFFE7D39E0",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 2,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 592,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D3B97",
            "DEV_NM": "842E14FFFE7D3B97",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 3,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 593,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D3BDA",
            "DEV_NM": "842E14FFFE7D3BDA",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 3,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 595,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D3BFB",
            "DEV_NM": "842E14FFFE7D3BFB",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 29,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 594,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "842E14FFFE7D3DF7",
            "DEV_NM": "842E14FFFE7D3DF7",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 1,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 2,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 585,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFE6FDF72",
            "DEV_NM": "90FD9FFFFE6FDF72",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 1,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 571,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFE6FDFE6",
            "DEV_NM": "90FD9FFFFE6FDFE6",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 1,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 182,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFE6FE065",
            "DEV_NM": "90FD9FFFFE6FE065",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 1,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 562,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFEB8F4A8",
            "DEV_NM": "90FD9FFFFEB8F4A8",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 1,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 1001,
            "ZB_ONGRP_RID": 2001,
            "ZB_OFFGRP_RID": 3001,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 583,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFEB8F5C0",
            "DEV_NM": "90FD9FFFFEB8F5C0",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 0,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 0,
            "ZB_ONGRP_RID": 0,
            "ZB_OFFGRP_RID": 0,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          },
          {
            "DEV_SQ": 557,
            "STE_ID": "xpia-dev",
            "GTW_ID": "1",
            "DEV_ID": "90FD9FFFFEB8F5C8",
            "DEV_NM": "90FD9FFFFEB8F5C8",
            "KND_CD": null,
            "MDL_CD": null,
            "COM_ST": 2,
            "STAT": 1,
            "SW_ST": 0,
            "KW": 0,
            "AKWH": 1,
            "STBY_KW": 0,
            "OFF_DELY": 0,
            "MANU_CTL_ALLOW": 1,
            "GRP_SQ": 0,
            "ZB_RGRP_RID": 0,
            "ZB_ONGRP_RID": 0,
            "ZB_OFFGRP_RID": 0,
            "ZB_RGRP_AID": 1001,
            "ZB_ONGRP_AID": 2001,
            "ZB_OFFGRP_AID": 3001
          }
        ]
      }
      res.status(200).send(res_data);
      res_data = '';
    } catch (error) {
      console.log(error);
    }
  });
router.get('/1/90FD9FFFFEB8F916/on',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": "0",
        "rms": "플러그 ON 제어요청 성공",
        "data": {}
      }

      res.status(200).send(res_data);
      res_data = '';
    } catch (e) {
      console.error(error);
    }
  });
// router.get('/' + gtw_id + '/' + dev_id + '/off',
router.get('/1/90FD9FFFFEB8F916/off',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": "0",
        "rms": "플러그 OFF 제어요청 성공",
        "data": {}
      }

      res.status(200).send(res_data);
      res_data = '';
    } catch (e) {
      console.error(error);
    }
  });

router.get('/on',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": "0",
        "rms": "플러그 ALL ON 제어요청 성공",
        "data": {}
      }

      res.status(200).send(res_data);
      res_data = '';
    } catch (e) {
      console.error(e);
    }
  });

router.get('/off',
  async function(req, res, next) {
    try {
      var res_data = {
        "rcd": "0",
        "rms": "플러그 ALL OFF 제어요청 성공",
        "data": {}
      }

      res.status(200).send(res_data);
      res_data = '';
    } catch (e) {
      console.error(e);
    }
  });

module.exports = router;
