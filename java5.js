function validacija(){
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var email = document.getElementById("mejl").value;
	var greskaObj = {Polje:"Ime",Tekst:"Niste uneli ime"};
	var greskaObj2 = {Polje:"Prezime",Tekst:"Niste uneli prezime"};
	var greskaObj3 = {Polje:"Email",Tekst:"Niste uneli email"};
	var ispisImena = JSON.stringify(greskaObj,null,4);
	var ispisPrezime = JSON.stringify(greskaObj2,null,4);
	var ispisEmail = JSON.stringify(greskaObj3,null,4);
    try{
    if(ime == "") throw ispisImena;
    else if(prezime == "") throw ispisPrezime;
    else if(email == "") throw ispisEmail;
		}
    catch(err){
	alert(err);
     }
	 
}