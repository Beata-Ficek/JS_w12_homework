const Request = require('../helpers/request')
const PubSub = require('../helpers/pub_sub')

const Brewdog = function(){
  this.brewdog = [];
}

Brewdog.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView-change', (event) => {
        const indexIwant = event.detail;
        const brewdogIwant = this.brewdog[indexIwant];
        PubSub.publish('Brewdog-ready', brewdogIwant);
  })
}

Brewdog.prototype.getAllBrewdogData = function(){
  const request = new Request ('https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json')
  request.get((data) => {
    this.brewdog = data;
    PubSub.publish('Brewdog-all-data-ready', data);
    this.getBrewdogNames(data);
  })
}

Brewdog.prototype.getBrewdogNames = function(){
  const onlyNames = [];
  this.brewdog.forEach(beer => {
    onlyNames.push(beer.name)
      // console.log(onlyNames);
  });
  PubSub.publish('Brewdog-names-ready', onlyNames);
}

module.exports = Brewdog;
