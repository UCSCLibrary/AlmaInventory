// START -- Enable user dropdown location validation -- added by K-State Libraires 06/2023

$(document).ready(function(){
  var libraryObject = {
  }

  window.onload = function () {
    var librarySel = document.getElementById("libraryCode");
    var locationSel = document.getElementById("locationCode");

    for (var x in libraryObject) {
      librarySel.options[librarySel.options.length] = new Option(x, x);
    }
    librarySel.onchange = function() {
      var selectedLibrary = libraryObject[this.value];
      locationSel.length = 1;
      selectedLibrary.forEach(function(location) {
        locationSel.options[locationSel.options.length] = new Option(location, location);
      })
    }
  }
});
