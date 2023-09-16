addtocart_btn = document.getElementsByClassName('normal')
for(let i=0; i<addtocart_btn.length; i++){
    addtocart_btn[i].addEventListener('click',addtocart)
}

function addtocart(event){
let btn = event.target
let btn_parent = btn.parentElement
let btn_grandparent = btn.parentElement.btn.parentElement
// let itemName = btn_parent.children[0].innerText
// let itemPrice =
// let itemImage =
console.log(btn_parent)
}