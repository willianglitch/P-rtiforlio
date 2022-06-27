// pegar o atributo da imagem 
// preciso que sejá mudado para outro src quando o mouse passar em cima 

const minhaFoto = document.querySelector("#minhaFoto")

minhaFoto.addEventListener("mouseover",function(){
    minhaFoto.setAttribute("src","./src/assets/willian02.jpg")
})