var i = 0;            
var images = [];    


images[0] = "palacinka.jpg";
images[1] = "supa.jpg";
images[2] = "specijalitet.jpg";
images[3] = "pica.jpg";



function changeImg(){
    document.slide.src = images[i];

   
    if(i < images.length - 1){
      i++; 
    } else { 
        i = 0;
    }

    setTimeout(changeImg(), 3000);
	
}
window.onload=changeImg;