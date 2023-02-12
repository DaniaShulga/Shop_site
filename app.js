let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

let likeBtns = document.querySelectorAll(".like-btn");
console.log(likeBtns);

addToCartBtns.forEach((elem) => {
    elem.addEventListener("click", function(){
        // let prevProductsCount = Number(productsCountEl.textContent);
        // productsCountEl.textContent = prevProductsCount + 1;
        
        productsCountEl.textContent = Number(productsCountEl.textContent) + 1; 
    })
});

// for(let item of addToCartBtns){
    //     item.addEventListener("click", function(){
        //         console.log("clicked");
        //     })
        // }

// for(let i = 0; i < addToCartBtns.length; i += 1){
//     addToCartBtns[i].addEventListener("click", function(){
//         console.log("clicked");
//     })
// }

likeBtns.forEach((item) => {
    item.addEventListener("click", function(){
        // if(item.classList.contains("liked")){
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked");
        // }

        item.classList.toggle("liked");
    })
})



$(".slider-block").slick();