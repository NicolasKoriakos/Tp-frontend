/* Cambio de titulo */

/*

const myTitle = document.querySelector('h1');
myTitle.textContent = 'Noticias final de Rusia 2018:';

*/

/* Cambio de imagen */

let imagenFrancia = document.getElementById('francia')
let imagenCroacia = document.getElementById('croacia')

imagenFrancia.onclick = function(){

    let imgSrc = imagenFrancia.getAttribute('src');

    if(imgSrc === 'images/francia.jpg'){
        imagenFrancia.setAttribute('src','images/mbappe.jpg');
    }else{
        imagenFrancia.setAttribute('src','images/francia.jpg')
    }

}

imagenCroacia.onclick = function(){

    let imgSrc2 = imagenCroacia.getAttribute('src')

    if(imgSrc2 === 'images/croacia.jpg'){
        imagenCroacia.setAttribute('src','images/croacia2.jpg');
    }else{
        imagenCroacia.setAttribute('src','images/croacia.jpg')
    }

}

/* Mensaje de bienvenida */

let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function establecerNombreUsuario(){
    let miNombreUsuario = prompt('Por favor, ingrese su nombre');
    myTitle.textContent = 'Bienvenido, ' + miNombreUsuario;
}

myButton.onclick = function(){
    establecerNombreUsuario();
}