const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main_list')

const cardArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    },
    {
        id: 2,
        title: 'Третий товар',
        price: '172 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    },
    {
        id: 3,
        title: 'Четвертый товар',
        price: '173 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    },
    {
        id: 4,
        title: 'Пятый товар',
        price: '174 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    },
    {
        id: 5,
        title: 'Шестой товар',
        price: '175 $',
        address: 'Коростень, р-н Березовки',
        date: '10 июля 11:50',
        img: './image/pvx-image.jpg'
    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main_list-item">
                <div class="content-main_list-item--img">
                    <img src="${item.img}" alt="${item.title}" />
                </div>
                <h5 class="content-main_list-item--title">${item.title}</h5>
                <strong class="content-main_list-item--price">${item.price}</strong>
                <div class="content-main_list-item--desc-box">
                    <span class="content-main_list-item--desc">${item.address}</span>
                    <span class="content-main_list-item--desc">${item.date}</span>
                </div>
            </a>
        `)
    })
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value))
})
