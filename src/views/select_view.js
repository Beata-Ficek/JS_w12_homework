const PubSub = require('../helpers/pub_sub');

const SelectView = function (htmlElement) {
    this.htmlElement = htmlElement;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Brewdog-names-ready', (event) => {
        this.populate(event.detail);
    });

    this.htmlElement.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView-change', selectedIndex);
    })
}



SelectView.prototype.populate = function (beerNames) {
    beerNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.textContent = name;
        option.value = index;

        this.htmlElement.appendChild(option);
    });
}

module.exports = SelectView;
