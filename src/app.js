const Brewdog = require ('./models/brewdog');
const BrewdogListView = require('./views/brewdog_list_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listContainer = document.querySelector('#brewdog-list');
  const brewdogListView = new BrewdogListView(listContainer);
    brewdogListView.bindEvents();


  const brewdog = new Brewdog;
  brewdog.getAllBrewdogData();
})
