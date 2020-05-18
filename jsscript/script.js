/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

/**
 * 2. Написать код, чтобы при нажатии на li 
 *  2.1 его текст становился жирным 
 *  2.2 его текст (!) выводился в alert 
    
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

/*==========================1================*/
const ul = document.getElementById("myList");
const b = document.getElementsByTagName("body")[0];
const li = document.getElementsByTagName("li");



ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "LI" ) {
        event.target.classList.add ("pointBold");
    } 
}); 

b.addEventListener("click",function(el){
    if(el.target.nodeName !== "LI"){
        for(let i = 0; i < li.length; i++ ){
            li[i].classList.remove ("pointBold")
        }
    }
})
/*=========================2*======================*/

const ul1 = document.getElementsByClassName("example_class_1")[0];

ul1.addEventListener("click", function (event) {
    if (event.target.nodeName === "LI") {
        event.target.classList.add ("pointBold");
        alert(event.target.innerText)
    } 
}); 
