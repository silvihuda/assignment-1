const loadCategories = () =>{
    const url = 'https://fakestoreapi.com/products/categories'
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategories(data))
}
const displayCategories = (categories) =>{
  const categoryContainer = document.getElementById('category-container')
   categoryContainer.innerHTML =''
   const firstBtn = document.createElement('button');
   firstBtn.classList = "btn btn-primary btn-outline rounded-2xl";
   firstBtn.innerText = 'All';
   firstBtn.addEventListener('click',loadAllProducts)
   categoryContainer.append(firstBtn)
   categories.forEach(category => {
   const btn = document.createElement('button');
   btn.innerText =category;
  btn.addEventListener('click', () => {
    loadProductsByCategories(category);
});
   btn.classList = "btn btn-primary btn-outline rounded-2xl";
   categoryContainer.append(btn)
   });
}
const loadAllProducts = ()=>{
    fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(data=>displayAllProducts(data))
}
const displayAllProducts = (products) =>{
    const allProductsContainer = document.getElementById('all-products-container')
    allProductsContainer.innerHTML = "";
    products.forEach(product=>{
        const card = document.createElement('div');
        card.innerHTML = `
          <div class="card bg-base-100 h-full shadow-sm">
                    <figure class="bg-slate-100 p-6">
                        <img class="h-56 w-full object-contain" src="${product.image}" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between items-center">
                        <button class="btn text-xs bg-sky-100 text-blue-600 rounded-xl">${product.category}</button>
                        <div>
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <span>${product.rating.rate}</span> <span>(${product.rating.count})</span>
                        </div>
                        </div>
                        <h2 class="text-xl font-bold truncate">${product.title}</h2>
                        <p class="font-bold text-xl">$${product.price}</p>
                        <div class="flex justify-between text-2xl mt-6">
                            <button class="btn p-6 rounded-xl"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn bg-blue-800 text-white p-6 rounded-xl"><i class="fa-solid fa-cart-shopping "></i>Add</button>
                        </div>
                    </div>
                </div>
        `
        allProductsContainer.append(card)

    } )
}
const loadProductsByCategories = (category) =>{
    fetch(`https://fakestoreapi.com/products/category/${category}`)
     .then(res=>res.json())
     .then(data=>displayProductsByCategories(data))
}
const displayProductsByCategories = (products)=>{
    const allProductsContainer = document.getElementById('all-products-container')
    allProductsContainer.innerHTML = "";
    products.forEach(product=>{
           const card = document.createElement('div');
        card.innerHTML = `
          <div class="card bg-base-100 h-full shadow-sm">
                    <figure class="bg-slate-100 p-6">
                        <img class="h-56 w-full object-contain" src="${product.image}" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between items-center">
                        <button class="btn text-xs bg-sky-100 text-blue-600 rounded-xl">${product.category}</button>
                        <div>
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <span>${product.rating.rate}</span> <span>(${product.rating.count})</span>
                        </div>
                        </div>
                        <h2 class="text-xl font-bold truncate">${product.title}</h2>
                        <p class="font-bold text-xl">$${product.price}</p>
                        <div class="flex justify-between text-2xl mt-6">
                            <button class="btn p-6 rounded-xl"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn bg-blue-800 text-white p-6 rounded-xl"><i class="fa-solid fa-cart-shopping "></i>Add</button>
                        </div>
                    </div>
                </div>
        `
        allProductsContainer.append(card)

    })
}
loadCategories();