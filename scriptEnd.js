document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("sendResult").addEventListener("click", sendResultToServer);
    //Save to file
    async function sendResultData() 
    {
        var storedNames = localStorage.getItem("nazwa");
        var storedLista = localStorage.getItem("lista");
        var storedTime1 = localStorage.getItem("czas1");
        var storedTime2 = localStorage.getItem("czas2");
        var storedTime3 = localStorage.getItem("czas3");
        var storedHeatMap = localStorage.getItem("heatMap");
        //var storedNick = localStorage.getItem("nick");
        var timestamp = new Date();
        var hashNick = btoa(unescape(encodeURIComponent(timestamp)));
        //console.log("nick: ", JSON.stringify(timestamp));
        //localStorage.setItem("nick", JSON.stringify(timestamp));
        //Odszyfrowanie
        var str2 = decodeURIComponent(escape(window.atob(hashNick)));
        console.log(str2);
        
        var myObj = {
            "nick": hashNick,
            "images": JSON.parse(storedNames),
            "lista_img": JSON.parse(storedLista),
            "czas1": JSON.parse(storedTime1),
            "czas2": JSON.parse(storedTime2),
            "czas3": JSON.parse(storedTime3),
            "heat_map": storedHeatMap
        }
        console.log(myObj);
        console.log(storedNames);
        console.log(storedLista);
        console.log(storedTime1);
        console.log(storedTime2);
        console.log(storedTime3);

        let response = await fetch('https://experiment-advertisement.herokuapp.com/api/data/save', {
        method: 'post',
        headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
     },
        body: JSON.stringify(myObj)
    });
        let data = await response.json()
        //console.log(data);
        return data;
    }

    function sendResultToServer(){
        console.log("ola");
        
    
        sendResultData().then(data => console.log(data));
        //alert("Wysłano dane \nTo już wszystko, bardzo dziękuje za Twoją pomoc!");
        document.getElementById("podziekowanie").style.display = "flex";
        document.getElementById("tytul2").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("sendResult").style.display = "none";
    }
});