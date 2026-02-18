const loadTrendingProducts = () =>{
    const url ='https://fakestoreapi.com/products'//all products
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTrendingProducts(data))
}
const displayTrendingProducts = (products) =>{
    const trendProducts=products.slice(0,3)
    trendProducts.forEach((trendProduct) => {
        const trendProductContainer = document.getElementById('trend-productContainer')
        // trendProductContainer.innerHTML = '';
        const card = document.createElement('div');
        card.innerHTML = `
          <div class="card bg-base-100 w-96 shadow-sm">
                    <figure class="bg-slate-100 p-6">
                        <img class="h-56 w-full object-contain" src="${trendProduct.image}" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between items-center">
                        <button class="btn text-xs bg-sky-100 text-blue-600 rounded-xl">${trendProduct.category}</button>
                        <div>
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <span>${trendProduct.rating.rate}</span> <span>(${trendProduct.rating.count})</span>
                        </div>
                        </div>
                        <h2 class="text-xl font-bold truncate">${trendProduct.title}</h2>
                        <p class="font-bold text-xl">$${trendProduct.price}</p>
                        <div class="flex justify-between text-2xl mt-6">
                            <button class="btn p-6 rounded-xl"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn bg-blue-800 text-white p-6 rounded-xl"><i class="fa-solid fa-cart-shopping "></i>Add</button>
                        </div>
                    </div>
                </div>
        `
        trendProductContainer.append(card)
    });
}
loadTrendingProducts();

