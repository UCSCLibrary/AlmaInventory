// Location dropdown menu and validation
// Code borrowed from Kansas State Libraries
// https://github.com/kstatelibraries
// Thank you rdeiser!

$(document).ready(function(){
  var libraryObject = {
    "McHenry": {
      "mycur": "Child Curriculum",
      "mycov": "Child Curriculum Oversize",
      "mcheast": "East Asian Collection",
      "mgcal": "Gov Pubs Cal Docs",
      "mgcov": "Gov Pubs Cal Docs Oversize",
      "mgmf": "Gov Pubs Microform",
      "mgrce": "Gov Pubs Ref Census",
      "mgus": "Gov Pubs US Docs",
      "mguov": "Gov Pubs US Docs Oversize",
      "mcper": "McHenry Current Journals",
      "mheqp": "McHenry Equipment",
      "mswest": "McHenry WEST",
      "mprot": "McH Protect",
      "mprov": "McH Protect Oversize",
      "mref": "McH Ref",
      "mratl": "McH Ref Atlas",
      "mrdsk": "McH Ref Desk",
      "mrovr": "McH Ref Oversize",
      "mstax": "McH Stacks",
      "mstov": "McH Stacks Oversize",
      "mform": "Microform",
      "mfgde": "Microform Guide",
      "mnews": "Newspapers",
      "mhres": "Reserves McH",
    },
    "S & E": {
      "east": "East Asian Collection",
      "scres": "Reserves S&E",
      "scper": "S&E Current Journals",
      "sequp": "S&E Equipment",
      "sgame": "S&E Games",
      "smaps": "S&E Maps",
      "sovat": "S&E Oversize Atlas",
      "scpro": "S&E Protect",
      "sread": "S&E Reading",
      "sstax": "S&E Stacks",
      "sstov": "S&E Stacks Oversize",
      "sswest": "S&E WEST",
    },
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
      for (var x in selectedLibrary) {
        locationSel.options[locationSel.options.length] = new Option(selectedLibrary[x], x);
      }
    }
  }
});
