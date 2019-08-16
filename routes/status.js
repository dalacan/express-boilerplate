var express = require('express');
var router = express.Router();

if(process.env.SOURCE_COMMIT) {
  // Return last commit hash at build time set in environment variable (for docker)
  last_commit_sha = process.env.SOURCE_COMMIT;
}
else {
  // Return last commit hash at build time from git
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