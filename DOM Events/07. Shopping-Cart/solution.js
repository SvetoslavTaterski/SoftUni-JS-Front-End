function solve() {
   let products = Array.from(document.getElementsByClassName("product"));
   let result = document.querySelector("textarea");

   let boughtProducts = [];
   let totalPrice = 0;

   products.forEach(element => {
      element.querySelector(".add-product").addEventListener("click",buyFunction);
   });

   function buyFunction(element){
      let productPrice = Number(element.currentTarget.parentNode.parentNode.querySelector(".product-line-price").textContent);
      let productName = element.currentTarget.parentNode.parentNode.querySelector(".product-title").textContent;
      
      boughtProducts.push(productName);
      totalPrice += productPrice;
      result.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`
   }

   let checkoutButton = document.getElementsByClassName("checkout")[0];

   checkoutButton.addEventListener("click",sumTotalPrice);

   function sumTotalPrice(e){
      let uniqueArray = [...new Set(boughtProducts)];

      result.textContent += `You bought ${uniqueArray.join(", ")} for ${Number(totalPrice).toFixed(2)}.`;

      products.forEach(element => {
         element.querySelector(".add-product").removeEventListener("click",buyFunction);
      });

      e.currentTarget.removeEventListener("click",sumTotalPrice);
   }
}