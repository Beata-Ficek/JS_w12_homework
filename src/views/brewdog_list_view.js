const PubSub = require('../helpers/pub_sub.js');
const BrewdogInfoView = require('./brewdog_info_view');

const BrewdogListView = function (htmlContainer) {
  this.htmlContainer = htmlContainer;
};

BrewdogListView.prototype.bindEvents = function(){
  PubSub.subscribe('Brewdog-all-data-ready', (event) => {
    this.displayBrewdogInfo(event.detail);
  })
}

BrewdogListView.prototype.displayBrewdogInfo = function(beers){
  beers.forEach((beer) => {
    const brewdogItem = this.createBrewdogListItem(beer);
    this.htmlContainer.appendChild(brewdogItem);
    console.log(brewdogItem);
  })
}

BrewdogListView.prototype.createBrewdogListItem = function(beer){
  const brewdogInfoView = new BrewdogInfoView();
  const brewdogInfo = brewdogInfoView.createBrewdogInfo(beer);
  return brewdogInfo;
}


module.exports = BrewdogListView;
