function Country(name, flag, capital, languages, population) {
  this.name = name;
  this.flag = flag;
  this.capital = capital;
  this.languages = this.setLanguages(languages);
  this.population = population;
}

Country.prototype.setLanguages= function(languages){
  var newLanguages = [];
  languages.forEach(function(val) {
    newLanguages.push(val.name);
  });
  return newLanguages;
}

Country.prototype.draw = function () {
    var newCountry = $("<div>").addClass("col-md-3 country");
    var flag = $("<img>").attr("src", this.flag).addClass("round");
    var name = $("<h2>").text(this.name);
    var capital = $("<h5>").text(this.capital);
    var population = $("<p>").text("Population: " + this.population);
    var languages = $("<p>").text("Languages: " + this.languages);
    newCountry.append(flag);
    newCountry.append(name);
    newCountry.append(capital);
    newCountry.append(population);
    newCountry.append(languages);
    newCountry.hide().appendTo("#main").fadeIn(1000);
};
