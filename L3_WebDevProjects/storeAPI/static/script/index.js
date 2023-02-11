const cardList = document.querySelectorAll('.productCard');
let page = 1;
let pageLimit = 0;

async function LoadPage(n) {
    page = n;
    scrollTo(top);
    try {
        let test = await axios({
            method: 'get',
            url: `/api/v1/products?page=${n}`,
        });

        productsList = test.data.products;
        console.log(productsList);
        document.querySelector('.product').innerHTML = '';
        for (const key in productsList) {
            document.querySelector('.product').innerHTML +=
                `<button class="productCard" type="button"><img src="/static/images/pr1.jpg" alt="!" />
                <div class="abtProduct">
                    <div class="productName pDetail">${productsList[key].name}</div>
                    <div class="featured pDetail"></div>
                    <div class="productDescription pDetail">WTF this is the device used for the photography you dummy</div>
                    <div class="productDescription pDetail price">Price: $${productsList[key].price}</div>
                    <div class="productDescription pDetail company">Company: $${productsList[key].company}</div>
                    <div class="starContainer pDetail rating"></div>
                </div>
            </button>`;
            let rating = productsList[key].rating;
            while (rating-- > 0) {
                const star = document.createElement('div');
                star.className = 'star';
                document.querySelectorAll('.rating')[key].appendChild(star);
            }
            if (rating < 0) {
                const halfStar = document.createElement('div');
                halfStar.className = 'halfStar';
                document.querySelectorAll('.rating')[key].appendChild(halfStar);
            }
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

async function movefb(n) {
    if (n > 0) {
        page = n;
        LoadPage(page);
    }
}