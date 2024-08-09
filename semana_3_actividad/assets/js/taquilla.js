const tickets = [
  {
    name: 'Preferencial',
    price: '10',
    asset: './assets/img/localidadPreferente.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat error? Ipsum quisquam voluptatibus ipsam,inventore odit accusamus nostrum maiores quae deleniti, quidem reiciendis? Doloremque illo nihil totam quasi voluptas!.',
  },
  {
    name: 'Accesibilidad',
    price: '3',
    asset: './assets/img/locatidadAccecibilidad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat error? Ipsum quisquam voluptatibus ipsam,inventore odit accusamus nostrum maiores quae deleniti, quidem reiciendis? Doloremque illo nihil totam quasi voluptas!.',
  },
  {
    name: 'General',
    price: '5',
    asset:
      './assets/img/localidadGeneralBarcelona_Obertura_stay_for_the_rest.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat error? Ipsum quisquam voluptatibus ipsam,inventore odit accusamus nostrum maiores quae deleniti, quidem reiciendis? Doloremque illo nihil totam quasi voluptas!.',
  },
];

// Function to get the selected index of a select element
const selectedIndex = sel => sel.selectedIndex;

// Get all elements with class 'toast' and convert NodeList to Array
let toastElList = [].slice.call(document.querySelectorAll('.toast'));
const toastList = toastElList.map(toastEl => {
  return new bootstrap.Toast(toastEl);
});

// Function to render options in a select element
function renderOptions(selectElement, options) {
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Selecciona localidad';
  defaultOption.setAttribute('disabled', true);
  defaultOption.setAttribute('selected', true);

  selectElement.appendChild(defaultOption);

  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.name;
    opt.textContent = option.name;
    opt.setAttribute('data-img-src', option.asset);
    selectElement.appendChild(opt);
  });
}

// Function to get the selected data from an element
function getSelectedData(sel) {
  const { asset, name, price, description } = tickets[selectedIndex(sel) - 1];
  return { asset, name, price, description };
}

// Function to update a card with given data
function updateCard(data) {
  if (data) {
    const cardImg = document.getElementById('card-image');
    const cardTitle = document.getElementById('card-title');
    const cardPrice = document.getElementById('card-price');
    const cardDescription = document.getElementById('card-desc');

    cardImg.src = data.asset;
    cardTitle.innerText = data.name;
    cardPrice.innerText = data.price + ' €';
    cardDescription.innerText = data.description;
  }
}

// Function to save data to local storage
function saveToLocalStorage(data) {
  let existingData = JSON.parse(localStorage.getItem('data'));
  if (existingData && existingData.products.length > 0) {
    existingData.products.push(...data?.products);
    localStorage.setItem('data', JSON.stringify(existingData));
  } else {
    localStorage.setItem('data', JSON.stringify(data));
  }
}

export {
  tickets,
  toastList,
  renderOptions,
  getSelectedData,
  updateCard,
  saveToLocalStorage,
};
