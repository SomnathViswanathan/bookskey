//selecting popupbox, overlay
var popupbox = document.querySelector(".popup-box")
var overlay = document.querySelector(".popupoverlay")

//selecting cancleButton
var cancelbutton = document.getElementById("cancel-book")

function clickon(){
    popupbox.style.display="block"
    overlay.style.display="block"
}

function cancelpopup(){
    popupbox.style.display="none"
    overlay.style.display="none"
}

//selecting container, book-name,author-name, add book, book-discription

var containerbox = document.querySelector(".container")
var bookname = document.getElementById("book-name")
var authorname = document.getElementById("author-name")
var bookdis = document.getElementById  ("book-discription_input")
var addbook = document.getElementById("add-book")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","tin")
    div.innerHTML=`<h2>${bookname.value}</h2>
            <h5>${authorname.value}</h5>
            <p>${bookdis.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    containerbox.append(div)
    popupbox.style.display="none"
    overlay.style.display="none"

})

function deletebook(event){

    event.target.parentElement.remove();

}



