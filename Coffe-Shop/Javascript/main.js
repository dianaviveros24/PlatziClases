const navbarMenuEmail = document.querySelector('.navbar-email');
const burguerMenuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-car');

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');

const cardsContainer = document.querySelector('.cards-container')


navbarMenuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideOpen = !shoppingCarContainer.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCarContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !shoppingCarContainer.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCarContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobilepMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobilepMenuOpen) {
        // Si el mobileMenu esta abierto y selecciona el aside, se pone la clase inactive para que se cierre
        mobileMenu.classList.add('inactive');
    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCarContainer.classList.toggle('inactive');
}

//Lista de productos que se ofrecen
const productList = [];
//Array dentro de un objeto
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla de TV',
    price: '2000,00',
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

{/* <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$ 120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
             */}

//Crear una funci??n que recibe como parametro un arreglo y que me permite automatizar 
function renderProducts(arr) {
    //Crea un producto por cada elemento dentro de arr, con for of accede a cada elemento y con for in accede al indice
    for (product of arr) {
        //Crear cadda elemento HTML con JS
        const productCard = document.createElement('div');
        //A??adirle la calse a la productCard
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        /* Al img se le asigna un src no una class, as?? que se accede a ese atributo llegando el valor que est?? por cada objeto
        product ={name, price, image} -> product.image */
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');


        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);


        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');

        //Asociar componentes hijos a los componentes padres
        productInfoFigure.appendChild(productImgCar);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

//Se le pasa la lista que va a recorrer puede ser la creada u otra
renderProducts(productList);