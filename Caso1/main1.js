function menuGeneral() {
    document.getElementById("reto1").classList.toggle("show");
}

function menuQuienes() {
    document.getElementById("menu1").classList.toggle("show");
    
    if (document.getElementById("menu2").style.display=block =true){
        document.getElementById("menu2").style.display=none; 
    } 

    
}

function menuProductos() {
    
 
    if (document.getElementById("menu1").style.display=block =false){
        document.getElementById("menu1").classList.toggle("show"); 
    }    else {
        document.getElementById("menu2").classList.toggle("show"); 
    }   
    
}