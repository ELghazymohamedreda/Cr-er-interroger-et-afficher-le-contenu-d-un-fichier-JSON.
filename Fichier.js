function change_slct(sel) {
    if (sel != 0) {
      const child = document.getElementById("donne");
      while (child.hasChildNodes()) {
        child.removeChild(child.firstChild);
      }
      document.getElementById("tbl").style.display = "inline-block";
      var info = new XMLHttpRequest();
      info.open("GET", `${sel}.json`);
      info.onload = function () {
        var dats = JSON.parse(this.responseText);
        afficher(dats);
      };
      info.send();
      function afficher(dats) {
        for (var i = 0; i < dats.length; i++) {
          var news = document.createElement("tr");
          document.getElementById("donne").appendChild(news);
          var news2 = document.createElement("td");
          var news3 = document.createElement("td");
          var news4 = document.createTextNode(dats[i].name);
          var news5 = document.createTextNode(dats[i].age);
          news.appendChild(news2);
          news.appendChild(news3);
          news2.appendChild(news4);
          news3.appendChild(news5);
        }
      }
    } else {
      document.getElementById("tbl").style.display = "none";
    }
  }