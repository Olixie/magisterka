"use strict";

var imagesArray = ["1.jpg", "11.jpg", "2.jepg", "22.jpg", "3.jpg", "4.png", "44.png"]; //tablica z normalnymi reklamami

var imagesNormalArray = ["1.jpg", "2.jpg", "3.png", "4.PNG", "5.jpg", "6.jpg", "7.png", "8.png", "9.jpg", "10.jpg", "11_2.png"]; //tablica z komiksami

var imagesComicsArray = ["11.png", "22.png", "33.png", "44.png", "55.png", "66.jpg", "77.jpg", "88.png", "99.jpg", "1010.png", "1111.png"]; //tablica z wspolnymi

var imagesMixArray = ["111.jpg", "666.jpg", "777.jpg", "888.png"]; //tablica wynik

var listaObrazow = [];
var wynikBadanego = [];
var czasBadanego_div1 = [];
var czasBadanego_div2 = [];
var czasBadanego_div3 = [];
var start_time1;
var end_time1;
var suma1 = 0;
var start_time2;
var end_time2;
var suma2 = 0;
var start_time3;
var end_time3;
var suma3 = 0; //Mapa cieplna

var heatmap = []; // Get the button, and when the user clicks on it, execute myFunction

document.addEventListener('DOMContentLoaded', function () {
  //var timestamp = new Date();
  //var hashNick = btoa(unescape(encodeURIComponent(timestamp)));
  //console.log("nick: ", JSON.stringify(timestamp));
  //localStorage.setItem("nick", JSON.stringify(timestamp));
  document.getElementById("showRndmdiv").addEventListener("click", displayImage);
  var nameObr;
  var countButton = 0; //ZALADOWANIE 1 SEKWENCJI

  if (countButton == 0) {
    document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[0];
    document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[0];
  }

  var imageIsClicked = false;

  if (imageIsClicked == false) {
    document.getElementById("showRndmdiv").disabled = true;
  } //Czy kliknieto w obrazek - add ramka


  document.getElementById("canvas1").addEventListener("click", clickHandler1);
  document.getElementById("canvas2").addEventListener("click", clickHandler2);
  document.getElementById("canvas3").addEventListener("click", clickHandler3); //czy najechano na div

  document.getElementById("canvas1").addEventListener("mouseover", najechanoMyszka1);
  document.getElementById("canvas1").addEventListener("mouseout", opuszczonoMyszka1);
  document.getElementById("canvas2").addEventListener("mouseover", najechanoMyszka2);
  document.getElementById("canvas2").addEventListener("mouseout", opuszczonoMyszka2);
  document.getElementById("canvas3").addEventListener("mouseover", najechanoMyszka3);
  document.getElementById("canvas3").addEventListener("mouseout", opuszczonoMyszka3);

  function clickHandler1() {
    imageIsClicked = true;
    nameObr = document.getElementById("canvas1").src;
    document.getElementById("canvas1").style.border = "thick solid red";
    document.getElementById("canvas2").style.border = "none";
    document.getElementById("canvas3").style.border = "none";
    console.log(imageIsClicked);
    document.getElementById("showRndmdiv").disabled = false;
    document.getElementById("showRndmdiv").classList.add("onlock"); //gdy zaznacza usuwa sie info

    document.getElementById("alert").style.display = "none";
  }

  function clickHandler2() {
    imageIsClicked = true;
    nameObr = document.getElementById("canvas2").src;
    document.getElementById("canvas2").style.border = "thick solid red";
    document.getElementById("canvas1").style.border = "none";
    document.getElementById("canvas3").style.border = "none";
    console.log(imageIsClicked);
    document.getElementById("showRndmdiv").disabled = false;
    document.getElementById("showRndmdiv").classList.add("onlock"); //gdy zaznacza usuwa sie info

    document.getElementById("alert").style.display = "none";
  }

  function clickHandler3() {
    imageIsClicked = true;
    nameObr = document.getElementById("canvas3").src;
    document.getElementById("canvas3").style.border = "thick solid red";
    document.getElementById("canvas1").style.border = "none";
    document.getElementById("canvas2").style.border = "none";
    console.log(imageIsClicked);
    document.getElementById("showRndmdiv").disabled = false;
    document.getElementById("showRndmdiv").classList.add("onlock"); //gdy zaznacza usuwa sie info

    document.getElementById("alert").style.display = "none";
  }

  function najechanoMyszka1() {
    console.log("4 ".concat(suma1));
    start_time1 = new Date().getTime();
    console.log("1 ".concat(start_time1));
  }

  function opuszczonoMyszka1() {
    end_time1 = new Date().getTime();
    console.log("2 ".concat(end_time1));
    var all_time = end_time1 - start_time1;
    suma1 = suma1 + all_time;
    console.log("3 ".concat(suma1));
  }

  function najechanoMyszka2() {
    console.log("4 ".concat(suma2));
    start_time2 = new Date().getTime();
    console.log("1 ".concat(start_time2));
  }

  function opuszczonoMyszka2() {
    end_time2 = new Date().getTime();
    console.log("2 ".concat(end_time2));
    var all_time = end_time2 - start_time2;
    suma2 = suma2 + all_time;
    console.log("3 ".concat(suma2));
  }

  function najechanoMyszka3() {
    console.log("4 ".concat(suma3));
    start_time3 = new Date().getTime();
    console.log("1 ".concat(start_time3));
  }

  function opuszczonoMyszka3() {
    end_time3 = new Date().getTime();
    console.log("2 ".concat(end_time3));
    var all_time = end_time3 - start_time3;
    suma3 = suma3 + all_time;
    console.log("3 ".concat(suma3));
  } //Klikniecie w przycisk next


  function displayImage() {
    countButton++;
    var imageIsClicked = false;

    if (imageIsClicked == false) {
      document.getElementById("showRndmdiv").disabled = true;
      document.getElementById("showRndmdiv").classList.remove("onlock");
      document.getElementById("alert").style.display = "flex";
    }

    document.getElementById("canvas1").style.border = "none";
    document.getElementById("canvas2").style.border = "none";
    document.getElementById("canvas3").style.border = "none";
    console.log(countButton); //jaki obraz wybrano

    console.log(nameObr);
    console.log(imageIsClicked);
    var parts4 = nameObr.split('/');
    var answer4 = parts4[parts4.length - 1];
    wynikBadanego.push(answer4);
    console.log(wynikBadanego);
    localStorage.setItem("nazwa", JSON.stringify(wynikBadanego)); //zapis czasu do local storage

    console.log("Suma z 1: ".concat(suma1));
    czasBadanego_div1.push(suma1);
    localStorage.setItem("czas1", JSON.stringify(czasBadanego_div1));
    suma1 = 0;
    console.log("Suma z 1: ".concat(suma2));
    czasBadanego_div2.push(suma2);
    localStorage.setItem("czas2", JSON.stringify(czasBadanego_div2));
    suma2 = 0;
    console.log("Suma z 1: ".concat(suma3));
    czasBadanego_div3.push(suma3);
    localStorage.setItem("czas3", JSON.stringify(czasBadanego_div3));
    suma3 = 0;
    console.log("niezeruje: ".concat(suma1));
    var num = Math.floor(Math.random() * 10); // 0...11

    var num3 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 3); //..4
    //document.getElementById("canvas1").src = 'obrazy/'+ imagesNormalArray[num];
    //document.getElementById("canvas2").src = 'obrazy/'+ imagesComicsArray[num];

    console.log("countButton: ", countButton);

    if (countButton == 5) {
      document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[5];
      document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[5];
      document.getElementById("canvas3").style.display = "block";
      document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[1];
      z = document.getElementById("canvas3").src;
      var parts3 = z.split('/');
      var answer3 = parts3[parts3.length - 1];
      listaObrazow.push(answer3);
    } //-----------------------NAJPIERW SEKWENCJA POKOLEI A POTEM LOS-----------------------
    else if (countButton == 1) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[1];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[1];
      } else if (countButton == 2) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[2];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[2];
      } else if (countButton == 3) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[3];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[3];
      } else if (countButton == 4) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[4];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[4];
      } else if (countButton == 6) {
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[6];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[6];
        document.getElementById("canvas3").style.display = "block";
        document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[2];
        z = document.getElementById("canvas3").src;
        var parts3 = z.split('/');
        var answer3 = parts3[parts3.length - 1];
        listaObrazow.push(answer3);
      } else if (countButton == 7) {
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[7];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[7];
        document.getElementById("canvas3").style.display = "block";
        document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[3];
        z = document.getElementById("canvas3").src;
        var parts3 = z.split('/');
        var answer3 = parts3[parts3.length - 1];
        listaObrazow.push(answer3);
      } else if (countButton == 8) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[8];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[8];
      } else if (countButton == 9) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[9];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[9];
      } else if (countButton == 10) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[10];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[10];
      } else if (countButton == 11 || countButton == 12 || countButton == 14 || countButton == 15 || countButton == 17 || countButton == 18 || countButton == 20 || countButton == 21) {
        document.getElementById("canvas3").style.display = "none";
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[num];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[num3];
      } else if (countButton == 13) {
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[num];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[num3];
        document.getElementById("canvas3").style.display = "block";
        document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[num2];
        z = document.getElementById("canvas3").src;
        var parts3 = z.split('/');
        var answer3 = parts3[parts3.length - 1];
        listaObrazow.push(answer3);
      } else if (countButton == 16) {
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[num];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[num3];
        document.getElementById("canvas3").style.display = "block";
        document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[num2];
        z = document.getElementById("canvas3").src;
        var parts3 = z.split('/');
        var answer3 = parts3[parts3.length - 1];
        listaObrazow.push(answer3);
      } else if (countButton == 19) {
        document.getElementById("canvas1").src = 'obrazy/' + imagesNormalArray[num];
        document.getElementById("canvas2").src = 'obrazy/' + imagesComicsArray[num3];
        document.getElementById("canvas3").style.display = "block";
        document.getElementById("canvas3").src = 'obrazy/' + imagesMixArray[num2];
        z = document.getElementById("canvas3").src;
        var parts3 = z.split('/');
        var answer3 = parts3[parts3.length - 1];
        listaObrazow.push(answer3);
      } else if (countButton == 22) {
        console.log("nowa strona"); //window.location.href="E:/Magister/end.html";

        window.location.replace("http://127.0.0.1:8080/end.html");
      } //else if(countButton > 3 && countButton != 5){
    //    document.getElementById("canvas3").style.display = "none";
    //}
    //zapis calej listy w kolejnosci jakiej sie pojawily


    x = document.getElementById("canvas1").src; //wziecie tylklo nazwy obrazu z calej sciezki

    var parts1 = x.split('/');
    var answer1 = parts1[parts1.length - 1];
    console.log("Tylko nazwa: ", answer1);
    y = document.getElementById("canvas2").src;
    var parts2 = y.split('/');
    var answer2 = parts2[parts2.length - 1];
    listaObrazow.push(answer1);
    listaObrazow.push(answer2);
    localStorage.setItem("lista", JSON.stringify(listaObrazow));
  }
});