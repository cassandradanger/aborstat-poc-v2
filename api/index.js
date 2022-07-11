
const rp = require('request-promise');
const apiKey = process.env.POLICY_API_KEY;

export default function (req, res, next) {
  if (req.url.includes("/gestational_limits")) {
    let stateAbbr = req.originalUrl.slice(-2);
    rp({
      uri: `https://api.abortionpolicyapi.com/v1/gestational_limits/states/${stateAbbr}/`,
      method: 'GET',
      headers: { 
        'token': apiKey,
      },
      json: true
    }).then(function success(response) {
        if (response) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(response));
          return;
        }
    }).catch(function error(response) {
        console.log('error', response.error);
    });
    return;
  }
  next();
}