var inputPolje = document.getElementById("field"),
    sacuvaj = document.getElementById("save"),
    procitaj = document.getElementById("read"),
    izbrisi = document.getElementById("clear");
 

sacuvaj.addEventListener("click", function(e){
    window.localStorage["kljuc"] = inputPolje.value;
});


procitaj.addEventListener("click", function(e){
    alert(window.localStorage["kljuc"]);
});


izbrisi.addEventListener("click", function(e){
    window.localStorage.clear();
});


function ocenaSajta(){
    alert(document.getElementById("nekiTekst").value)
	document.obrazac.nekiTekst.value="";
}