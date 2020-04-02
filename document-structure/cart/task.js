"use strict";
const countButtons = Array.from(document.querySelectorAll(".product__quantity-control"));
const quantityFields = Array.from(document.querySelectorAll(".product__quantity-value"));
const addToCartBtns = Array.from(document.querySelectorAll(".product__add"));
const cartContent = document.querySelector(".cart__products");
countButtons.forEach(elem => {
   elem.addEventListener('click', e=> {
      if(e.target.classList.contains("product__quantity-control_inc")) {
          e.target.closest(".product").querySelector( ".product__quantity-value").textContent = Number(e.target.closest(".product").querySelector(".product__quantity-value").textContent) + 1;
      } else {
          e.target.closest(".product").querySelector( ".product__quantity-value").textContent = Number(e.target.closest(".product").querySelector(".product__quantity-value").textContent) - 1;

      }
       quantityCheck();
   });
});

addToCartBtns.forEach(elem => {
    elem.addEventListener('click', e=> {
        let cartItems = Array.from(document.querySelectorAll(".cart__product"));
        if (cartItems.some(function (element, index) {
            element.getAttribute("data-id") === e.target.closest(".product").getAttribute("data-id")
            cartItems[index].querySelector(".cart__product-count").textContent = Number(cartItems[index].querySelector(".cart__product-count").textContent) + Number(e.target.closest(".product").querySelector(".product__quantity-value").textContent);


        }))
            {
        } else {
            let newProduct = document.createElement('div');
            let productImg = document.createElement('img');
            let productCount = document.createElement('div');
            newProduct.classList.add("cart__product");
            newProduct.setAttribute("data-id", elem.closest(".product").getAttribute("data-id"));
            productImg.classList.add("cart__product-image");
            productImg.setAttribute("src", elem.closest(".product").querySelector(".product__image").getAttribute("src"));
            productCount.classList.add("cart__product-count");
            productCount.textContent = e.target.closest(".product").querySelector(".product__quantity-value").textContent;
            cartContent.append(newProduct);
            newProduct.append(productImg);
            newProduct.append(productCount);
        }

    })
})

function quantityCheck() {
    quantityFields.forEach(elem => {
        if(elem.textContent == 1) {
            elem.closest(".product").querySelector(".product__quantity-control_dec").classList.add("visability-hidden");
        }
        else{
            elem.closest(".product").querySelector(".product__quantity-control_dec").classList.remove("visability-hidden");

        }
    });
}

quantityCheck();