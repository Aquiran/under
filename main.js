var fi = 0;
var ac = 0;
var it = 0;

setInterval(() => {
    if (index >= str.length) {
      return;
    }
  
    document.getElementById("text").innerHTML += (str[index]);
    index++;
  }, 30);                                                              /* 한 글자 씩 출력**/
  
  
function fight() {
    if ( fi == 0 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * your weapon is broken "
       index = 0;
       fi += 1;
    }
    else if ( fi == 1 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you try to attack him. but you couldn't kill him "
       index = 0;
       fi += 1;
    }
    else if ( fi == 2 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you fall down "
        document.getElementById("hpbar").style.width = "328px"
        document.getElementById("hpnum").innerHTML = "80 / 92"
       index = 0;
       fi += 1;
    }
    else if ( fi == 3 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = "* you try to attack him again. but he is really hard.your right hand is broken   "
        document.getElementById("hpbar").style.width = "268px"
        document.getElementById("hpnum").innerHTML = "60 / 92"
       index = 0;
       fi += 1;
    }
    else if ( fi == 4 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = "* you are so tired. so you decide to rest "
        document.getElementById("hpbar").style.width = "268px"
        document.getElementById("hpnum").innerHTML = "60 / 92"
       index = 0;
       fi += 1;
    }
    else if ( fi == 5 ) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = "* but sans is not waiting for you"
        document.getElementById("hpbar").style.width = "3px"
        document.getElementById("hpnum").innerHTML = "1 / 92"
       index = 0;
       fi += 1;
    }
    else if( fi == 6 ){
        window.location = "end.html"
    }
}
function act() {
    if (ac == 0) {
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you enchant him. but he is just bone "
       index = 0;
       ac += 1
    }
    else{
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you can't enchant him."
       index = 0;
    }
}
function item() {
    if( it == 0){
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you find knife. but this knife is broken "
       index = 0;  
       it += 1      
    }
    else if( it == 1 ){
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you find papyrus's bone. sans is mad "
       index = 0;  
       it += 1      
    }
    else if( it == 2 ){
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you find butterscotch pie. your HP is full "
        document.getElementById("hpbar").style.width = "364px"
        document.getElementById("hpnum").innerHTML = "92 / 92"
       index = 0;  
       it += 1      
    }
    else if( it == 3 ){
        document.getElementById("text").style.color = "white"
        document.getElementById("text").innerHTML = ""  
        str = " * you find undyne's spear. but this spear is melting "
       index = 0;  
       it += 1      
    }
    else {
        document.getElementById("text").innerHTML = ""  
        str = " * there is no item in my bag "
       index = 0;  
    }
}
function mercy() {
        document.getElementById("text").innerHTML = ""  
        document.getElementById("text").style.color = "red"
        str = " * you will die"
       index = 0;
       fi += 1;
    }