"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("sendResult").addEventListener("click", sendResultToServer); //Save to file

  function sendResultData() {
    var storedNames, storedLista, storedTime1, storedTime2, storedTime3, timestamp, hashNick, str2, myObj, response, data;
    return regeneratorRuntime.async(function sendResultData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            storedNames = localStorage.getItem("nazwa");
            storedLista = localStorage.getItem("lista");
            storedTime1 = localStorage.getItem("czas1");
            storedTime2 = localStorage.getItem("czas2");
            storedTime3 = localStorage.getItem("czas3"); //var storedNick = localStorage.getItem("nick");

            timestamp = new Date();
            hashNick = btoa(unescape(encodeURIComponent(timestamp))); //console.log("nick: ", JSON.stringify(timestamp));
            //localStorage.setItem("nick", JSON.stringify(timestamp));
            //Odszyfrowanie

            str2 = decodeURIComponent(escape(window.atob(hashNick)));
            console.log(str2);
            myObj = {
              "nick": hashNick,
              "images": JSON.parse(storedNames),
              "lista_img": JSON.parse(storedLista),
              "czas1": JSON.parse(storedTime1),
              "czas2": JSON.parse(storedTime2),
              "czas3": JSON.parse(storedTime3)
            };
            console.log(myObj);
            console.log(storedNames);
            console.log(storedLista);
            console.log(storedTime1);
            console.log(storedTime2);
            console.log(storedTime3);
            _context.next = 18;
            return regeneratorRuntime.awrap(fetch('https://experiment-advertisement.herokuapp.com/api/data/save', {
              method: 'post',
              headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(myObj)
            }));

          case 18:
            response = _context.sent;
            _context.next = 21;
            return regeneratorRuntime.awrap(response.json());

          case 21:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function sendResultToServer() {
    console.log("ola");
    sendResultData().then(function (data) {
      return console.log(data);
    });
    alert("Wysłano dane \nTo już wszystko, bardzo dziękuje za Twoją pomoc!");
    document.getElementById("podziekowanie").style.display = "flex";
    document.getElementById("tytul2").style.display = "none";
    document.getElementById("sendResult").style.display = "none";
  }
});