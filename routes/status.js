var express = require('express');
var router = express.Router();

if(process.env.LAST_COMMIT_SHA) {
  last_commit_sha = process.env.LAST_COMMIT_SHA;
}
else {
  last_commit_sha = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString().trim()  
}

var status = {
  [process.env.npm_package_name] : [
    {
      "version": process.env.npm_package_version,
      "description": process.env.npm_package_description,
      "lastcommitsha": last_commit_sha
    },
  ]
}

router.get('/', function (req, res) {
  res.status(200).json(status);
});

module.exports = router;