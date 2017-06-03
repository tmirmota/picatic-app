var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

const API_KEY = 'sk_live_210eb57e6b95e5143c492a219091c4e5';

/* GET home page. */
router.get('/:path', function(req, res) {
  const path = req.params.path;

  fetch(`https://api.picatic.com/v2/${path}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  })
  // Resolve promise
  .then(apiRes => apiRes.json())
  .then(apiRes => res.json(apiRes))
  .catch(err => res.status(err.status).json(err.body));
})

module.exports = router;
