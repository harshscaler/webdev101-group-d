let allProducts = document.querySelectorAll('.product');
let selector = document.querySelector('.product-selector');


function updateProductList(filter) {

    console.log(filter);
    allProducts.forEach(product => {
        if (filter === 'all') {
            product.style.display = 'block';
        }
        else if(filter === "vegetable"){
            product.style.display = product.id === 'vegetable' ? 'block' : 'none';
        }
        else if(filter === "fruit"){
            product.style.display = product.id === 'fruit' ? 'block' : 'none';
        }
        else if(filter === "grain"){
            product.style.display = product.id === 'grain' ? 'block' : 'none';
        }
    })
}

selector.addEventListener('change', function() {
    let selectedValue = selector.value;
    updateProductList(selectedValue);
})