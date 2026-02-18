const loadProductDetails = (id) =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
     .then(res=>res.json())
     .then(data=>displayProductDetails(data))
}
const displayProductDetails = (details) =>{
   const detailsContainer = document.getElementById('details-container')
   detailsContainer.innerHTML = `
      <h2 class="text-xl font-bold">${details.title}</h2>
            <p class="py-4">${details.description}</p>
            <p class="font-bold text-xl">$${details.price}</p>
            <div>
                <i class="fa-solid fa-star text-yellow-300"></i>
                <span>${details.rating.rate}</span> <span>(${details.rating.count})</span>
            </div>
            <button class="btn bg-blue-800 text-white  rounded-xl"><i class="fa-solid fa-cart-shopping "></i>Add to
                cart</button>
   `
   document.getElementById('details_modal').showModal();
}