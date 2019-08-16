var express = require('express');
var router = express.Router();

var status = {
  [process.env.npm_package_name] : [
    {
      "version": process.env.npm_package_version,
      "description": process.env.npm_package_description,
      "lastcommitsha": process.env.LAST_COMMIT_SHA
    },
  ]
}

router.get('/', function (req, res) {
  res.status(200).json(status);
});

module.exports = router;