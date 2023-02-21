let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

let likeBtns = document.querySelectorAll(".like-btn");

let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".btn-close");


modal.addEventListener("click", function(e){
    // console.log(e);
    // console.log(e.target);
    if(e.target === modal){
        modal.classList.remove("show");
    }

})

function showModalByScroll(){
    if(window.scrollY >= document.body.scrollHeight / 2){
        modal.classList.add("show");
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll);

closeBtn.addEventListener("click", function(){
    modal.classList.remove("show");
})

moreDetailsBtns.forEach((item) => {
    item.addEventListener("click", function(){
        modal.classList.add("show");
    })
})

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


// slick

$(".slider-block").slick({
    dots: true,
    prevArrow: "<img src='images/arrow_left.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrow_right.png' class='next' alt='2'>",
});

AOS.init();


let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productInput = document.querySelectorAll(".product-quantity input");
console.log(decrementBtns)
console.log(incrementBtns)
console.log(productInput)

function Counter(incrementBtn,decrementBtn,inputField){
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    this.toggleButtonState = function(){
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    }
    this.toggleButtonState();

    this.increment = function(){
        this.domRefs.inputField.value = Number(this.domRefs.inputField.value) + 1;
        this.toggleButtonState();
    }
    this.decrement = function(){
        this.domRefs.inputField.value = Number(this.domRefs.inputField.value) - 1;
        this.toggleButtonState();
    }
    
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    
    
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
     
}

const counter = [];

productInput.forEach((item, idx) => {
    counter[idx] = new Counter(incrementBtns[idx], decrementBtns[idx], item);
})

