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
   categoryContainer.append(firstBtn)
   categories.forEach(category => {
   const btn = document.createElement('button');
   btn.innerText =`${category}`
   btn.classList = "btn btn-primary btn-outline rounded-2xl";
   categoryContainer.append(btn)
   });
}
loadCategories()