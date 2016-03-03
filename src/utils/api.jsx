var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'f813c5580f15c14';

module.exports = window.api = {
  get: function(url){
    return fetch(rootUrl + url,{
      //defining configuration options
      headers: {
        //'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){ //promises
      return response.json()
    });
  }
};

//Api.get('images') --images = url
