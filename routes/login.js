var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("login");
    //res.send('respond with a resource');
  });

  module.exports = router;