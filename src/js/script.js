// preciso pegar a largura do site e retirar um atributo 

let larguraPagina = document.getElementsByTagName("body")
larguraPagina.value
console.log(larguraPagina)




// pegar o atributo da imagem 
// preciso que sejá mudado para outro src quando o mouse passar em cima 

let minhaFoto = document.getElementById("minhaFoto")
 
console.log(minhaFoto)

minhaFoto.addEventListener("mouseenter",function(){
    minhaFoto.setAttribute("src","./src/assets/willian03.jpg")
    minhaFoto.setAttribute("src","./src/assets/willian04.jpg")



})


// let leafeon = document.getElementById("leaf");

// leafeon.addEventListener("click", function(){
   
//    leafeon.setAttribute("src","./assets/evee.png")
   
//    leafeon.addEventListener("click", mudarFoto)

//    function mudarFoto(){
//       leafeon.setAttribute("src","./assets/shandsherion.png")
//       leafeon.setAttribute("height", "350px")
//    }
   
// });