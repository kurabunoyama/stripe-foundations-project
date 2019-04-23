function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(id) {
  let product = document.getElementById(id)
  let title = product.dataset.title
  let price = product.dataset.price
  let description = product.dataset.description
  let modalTitle = document.getElementById('productItemTitle')
  let modalDescription = document.getElementById('productItemDescription')
  let modalPrice = document.getElementById('productItemPrice')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  productItemPrice.innerHTML = price
  console.log(product.dataset.price)
  $('#purchaseProductModal').modal('show')
}

