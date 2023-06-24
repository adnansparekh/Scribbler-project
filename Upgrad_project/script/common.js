
let btnUp = document.getElementById("Sign-up");
let modal1 = document.getElementById('modal1')
let  centerBtn = document.getElementById('all-post');
let centerBtn2 = document.getElementById('Create-Post');
let close = document.getElementById("close");
// modal 2 

let btnIN = document.getElementById("Sign-In");
let modal2 = document.getElementById("IN-modal");
let close2 = document.getElementById("cut");
let chngModal = document.getElementById("ch-modal");

//create post 
let creatPost = document.getElementById('Create-Post');
//modal3
let modal3  =document.getElementById('main');
let close3 = document.getElementById("sym");




btnUp.onclick = function() {
   modal1.style.display = 'block';
   // centerBtn.style.opacity = "0";
   // centerBtn2.style.opacity = "0";
   modal2.style.display = "none";
}
close.onclick = function() {

modal1.style.display = "none";
centerBtn.style.opacity = "1";
centerBtn2.style.opacity = "1";
modal2.style.display = "none";

}


//modal2 

btnIN.onclick = function(){
   
   modal2.style.display = "block";
   // centerBtn.style.opacity = "0";
   // centerBtn2.style.opacity = "0";
   modal1.style.display = "none";
}


close2.onclick =  function (){
modal2.style.display = "none";
centerBtn.style.opacity = "1";
centerBtn2.style.opacity = "1";
modal1.style.display = "none";

}


   chngModal.addEventListener("click", function(){
      modal2.style.display = "none";
      modal1.style.display = "block";
   })