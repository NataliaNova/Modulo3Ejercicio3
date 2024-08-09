// Asynchronous function to get data from local storage
async function getFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('data'));
  return data;
}

// Asynchronous function to load data with retries and delay
async function loadData(retries = 5, delay = 100) {
  const list = document.getElementById('cart-list');
  for (let i = 0; i < retries; i++) {
    const data = await getFromLocalStorage();
    if (data && data.products.length > 0) {
      updateCounter(data.products.length);
      renderList(data.products);
      updateField('firstName', data.person.name);
      updateField('email', data.person.email);
      list.style.display = 'flex';
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

function updateCounter(value) {
  const elem = document.getElementById('product-amount');
  elem.innerHTML = value;
}

function updateField(id, value) {
  const inputField = document.getElementById(id);
  inputField.value = value;
}

function renderList(data) {
  const list = document.getElementById('cart-list');

  // clear the list
  list.innerHTML = '';

  // create a list item for each object in the data array
  data.forEach(item => {
    // create list item with classes
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between lh-sm';

    // create div for name and description
    const div = document.createElement('div');

    // create and append product name
    const productName = document.createElement('h6');
    productName.className = 'my-0 product-name';
    productName.textContent = item.name;
    div.appendChild(productName);

    // create and append product description
    const productDescription = document.createElement('small');
    productDescription.className = 'text-body-secondary product-description';
    productDescription.textContent = item.description.slice(0, 30);
    div.appendChild(productDescription);
    listItem.appendChild(div);

    // create and append product price
    const productPrice = document.createElement('span');
    productPrice.className = 'text-body-secondary product-price';
    productPrice.textContent = item.price + ' €';
    listItem.appendChild(productPrice);
    list.appendChild(listItem);
  });

  // calculate total price
  const totalPrice = data.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  // create and append total price list item
  const totalListItem = document.createElement('li');
  totalListItem.className = 'list-group-item d-flex justify-content-between';

  const totalText = document.createElement('span');
  totalText.textContent = 'Total (EUR)';
  totalListItem.appendChild(totalText);

  const totalValue = document.createElement('strong');
  totalValue.id = 'total-price';
  totalValue.textContent = totalPrice.toFixed(2) + ' €';
  totalListItem.appendChild(totalValue);

  list.appendChild(totalListItem);
}

window.onload = async () => {
  await loadData();
};
