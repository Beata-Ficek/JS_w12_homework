
const BrewdogInfoView = function () {

}

BrewdogInfoView.prototype.createBrewdogInfo = function (beer) {
  const brewdogInfo = document.createElement('div');
  brewdogInfo.classList.add('brewdog-detail');

  const name = document.createElement('h2');
  name.textContent = beer.name;
  brewdogInfo.appendChild(name);

  const tagline = document.createElement('h3');
  tagline.textContent = beer.tagline;
  brewdogInfo.appendChild(tagline);

  const description = document.createElement('p');
  description.textContent = beer.description;
  brewdogInfo.appendChild(description);

  return brewdogInfo;
};


module.exports = BrewdogInfoView;
