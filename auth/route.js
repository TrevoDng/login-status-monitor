const express = require("express");
const router = express.Router();

const { logIn } = require("../routes/queries") ;

router.route("/login").get(logIn);

module.exports = router

