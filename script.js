const button = document.getElementById("saibaMais")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("fechar")

button.onclick = function (){
    modal.showModal()
}

buttonClose.onclick = function (){
    modal.close()
}

