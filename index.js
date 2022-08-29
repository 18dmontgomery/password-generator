const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("shape1-text")
let pass2 = document.getElementById("shape2-text")
var lenOfPass = document.getElementById('num').value;

function genPass() {
    pass1.textContent = ""
    pass2.textContent = ""
    lenOfPass = document.getElementById('num').value;
    for(let i=0; i<lenOfPass; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        pass1.textContent+= characters[randomIndex]
        
    }
    for(let i=0; i<lenOfPass; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        pass2.textContent+= characters[randomIndex]
    
    }
    
   
}


function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}


