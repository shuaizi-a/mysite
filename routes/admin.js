var express = require('express');
var router = express.Router();

const { loginService } = require('../service/adminService');

/* GET home page. */
router.post('/login', async function (req, res, next) {
  const { loginId, loginPwd } = req.body;
  if (loginId && loginPwd) {
    // 首先应该有一个验证码的验证

    // 假设上面的验证码已经通过了
    const result = await loginService(req.body);

    res.send({
      code: 0,
      data: result.data,
      msg: '请求成功'
    });
  } else {
    res.send({
      code: 400,
      data: null,
      msg: '参数错误'
    });
  }
});

module.exports = router;
