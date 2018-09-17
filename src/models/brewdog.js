const Request = require('../helpers/request')
const PubSub = require('../helpers/pub_sub')

const Brewdog = function(){
  this.brewdog = [];
}

Brewdog.prototype.getAllBrewdogData = function(){
  const request = new Request ('https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json')
  request.get((data) => {
  PubSub.publish('Brewdog-all-data-ready', data);
  // console.log(data)

  PubSub.subscribe('SelectView:change', (event) => {
        const indexIwant = event.detail;
        const brewdogIwant = this.brewdog[indexIwant];
        PubSub.publish('Brewdog-ready', brewdogIwant);
  })
}
Brewdog.prototype.getBrewdogNames = function(){
  this.brewdog = data;
  const onlyNames = [];
  this.brewdog.forEach(beer => {
    onlyNames.push(beer.name)
      // console.log(onlyNames);
  });

  PubSub.publish('Brewdog-names-ready', onlyNames);
}

module.exports = Brewdog;
