// all references
let editBtn = document.getElementById("edit-btn");
let mainPara = document.getElementById("main-para");
let heading = document.getElementById("heading");
let saveBtn = document.getElementById("save");
let updateWord  = document.getElementById("updated"); 
let likeBtn = document.getElementById("like-btn");
let countnum = document.getElementById("count");
let likePara = document.getElementById("like-para");
let commentText = document.getElementById("comment-text");
let commentBtn = document.getElementById("comment-btn");

let ul = document.getElementById("unorder");

// global variable
let count = 0  ;


//events
editBtn.addEventListener("click" , editContent);
saveBtn.addEventListener("click" ,saveContent);
likeBtn.addEventListener("click" , liked)
commentBtn.addEventListener("click" , commentbox);



//functions
function editContent(){
    editBtn.style.opacity = "0" ;
    saveBtn.style.display = "block" ;
    mainPara.contentEditable = "true";
    heading.contentEditable = "true";
}

function saveContent(){
   saveBtn.style.display = "none";
   editBtn.style.opacity = "1";
   mainPara.contentEditable = "false"
   heading.contentEditable = "false"
   updateWord.style.display = "block"
}

function liked(){
    if(count===0){
    likeBtn.innerHTML +=  "d"
    }
    count++;
    likePara.innerHTML = count + " person likes this!";
}

function commentbox() {
    if(commentText.value !== ""){
    ul.style.backgroundColor="grey";
    let newcomment = commentText.value;
    let div = document.createElement("div");
    div.id = "newDiv";
    let newTextNode = document.createTextNode(newcomment);
    div.appendChild(newTextNode);
    //ul.appendChild(div);  it is used to attach the child
    ul.insertBefore(div , ul.firstChild)
    commentText.value ="";
 }
}