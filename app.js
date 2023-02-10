let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

let likeEl = document.querySelectorAll(".like");


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

likeEl.forEach((item) => {
    item.addEventListener("click", function(){
        if(item.style.backgroundColor === "" || item.style.backgroundColor === "transparent"){
            item.style.backgroundColor = "#2c71b8";
            item.style.backgroundImage = "url(images/white-like.png)"
        } else {
            item.style.backgroundColor = "transparent";
            item.style.backgroundImage = "url(images/blue-like.png)"
        }
    })
})




$(".slider-block").slick();