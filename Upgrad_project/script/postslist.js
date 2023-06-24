 let allBox = document.getElementsByClassName("box1")


// all delete btn

var delBtn1 =document.getElementById("del-btn");
var delBtn2 =document.getElementById("del-btn2");
var delBtn3 =document.getElementById("del-btn3");
var delBtn4 =document.getElementById("del-btn4");
var delBtn5 =document.getElementById("del-btn5");
// modal of delete
var delModal = document.getElementById("modal-all");
//rray for check 
let check = [];
// for modal pop up


// yes no btn
let yes = document.getElementById("yes");
let no = document.getElementById("no");

// boxes 
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

//  modal start

let modal1 =document.getElementById("modal1");
let modal2 = document.getElementById("modall2");
let btnSignUP = document.getElementById("Sign-up");
let btnSignIn = document.getElementById("Sign-In");
// close btn 
let close1 =document.getElementById("close")
let close2 =document.getElementById("cut")

// sign in down btn 
let  chngBtn = document.getElementById("span");

//  modal end




delBtn1.addEventListener("click" , function(event){
    console.log(allBox);
  //  document.body.classList.add("bgcolor")
 //ddocument.body.style.backgroundColor = "grey"
    delModal.style.display = "block";

    yes.onclick = function(){
    event.preventDefault();
        //box1.style.display = "none"
    box1.remove();
    delModal.style.display = "none";

   }
   no.onclick = function(){
    event.preventDefault();
    delModal.style.display = "none";

   }
});


delBtn2.addEventListener("click" , function(event){
    delModal.style.display = "block";
    yes.onclick =function(){
        event.preventDefault();
        box2.remove();
        delModal.style.display = "none"
    
    }
    no.onclick = function(){
        event.preventDefault();
        delModal.style.display = "none";
    
       }

})


delBtn3.addEventListener("click" , function(event){
    delModal.style.display = "block";
    yes.onclick =function(){
        event.preventDefault();
        box3.remove();
        delModal.style.display = "none"
    
    }
    no.onclick = function(){
        event.preventDefault();
        delModal.style.display = "none";
    
       }
})



delBtn4.addEventListener("click" , function(event){
    delModal.style.display = "block";
    yes.onclick =function(){
        event.preventDefault();
        box4.remove();
        delModal.style.display = "none"
    
    }
    no.onclick = function(){
        event.preventDefault();
        delModal.style.display = "none";
    
       }
})



delBtn5.addEventListener("click" , function(event){
    delModal.style.display = "block";
    yes.onclick =function(){
        event.preventDefault();
        box5.remove();
        delModal.style.display = "none"
    
    }
    no.onclick = function(){
        event.preventDefault();
        delModal.style.display = "none";
    
       }
})




// modal 1 (sign up )
let ae = function(){
    modal1.style.display ="block"
    modal2.style.display = "none"
}

btnSignUP.addEventListener("click", ae) 



// modal 1 close
close1.onclick = function(){
    modal1.style.display = "none"
}


//modal 2 (sign in)

btnSignIn.onclick =   function(){
    modal2.style.display = "block"
    modal1.style.display = "none"
}

// modal 2 close
close2.onclick = function(){
    modal2.style.display = "none"
}

//changing the sign in to sig up want click on not a memeber sign up

chngBtn.addEventListener("click" ,ae);