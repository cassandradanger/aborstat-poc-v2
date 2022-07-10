const { Router } = require('express')
const rp = require('request-promise');
const apiKey = process.env.POLICY_API_KEY;
const router = Router()

// Mock Users
const states = [
      {
        name: 'Alabama',
        abbr: 'AL'
      },
      {
        name: 'Alaska',
        abbr: 'AK'
      },
      {
        name: 'Arizona',
        abbr: 'AZ'
      },
      {
        name: 'Arkansas',
        abbr: 'AR'
      },
      {
        name: 'California',
        abbr: 'CA'
      },
      {
        name: 'Colorado',
        abbr: 'CO'
      },
      {
        name: 'Connecticut',
        abbr: 'CT'
      },
      {
        name: 'Delaware',
        abbr: 'DE'
      },
      {
        name: 'Florida',
        abbr: 'FL'
      },
      {
        name: 'Georgia',
        abbr: 'GA'
      },
      {
        name: 'Hawaii',
        abbr: 'HI'
      },
      {
        name: 'Idaho',
        abbr: 'ID'
      },
      {
        name: 'Illinois',
        abbr: 'IL'
      },
      {
        name: 'Indiana',
        abbr: 'IN'
      },
      {
        name: 'Iowa',
        abbr: 'IA'
      },
      {
        name: 'Kansas',
        abbr: 'KS'
      },
      {
        name: 'Kentucky',
        abbr: 'KY'
      },
      {
        name: 'Louisiana',
        abbr: 'LA'
      },
      {
        name: 'Maine',
        abbr: 'ME'
      },
      {
        name: 'Maryland',
        abbr: 'MD'
      },
      {
        name: 'Massachusetts',
        abbr: 'MA'
      },
      {
        name: 'Michigan',
        abbr: 'MI'
      },
      {
        name: 'Minnesota',
        abbr: 'MN'
      },
      {
        name: 'Mississippi',
        abbr: 'MS'
      },
      {
        name: 'Missouri',
        abbr: 'MO'
      },
      {
        name: 'Montana',
        abbr: 'MT'
      },
      {
        name: 'Nebraska',
        abbr: 'NE'
      },
      {
        name: 'Nevada',
        abbr: 'NV'
      },
      {
        name: 'New Hampshire',
        abbr: 'NH'
      },
      {
        name: 'New Jersey',
        abbr: 'NJ'
      },
      {
        name: 'New Mexico',
        abbr: 'NM'
      },
      {
        name: 'New York',
        abbr: 'NY'
      },
      {
        name: 'North Carolina',
        abbr: 'NC'
      },
      {
        name: 'North Dakota',
        abbr: 'ND'
      },
      {
        name: 'Ohio',
        abbr: 'OH'
      },
      {
        name: 'Oklahoma',
        abbr: 'OK'
      },
      {
        name: 'Oregon',
        abbr: 'OR'
      },
      {
        name: 'Pennsylvania',
        abbr: 'PA'
      },
      {
        name: 'Rhode Island',
        abbr: 'RI'
      },
      {
        name: 'South Carolina',
        abbr: 'SC'
      },
      {
        name: 'South Dakota',
        abbr: 'SD'
      },
      {
        name: 'Tennessee',
        abbr: 'TN'
      },
      {
        name: 'Texas',
        abbr: 'TX'
      },
      {
        name: 'Utah',
        abbr: 'UT'
      },
      {
        name: 'Vermont',
        abbr: 'VT'
      },
      {
        name: 'Virginia',
        abbr: 'VA'
      },
      {
        name: 'Washington',
        abbr: 'WA'
      },
      {
        name: 'West Virginia',
        abbr: 'WV'
      },
      {
        name: 'Wisconsin',
        abbr: 'WI'
      },
      {
        name: 'Wyoming',
        abbr: 'WY'
      },
    ]
  
/* GET users listing. */
router.get('/info/list-of-states', function (req, res, next) {
  res.json(states)
})


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



module.exports = router
