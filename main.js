$(function() {
  $('#getSpecified').click(getCountry);
  $('#getAll').click(getAll);
  $('#clearContent').click(clearContent);

  function clearContent() {
    $('#userInput').val('');
    $("#main").fadeOut(1000, function() {
      $(this).empty();
    });
  }

  function getAll() {
    $.get("https://restcountries.eu/rest/v2/all", function(data) {
      for (var i = 0; i < data.length; i++) {
        var country = new Country(data[i].name, data[i].flag, data[i].capital, data[i].languages, data[i].population);
        country.draw();
      }
    });
  }

  function getCountry() {
    var value = $('#userInput').val();
    $.ajax({
      url: "https://restcountries.eu/rest/v2/name/" + value,
      method: "GET",
      success: function(data) {
        var country = new Country(data[0].name, data[0].flag, data[0].capital, data[0].languages, data[0].population);
        country.draw();
      },
      error: function() {
        alert("No Country Found");
      }
    });
  }




})
