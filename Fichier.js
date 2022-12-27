var data;
var info = new XMLHttpRequest();
info.open('GET', 'Fichier.json');
info.onload = function () {
    data = JSON.parse(this.responseText);
    console.log(data)
  };
// <===================== Send dataJSON ==================================>
info.send();