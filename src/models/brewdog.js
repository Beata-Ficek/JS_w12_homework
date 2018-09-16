const Request = require('../helpers/request')
const PubSub = require('../helpers/pub_sub')

const Brewdog = function(){
  this.brewdog = [];
}

Brewdog.prototype.getAllBrewdogData = function(){
  const request = new Request ('https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json')
  request.get((data) => {
  PubSub.publish('brewdog-all-data-ready', data);
  // console.log(data)
  })
}




module.exports = Brewdog;
