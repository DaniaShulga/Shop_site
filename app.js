let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

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