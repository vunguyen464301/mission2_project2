const axios = require('axios');
// var data;
axios.get('http://localhost:3000/poultrys')
  .then(response => {

    router.get('/', function(req, res, next) {
      res.render('index',{data:response.data});
    });
    
  })
  .catch(error => {
    console.log(error);
  });
const router = require('express').Router();

/* GET home page. */
module.exports = router;
