var imagesArray = ["1.jpg", "11.jpg", "2.jepg", "22.jpg", "3.jpg", "4.png", "44.png"];
//tablica z normalnymi reklamami
var imagesNormalArray = ["1.jpg", "2.jpg", "3.png", "4.PNG", "5.jpg", "6.jpg", "7.png", "8.png", "9.jpg", "10.jpg", "11_2.png"];
//tablica z komiksami
var imagesComicsArray = ["11.png", "22.png", "33.png", "44.png", "55.png", "66.jpg", "77.jpg", "88.png", "99.jpg", "1010.png", "1111.png"];
//tablica z wspolnymi
var imagesMixArray = ["111.jpg", "666.jpg", "777.jpg", "888.png"];
//tablica wynik
var listaObrazow = [];
var wynikBadanego = [];
var czasBadanego_div1 = [];
var czasBadanego_div2 = [];
var czasBadanego_div3 = [];
let heatMapCoordinates = [];
var grouped = [];
let coordinates = [], mousePos;
let start_time1;
let end_time1;
let suma1 = 0;
let start_time2;
let end_time2;
let suma2 = 0;
let start_time3;
let end_time3;
let suma3 = 0;

//Mapa cieplna
let heatmap = [];

// Get the button, and when the user clicks on it, execute myFunction
document.addEventListener('DOMContentLoaded', function () {
    //var timestamp = new Date();
    //var hashNick = btoa(unescape(encodeURIComponent(timestamp)));
    //console.log("nick: ", JSON.stringify(timestamp));
    //localStorage.setItem("nick", JSON.stringify(timestamp));

    localStorage.setItem('coordinates', JSON.stringify([]));
    localStorage.setItem('heatMap', JSON.stringify([]));
  
    document.onmousemove = handler;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms
  
  function getGroupedData() {
    var positions = JSON.parse(localStorage.getItem('coordinates'));

    positions.map(function(pos, index) {
      var filtered = positions.filter(function(obj) {
        return (obj.x == pos.x && obj.y == pos.y)
      })
      
      var group = Object.assign({}, pos, {value: filtered.length});
  
      if (grouped.indexOf({x:group.x,y:group.y})==-1) {
        grouped.push(group);
      }
    });
    localStorage.setItem('heatMap', JSON.stringify(grouped));
  }
  
  function getMousePosition() {
    var pos = mousePos;
    if (pos){
      coordinates.push({x: pos.x, y: pos.y});
    }
    localStorage.setItem('coordinates', JSON.stringify(coordinates));
    getGroupedData();
  }
  
  function handler(event) {
    var dot,
      eventDoc,
      doc,
      body,
      pageX,
      pageY;
  
    event = event || window.event; // IE-ism
  
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
  
      event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }
  
    mousePos = {
      x: event.pageX,
      y: event.pageY
    };
  }
    
    document.getElementById("showRndmdiv").addEventListener("click", displayImage);
    var nameObr
    var countButton = 0;
    //ZALADOWANIE 1 SEKWENCJI
    if(countButton == 0){
        document.getElementById("canvas1").src = 'obrazy/1.jpg';
        document.getElementById("canvas2").src = 'obrazy/1-1.jpg';
        document.getElementById("canvas1").style.width = "420px";
        document.getElementById("canvas2").style.width = "420px";
        
    }
    var imageIsClicked = false;
    if (imageIsClicked==false){
        document.getElementById("showRndmdiv").disabled = true;
        
    }
    //Czy kliknieto w obrazek - add ramka
    document.getElementById("canvas1").addEventListener("click", clickHandler1);
    document.getElementById("canvas2").addEventListener("click", clickHandler2);
    document.getElementById("canvas3").addEventListener("click", clickHandler3);
    //czy najechano na div
    document.getElementById("canvas1").addEventListener("mouseover", najechanoMyszka1);
    document.getElementById("canvas1").addEventListener("mouseout", opuszczonoMyszka1);
    document.getElementById("canvas2").addEventListener("mouseover", najechanoMyszka2);
    document.getElementById("canvas2").addEventListener("mouseout", opuszczonoMyszka2);
    document.getElementById("canvas3").addEventListener("mouseover", najechanoMyszka3);
    document.getElementById("canvas3").addEventListener("mouseout", opuszczonoMyszka3);
    
    function clickHandler1(){
        imageIsClicked=true;
        nameObr = document.getElementById("canvas1").src;
        document.getElementById("canvas1").style.border = "thick solid red";
        document.getElementById("canvas2").style.border = "none";
        document.getElementById("canvas3").style.border = "none";
        console.log(imageIsClicked);
        document.getElementById("showRndmdiv").disabled = false;
        document.getElementById("showRndmdiv").classList.add("onlock");
        //gdy zaznacza usuwa sie info
        document.getElementById("alert").style.display = "none";
    }
    function clickHandler2(){
        imageIsClicked=true;
        nameObr = document.getElementById("canvas2").src;
        document.getElementById("canvas2").style.border = "thick solid red";
        document.getElementById("canvas1").style.border = "none";
        document.getElementById("canvas3").style.border = "none";
        console.log(imageIsClicked);
        document.getElementById("showRndmdiv").disabled = false;
        document.getElementById("showRndmdiv").classList.add("onlock");
        //gdy zaznacza usuwa sie info
        document.getElementById("alert").style.display = "none";
    }
    function clickHandler3(){
        imageIsClicked=true;
        nameObr = document.getElementById("canvas3").src;
        document.getElementById("canvas3").style.border = "thick solid red";
        document.getElementById("canvas1").style.border = "none";
        document.getElementById("canvas2").style.border = "none";
        console.log(imageIsClicked);
        document.getElementById("showRndmdiv").disabled = false;
        document.getElementById("showRndmdiv").classList.add("onlock");
        //gdy zaznacza usuwa sie info
        document.getElementById("alert").style.display = "none";
    }
    function najechanoMyszka1(){
        console.log(`4 ${suma1}`);
        start_time1 = new Date().getTime();
        console.log(`1 ${start_time1}`);
    }
    function opuszczonoMyszka1(){
        end_time1 = new Date().getTime();
        console.log(`2 ${end_time1}`);
        let all_time=end_time1-start_time1;
        suma1 = suma1 + all_time;
        console.log(`3 ${suma1}`);
    }
    function najechanoMyszka2(){
        console.log(`4 ${suma2}`);
        start_time2 = new Date().getTime();
        console.log(`1 ${start_time2}`);
    }
    function opuszczonoMyszka2(){
        end_time2 = new Date().getTime();
        console.log(`2 ${end_time2}`);
        let all_time=end_time2-start_time2;
        suma2 = suma2 + all_time;
        console.log(`3 ${suma2}`);
    }   
    function najechanoMyszka3(){
        console.log(`4 ${suma3}`);
        start_time3 = new Date().getTime();
        console.log(`1 ${start_time3}`);
    }
    function opuszczonoMyszka3(){
        end_time3 = new Date().getTime();
        console.log(`2 ${end_time3}`);
        let all_time=end_time3-start_time3;
        suma3 = suma3 + all_time;
        console.log(`3 ${suma3}`);
    } 
    

    //Klikniecie w przycisk next
    function displayImage(){
        heatMapCoordinates[countButton] = grouped;
        grouped = [];
        coordinates = [];
        countButton++;
        var imageIsClicked = false;
        console.log('Numer zdjecia:' + countButton);
        //heatMapCoordinates.push(JSON.parse(localStorage.getItem('heatMap')));

        console.log(heatMapCoordinates);
        if (imageIsClicked==false){
            document.getElementById("showRndmdiv").disabled = true;
            document.getElementById("showRndmdiv").classList.remove("onlock");
            document.getElementById("alert").style.display = "flex";
            
        }
        document.getElementById("canvas1").style.border = "none";
        document.getElementById("canvas2").style.border = "none";
        document.getElementById("canvas3").style.border = "none";

        console.log(countButton);
        //jaki obraz wybrano

        //console.log(nameObr);
        //console.log(imageIsClicked);
        var parts4 = nameObr.split('/');
        var answer4 = parts4[parts4.length - 1];
        wynikBadanego.push(answer4);
        //console.log(wynikBadanego);
        localStorage.setItem("nazwa", JSON.stringify(wynikBadanego));

        //zapis czasu do local storage
        //console.log(`Suma z 1: ${suma1}`);
        czasBadanego_div1.push(suma1);
        localStorage.setItem("czas1", JSON.stringify(czasBadanego_div1));
        suma1 = 0;
        //console.log(`Suma z 1: ${suma2}`);
        czasBadanego_div2.push(suma2);
        localStorage.setItem("czas2", JSON.stringify(czasBadanego_div2));
        suma2 = 0;
        //console.log(`Suma z 1: ${suma3}`);
        czasBadanego_div3.push(suma3);
        localStorage.setItem("czas3", JSON.stringify(czasBadanego_div3));
        suma3 = 0;
        //console.log(`niezeruje: ${suma1}`);

        
        
        var num = Math.floor(Math.random() * 10); // 0...11
        var num3 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 3); //..4
        //document.getElementById("canvas1").src = 'obrazy/'+ imagesNormalArray[num];
        //document.getElementById("canvas2").src = 'obrazy/'+ imagesComicsArray[num];
        console.log("countButton: ",countButton);
        if (countButton == 5){
            document.getElementById("canvas1").src = 'obrazy/6.jpg';
            document.getElementById("canvas2").src = 'obrazy/6-6.png';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[1];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }//-----------------------NAJPIERW SEKWENCJA POKOLEI A POTEM LOS-----------------------
        else if(countButton == 1){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/2.jpg';
            document.getElementById("canvas2").src = 'obrazy/2-2.jpg';
        }
        else if(countButton == 2){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/3.jpg';
            document.getElementById("canvas2").src = 'obrazy/3-3.png';
        }
        else if(countButton == 3){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/4.png';
            document.getElementById("canvas2").src = 'obrazy/4-4.jpg';
        }
        else if(countButton == 4){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/5.jpg';
            document.getElementById("canvas2").src = 'obrazy/5-5.jpg';
        }
        else if(countButton == 6){
            document.getElementById("canvas1").src = 'obrazy/7.png';
            document.getElementById("canvas2").src = 'obrazy/7-7.png';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[2];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }
        else if(countButton == 7){
            document.getElementById("canvas1").src = 'obrazy/8.PNG';
            document.getElementById("canvas2").src = 'obrazy/8-8.png';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[3];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }
        else if(countButton == 8){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/9.jpg';
            document.getElementById("canvas2").src = 'obrazy/9-9.jpg';
        }
        else if(countButton == 9){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/10.jpg';
            document.getElementById("canvas2").src = 'obrazy/10-10.jpg';
        }
        else if(countButton == 10){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/11.jpg';
            document.getElementById("canvas2").src = 'obrazy/11-11.png';
        }
        else if(countButton == 11){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/12.jpg';
            document.getElementById("canvas2").src = 'obrazy/12-12.jpg';
        }
        else if(countButton == 12){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/13.jpg';
            document.getElementById("canvas2").src = 'obrazy/13-13.jpg';
        }
        else if(countButton == 13){
            document.getElementById("canvas1").src = 'obrazy/14.jpg';
            document.getElementById("canvas2").src = 'obrazy/14-14.jpg';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[num2];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }
        else if(countButton == 14){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/15.PNG';
            document.getElementById("canvas2").src = 'obrazy/15-15.png';
        }
        else if(countButton == 15){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/16.png';
            document.getElementById("canvas2").src = 'obrazy/16-16.png';
        }
        else if(countButton == 16){
            document.getElementById("canvas1").src = 'obrazy/17.jpg';
            document.getElementById("canvas2").src = 'obrazy/17-17.png';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[num2];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }
        else if(countButton == 17){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/18.PNG';
            document.getElementById("canvas2").src = 'obrazy/18-18.jpeg';
        }
        else if(countButton == 18){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/19.jpg';
            document.getElementById("canvas2").src = 'obrazy/19-19.jpg';
        }
        else if(countButton == 19){
            document.getElementById("canvas1").src = 'obrazy/20.jpg';
            document.getElementById("canvas2").src = 'obrazy/20-20.jpg';
            //document.getElementById("canvas3").style.display = "block";
            //document.getElementById("canvas3").src = 'obrazy/'+ imagesMixArray[num2];
            //z = document.getElementById("canvas3").src;
            //var parts3 = z.split('/');
            //var answer3 = parts3[parts3.length - 1];
            //listaObrazow.push(answer3);
        }
        else if(countButton == 20 ){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/21.png';
            document.getElementById("canvas2").src = 'obrazy/21-21.jpg';
        }
        else if(countButton == 21){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/22.png';
            document.getElementById("canvas2").src = 'obrazy/22-22.jpg';
        }
        else if(countButton == 22){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/23.jpg';
            document.getElementById("canvas2").src = 'obrazy/23-23.jpg';
        }
        else if(countButton == 23){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/24.png';
            document.getElementById("canvas2").src = 'obrazy/24-24.jpg';
        }
        else if(countButton == 24){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/25.jpg';
            document.getElementById("canvas2").src = 'obrazy/25-25.jpg';
        }
        else if(countButton == 25){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/26.jpg';
            document.getElementById("canvas2").src = 'obrazy/17-17.png';
        }
        else if(countButton == 26){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/27.jpg';
            document.getElementById("canvas2").src = 'obrazy/27-27.jpg';
        }
        else if(countButton == 27){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/28.jpg';
            document.getElementById("canvas2").src = 'obrazy/28-28.jpg';
        }
        else if(countButton == 28){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/29.jpg';
            document.getElementById("canvas2").src = 'obrazy/29-29.jpg';
        }
        else if(countButton == 29){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/16.png';
            document.getElementById("canvas2").src = 'obrazy/30-30.png';
        }
        else if(countButton == 30){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/31.png';
            document.getElementById("canvas2").src = 'obrazy/31-31.png';
        }
        else if(countButton == 31){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/32.png';
            document.getElementById("canvas2").src = 'obrazy/32-32.jpg';
        }
        else if(countButton == 32){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/33.jpg';
            document.getElementById("canvas2").src = 'obrazy/33-33.jpg';
        }
        else if(countButton == 33){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/34.jpg';
            document.getElementById("canvas2").src = 'obrazy/34-34.jpg';
        }
        else if(countButton == 34){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/35.jpg';
            document.getElementById("canvas2").src = 'obrazy/35-35.jpg';
        }
        else if(countButton == 35){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/36.png';
            document.getElementById("canvas2").src = 'obrazy/36-36.png';
        }
        else if(countButton == 36){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/37.jpg';
            document.getElementById("canvas2").src = 'obrazy/37-37.jpg';
        }
        else if(countButton == 37){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/38.jpg';
            document.getElementById("canvas2").src = 'obrazy/38-38.jpg';
        }
        else if(countButton == 38){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/39.jpg';
            document.getElementById("canvas2").src = 'obrazy/39-39.jpg';
        }
        else if(countButton == 39){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/40.png';
            document.getElementById("canvas2").src = 'obrazy/40-40.png';
        }
        else if(countButton == 40){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/41.jpg';
            document.getElementById("canvas2").src = 'obrazy/41-41.jpg';
        }
        else if(countButton == 41){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/42.png';
            document.getElementById("canvas2").src = 'obrazy/42-42.jpg';
        }
        else if(countButton == 42){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/43.png';
            document.getElementById("canvas2").src = 'obrazy/43-43.jpg';
        }
        else if(countButton == 43){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/44.jpg';
            document.getElementById("canvas2").src = 'obrazy/38-38.jpg';
        }
        else if(countButton == 44){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/45.jpg';
            document.getElementById("canvas2").src = 'obrazy/45-45.png';
        }
        else if(countButton == 45){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/46.jpg';
            document.getElementById("canvas2").src = 'obrazy/46-46.jpg';
        }
        else if(countButton == 46){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/47.jpg';
            document.getElementById("canvas2").src = 'obrazy/47-47.jpg';
        }
        else if(countButton == 47){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/48.jpg';
            document.getElementById("canvas2").src = 'obrazy/48-48.jpg';
        }
        else if(countButton == 48){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/49.jpg';
            document.getElementById("canvas2").src = 'obrazy/49-49.jpg';
        }
        else if(countButton == 49){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/50.jpg';
            document.getElementById("canvas2").src = 'obrazy/46-46.jpg';
        }
        else if(countButton == 50){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/51.jpg';
            document.getElementById("canvas2").src = 'obrazy/51-51.png';
        }
        else if(countButton == 51){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/52.jpeg';
            document.getElementById("canvas2").src = 'obrazy/47-47.jpg';
        }
        else if(countButton == 52){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/53.jpeg';
            document.getElementById("canvas2").src = 'obrazy/53-53.png';
        }
        else if(countButton == 53){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/54.jpg';
            document.getElementById("canvas2").src = 'obrazy/54-54.jpg';
        }
        else if(countButton == 54){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/55.png';
            document.getElementById("canvas2").src = 'obrazy/55-55.jpg';
        }
        else if(countButton == 55){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/56.jpg';
            document.getElementById("canvas2").src = 'obrazy/56-56.jpg';
        }
        else if(countButton == 56){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/57.jpg';
            document.getElementById("canvas2").src = 'obrazy/57-57.jpg';
        }
        else if(countButton == 57){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/58.jpg';
            document.getElementById("canvas2").src = 'obrazy/58-58.jpg';
        }
        else if(countButton == 58){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/59.jpg';
            document.getElementById("canvas2").src = 'obrazy/59-59.jpg';
        }
        else if(countButton == 59){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/60.PNG';
            document.getElementById("canvas2").src = 'obrazy/60-60.jpeg';
        }
        else if(countButton == 60){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/61.png';
            document.getElementById("canvas2").src = 'obrazy/61-61.jpg';
        }
        else if(countButton == 61){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/62.PNG';
            document.getElementById("canvas2").src = 'obrazy/62-62.jpg';
        }
        else if(countButton == 62){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/63.jpg';
            document.getElementById("canvas2").src = 'obrazy/63-63.png';
        }
        else if(countButton == 63){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/64.jpg';
            document.getElementById("canvas2").src = 'obrazy/64-64.jpg';
        }
        else if(countButton == 64){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/65.jpg';
            document.getElementById("canvas2").src = 'obrazy/65-65.jpg';
        }
        else if(countButton == 65){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/66.png';
            document.getElementById("canvas2").src = 'obrazy/18-18.jpeg';
        }
        else if(countButton == 66){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/67.png';
            document.getElementById("canvas2").src = 'obrazy/67-67.png';
        }
        else if(countButton == 67){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/68.jpg';
            document.getElementById("canvas2").src = 'obrazy/68-68.png';
        }
        else if(countButton == 68){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/69.png';
            document.getElementById("canvas2").src = 'obrazy/69-69.png';
        }
        else if(countButton == 69){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/70.jpg';
            document.getElementById("canvas2").src = 'obrazy/70-70.png';
        }
        else if(countButton == 70){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/71.jpg';
            document.getElementById("canvas2").src = 'obrazy/71-71.png';
        }
        else if(countButton == 71){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/72.jpg';
            document.getElementById("canvas2").src = 'obrazy/72-72.jpg';
        }
        else if(countButton == 72){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/73.jpg';
            document.getElementById("canvas2").src = 'obrazy/64.jpg';
        }
        else if(countButton == 73){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/74.png';
            document.getElementById("canvas2").src = 'obrazy/74-74.png';
        }
        else if(countButton == 74){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/75.PNG';
            document.getElementById("canvas2").src = 'obrazy/75-75.PNG';
        }
        else if(countButton == 75){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/76.jpeg';
            document.getElementById("canvas2").src = 'obrazy/76-76.jpg';
        }
        else if(countButton == 76){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/77.jpg';
            document.getElementById("canvas2").src = 'obrazy/77-77.png';
        }
        else if(countButton == 77){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/78.png';
            document.getElementById("canvas2").src = 'obrazy/78-78.png';
        }
        else if(countButton == 78){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/79.jpg';
            document.getElementById("canvas2").src = 'obrazy/79-79.jpg';
        }
        else if(countButton == 79){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/80.jpg';
            document.getElementById("canvas2").src = 'obrazy/80-80.jpg';
        }
        else if(countButton == 80){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/81.jpg';
            document.getElementById("canvas2").src = 'obrazy/81-81.png';
        }
        else if(countButton == 81){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/82.png';
            document.getElementById("canvas2").src = 'obrazy/82-82.jpg';
        }
        else if(countButton == 82){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/83.jpg';
            document.getElementById("canvas2").src = 'obrazy/83-83.jpg';
        }
        else if(countButton == 83){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/84.jpg';
            document.getElementById("canvas2").src = 'obrazy/84-84.jpg';
        }
        else if(countButton == 84){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/85.jpg';
            document.getElementById("canvas2").src = 'obrazy/85-85.jpg';
        }
        else if(countButton == 85){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/86.jpg';
            document.getElementById("canvas2").src = 'obrazy/86-86.jpg';
        }
        else if(countButton == 86){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/87.jpg';
            document.getElementById("canvas2").src = 'obrazy/87-87.png';
        }
        else if(countButton == 87){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/88.jpg';
            document.getElementById("canvas2").src = 'obrazy/82-82.jpg';
        }
        else if(countButton == 88){
            document.getElementById("canvas3").style.display = "none";
            document.getElementById("canvas1").src = 'obrazy/89.jpg';
            document.getElementById("canvas2").src = 'obrazy/89-89.jpg';
        }
        else if(countButton == 89){
            
            console.log("nowa strona");
            //window.location.href="E:/Magister/end.html";
            window.location.replace("https://olixie.github.io/magisterka/end.html");

        }

        if(countButton == 0 || countButton == 3 || countButton == 6 || countButton == 7 || countButton == 9 || countButton == 12 || countButton == 14 || countButton == 15 || countButton == 16 || countButton == 21 || countButton == 29 || countButton == 39 || countButton == 42 || countButton == 46 || countButton == 51 || countButton == 53 || countButton == 56 || countButton == 57 || countButton == 58 || countButton == 61){
            document.getElementById("canvas1").style.width = "420px";
            document.getElementById("canvas2").style.width = "420px";
        }else if(countButton == 48){
            document.getElementById("canvas1").style.width = "400px";
            document.getElementById("canvas2").style.width = "400px";
        }else if(countButton == 59 || countButton == 70 || countButton == 73 || countButton == 75 || countButton == 79){
            document.getElementById("canvas1").style.width = "330px";
            document.getElementById("canvas2").style.width = "330px";
        }else{
            document.getElementById("canvas1").style.width = "490px";
            document.getElementById("canvas2").style.width = "490px";
        }

        //zapis calej listy w kolejnosci jakiej sie pojawily
        x = document.getElementById("canvas1").src;
        //wziecie tylklo nazwy obrazu z calej sciezki
        var parts1 = x.split('/');
        var answer1 = parts1[parts1.length - 1];
        //console.log("Tylko nazwa: ", answer1);
        y = document.getElementById("canvas2").src;
        var parts2 = y.split('/');
        var answer2 = parts2[parts2.length - 1];
        
        listaObrazow.push(answer1);
        listaObrazow.push(answer2);
        //console.log(answer1);
        localStorage.setItem("lista", JSON.stringify(listaObrazow));
        localStorage.setItem("heatMap", JSON.stringify(heatMapCoordinates));
    }


    
});
