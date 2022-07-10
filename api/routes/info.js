const { Router } = require('express')
const rp = require('request-promise');
const apiKey = process.env.POLICY_API_KEY;
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/info/gestational_limits/:state', function (req, res, next) {
  rp({
    uri: `https://api.abortionpolicyapi.com/v1/gestational_limits/states/${req.params.state}/`,
    method: 'GET',
    headers: { 
      'token': apiKey,
    },
    json: true
  }).then(function success(response) {
      if (response) {
        console.log('hello', response);
        res.status(200).json([response]);
      }
  }).catch(function error(response) {
      console.log('error', response.error);
  });
})

/* GET user by ID. */
router.get('/info/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < info.length) {
    res.json(info[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
