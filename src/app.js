const Brewdog = require ('./models/brewdog');
const BrewdogListView = require('./views/brewdog_list_view')
const SelectView = require ('./views/select_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listContainer = document.querySelector('#brewdog-list');
  const brewdogListView = new BrewdogListView(listContainer);
    brewdogListView.bindEvents();

  const dropdown = document.querySelector('#brewdogs')
  const selectView = new SelectView(dropdown);
  selectView.bindEvents();

  const brewdog = new Brewdog();
  brewdog.getAllBrewdogData();
})
