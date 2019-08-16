var express = require('express');
var router = express.Router();

lastcommitsha = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

var status = {
  [process.env.npm_package_name] : [
    {
      "version": process.env.npm_package_version,
      "description": process.env.npm_package_description,
      "lastcommitsha": lastcommitsha
    },
  ]
}

router.get('/', function (req, res) {
  res.status(200).json(status);
});

module.exports = router;