const express = require('express');
const router = express.Router();
const axios = require("axios").default

const getData = async (url, params) => {

  const options = {
    method: 'GET',
    url: url,
    params: params && Object.keys(params).length ? params : Tony.Config.rapidApi.params,
    headers: {
      'x-rapidapi-key': Tony.Config.rapidApi.headers.key,
      'x-rapidapi-host': Tony.Config.rapidApi.headers.host
    }
  };

  try {
    return await axios.request(options)
  } catch (e) {
    throw new Error(e.message)
  }
}
module.exports = router.get("/news", async (req, res, next) => {
  getData('https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details', req.params).then(r => res.send(r.data)).catch(e => res.status(400).send(e.message))
}).get("/get-analysis", async (req, res, next) => {
  getData('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis', req.params).then(r => res.send(r.data)).catch(e => res.status(400).send(e.message))
})