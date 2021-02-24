
let formats_select = document.getElementById('format_list')
let height_select = document.getElementById('heigth_list')
let tmp = []
let parent_container = document.getElementById('parent')

const panels = [
    {
        "id": "602b87a8fd4364785b7ea4bc",
        "name": "OSB-3 Кроноспан - 4",
        "length": 2400,
        "width": 2400,
        "heigth": 22,
        "price": 1237
    },
    {
        "id": "602b87a81be1ae0aee172eea",
        "name": "OSB-3 Кроноспан - 13",
        "length": 1200,
        "width": 1200,
        "heigth": 16,
        "price": 2594
    },
    {
        "id": "602b87a8c27f10ba83c39231",
        "name": "OSB-3 Кроноспан - 5",
        "length": 2400,
        "width": 2200,
        "heigth": 22,
        "price": 2035
    },
    {
        "id": "602b87a8cbabfcbe7f06d9d9",
        "name": "OSB-3 Кроноспан - 15",
        "length": 1600,
        "width": 2400,
        "heigth": 20,
        "price": 2363
    },
    {
        "id": "602b87a83c5d62cfa1fae118",
        "name": "OSB-3 Кроноспан - 19",
        "length": 2000,
        "width": 1200,
        "heigth": 22,
        "price": 2926
    },
    {
        "id": "602b87a8d1652e9e6c46ff67",
        "name": "OSB-3 Кроноспан - 13",
        "length": 400,
        "width": 2200,
        "heigth": 8,
        "price": 3767
    },
    {
        "id": "602b87a86ab6e79b6439ea1d",
        "name": "OSB-3 Кроноспан - 7",
        "length": 2400,
        "width": 2200,
        "heigth": 22,
        "price": 3030
    },
    {
        "id": "602b87a86b6de8674007237b",
        "name": "OSB-3 Кроноспан - 16",
        "length": 400,
        "width": 2200,
        "heigth": 8,
        "price": 2123
    },
    {
        "id": "602b87a8871e1af101e79b2b",
        "name": "OSB-3 Кроноспан - 21",
        "length": 800,
        "width": 2200,
        "heigth": 16,
        "price": 1784
    },
    {
        "id": "602b87a83e545647de4f22fa",
        "name": "OSB-3 Кроноспан - 12",
        "length": 400,
        "width": 2400,
        "heigth": 22,
        "price": 2001
    },
    {
        "id": "602b87a894ad86671ded2ac5",
        "name": "OSB-3 Кроноспан - 21",
        "length": 2000,
        "width": 2200,
        "heigth": 8,
        "price": 1850
    },
    {
        "id": "602b87a80e1095744ef0508b",
        "name": "OSB-3 Кроноспан - 6",
        "length": 1200,
        "width": 2200,
        "heigth": 12,
        "price": 2487
    },
    {
        "id": "602b87a8215250bea0f5b621",
        "name": "OSB-3 Кроноспан - 14",
        "length": 1600,
        "width": 2400,
        "heigth": 16,
        "price": 1419
    },
    {
        "id": "602b87a83703548e76d8e532",
        "name": "OSB-3 Кроноспан - 18",
        "length": 2400,
        "width": 1200,
        "heigth": 12,
        "price": 3310
    },
    {
        "id": "602b87a88e65d981690b08b2",
        "name": "OSB-3 Кроноспан - 13",
        "length": 400,
        "width": 2200,
        "heigth": 10,
        "price": 1723
    },
    {
        "id": "602b87a80cd739c737d36850",
        "name": "OSB-3 Кроноспан - 9",
        "length": 1600,
        "width": 2200,
        "heigth": 22,
        "price": 1600
    },
    {
        "id": "602b87a842692bdca8731e51",
        "name": "OSB-3 Кроноспан - 17",
        "length": 400,
        "width": 2200,
        "heigth": 10,
        "price": 3049
    },
    {
        "id": "602b87a86f628c9f34cda9a7",
        "name": "OSB-3 Кроноспан - 15",
        "length": 1200,
        "width": 2400,
        "heigth": 16,
        "price": 1778
    },
    {
        "id": "602b87a80d1371d3aed50d47",
        "name": "OSB-3 Кроноспан - 18",
        "length": 800,
        "width": 1200,
        "heigth": 20,
        "price": 1731
    },
    {
        "id": "602b87a82e149b60dd841b9f",
        "name": "OSB-3 Кроноспан - 12",
        "length": 2000,
        "width": 2200,
        "heigth": 22,
        "price": 3867
    },
    {
        "id": "602b87a8deccda3d8897c2c8",
        "name": "OSB-3 Кроноспан - 5",
        "length": 400,
        "width": 1200,
        "heigth": 10,
        "price": 2240
    },
    {
        "id": "602b87a8e327c79df3a89ef6",
        "name": "OSB-3 Кроноспан - 15",
        "length": 800,
        "width": 1200,
        "heigth": 20,
        "price": 1460
    },
    {
        "id": "602b87a85867f394891b96d6",
        "name": "OSB-3 Кроноспан - 6",
        "length": 400,
        "width": 2200,
        "heigth": 20,
        "price": 3571
    },
    {
        "id": "602b87a8a51c838d7b05e1a0",
        "name": "OSB-3 Кроноспан - 16",
        "length": 2400,
        "width": 1200,
        "heigth": 8,
        "price": 1618
    },
    {
        "id": "602b87a8de1145aeb9053c1c",
        "name": "OSB-3 Кроноспан - 7",
        "length": 2400,
        "width": 2400,
        "heigth": 10,
        "price": 3133
    },
    {
        "id": "602b87a87fb3acb7bb612e4e",
        "name": "OSB-3 Кроноспан - 22",
        "length": 400,
        "width": 2200,
        "heigth": 12,
        "price": 2549
    },
    {
        "id": "602b87a8ed32245d8192dcde",
        "name": "OSB-3 Кроноспан - 21",
        "length": 800,
        "width": 1200,
        "heigth": 16,
        "price": 2601
    },
    {
        "id": "602b87a86c2331d47cdd5f05",
        "name": "OSB-3 Кроноспан - 13",
        "length": 2000,
        "width": 1200,
        "heigth": 12,
        "price": 1679
    },
    {
        "id": "602b87a8f116ff5c2628d228",
        "name": "OSB-3 Кроноспан - 4",
        "length": 2400,
        "width": 1200,
        "heigth": 16,
        "price": 3319
    },
    {
        "id": "602b87a8c76f7ea91b6da036",
        "name": "OSB-3 Кроноспан - 14",
        "length": 1200,
        "width": 2400,
        "heigth": 10,
        "price": 2534
    },
    {
        "id": "602b87a81a191b1bf94b457e",
        "name": "OSB-3 Кроноспан - 6",
        "length": 1200,
        "width": 2200,
        "heigth": 16,
        "price": 3736
    },
    {
        "id": "602b87a8b18f8512a1532067",
        "name": "OSB-3 Кроноспан - 16",
        "length": 400,
        "width": 2400,
        "heigth": 16,
        "price": 1531
    },
    {
        "id": "602b87a8f1d0ba9f9b66be40",
        "name": "OSB-3 Кроноспан - 12",
        "length": 2400,
        "width": 2200,
        "heigth": 10,
        "price": 1888
    },
    {
        "id": "602b87a8b427fb834e59bbc2",
        "name": "OSB-3 Кроноспан - 5",
        "length": 1200,
        "width": 1200,
        "heigth": 12,
        "price": 2113
    },
    {
        "id": "602b87a85f517f1c8ca17c63",
        "name": "OSB-3 Кроноспан - 14",
        "length": 800,
        "width": 2400,
        "heigth": 20,
        "price": 1988
    },
    {
        "id": "602b87a8d456a1087477f692",
        "name": "OSB-3 Кроноспан - 21",
        "length": 400,
        "width": 2400,
        "heigth": 22,
        "price": 2217
    },
    {
        "id": "602b87a86abd9c3da6a87d89",
        "name": "OSB-3 Кроноспан - 17",
        "length": 2000,
        "width": 1200,
        "heigth": 12,
        "price": 1313
    },
    {
        "id": "602b87a86d943ecb540a87ce",
        "name": "OSB-3 Кроноспан - 5",
        "length": 400,
        "width": 2400,
        "heigth": 20,
        "price": 2851
    },
    {
        "id": "602b87a8a194b44367bd591a",
        "name": "OSB-3 Кроноспан - 5",
        "length": 400,
        "width": 2400,
        "heigth": 22,
        "price": 1955
    },
    {
        "id": "602b87a8adb0095e33983258",
        "name": "OSB-3 Кроноспан - 17",
        "length": 2400,
        "width": 2400,
        "heigth": 8,
        "price": 2540
    },
    {
        "id": "602b87a87a5b675cd2c04690",
        "name": "OSB-3 Кроноспан - 18",
        "length": 1200,
        "width": 2200,
        "heigth": 12,
        "price": 2283
    },
    {
        "id": "602b87a8f206d55b6dd80484",
        "name": "OSB-3 Кроноспан - 14",
        "length": 1600,
        "width": 2400,
        "heigth": 16,
        "price": 1391
    },
    {
        "id": "602b87a841b99bd470fe120a",
        "name": "OSB-3 Кроноспан - 7",
        "length": 800,
        "width": 2200,
        "heigth": 16,
        "price": 2115
    },
    {
        "id": "602b87a89dfa2e0243b266f8",
        "name": "OSB-3 Кроноспан - 8",
        "length": 1200,
        "width": 2200,
        "heigth": 12,
        "price": 1773
    },
    {
        "id": "602b87a8a64d8e27d97b8737",
        "name": "OSB-3 Кроноспан - 18",
        "length": 800,
        "width": 1200,
        "heigth": 12,
        "price": 1287
    },
    {
        "id": "602b87a82ff6e4e05888a3fb",
        "name": "OSB-3 Кроноспан - 10",
        "length": 1200,
        "width": 1200,
        "heigth": 20,
        "price": 2265
    },
    {
        "id": "602b87a84bf7911726de4152",
        "name": "OSB-3 Кроноспан - 13",
        "length": 2400,
        "width": 1200,
        "heigth": 22,
        "price": 2781
    },
    {
        "id": "602b87a86c38d8f31ec19b82",
        "name": "OSB-3 Кроноспан - 4",
        "length": 800,
        "width": 2200,
        "heigth": 20,
        "price": 3062
    },
    {
        "id": "602b87a8e95e5bd69bc81d13",
        "name": "OSB-3 Кроноспан - 5",
        "length": 1600,
        "width": 2400,
        "heigth": 20,
        "price": 3210
    },
    {
        "id": "602b87a89e974a066904219b",
        "name": "OSB-3 Кроноспан - 9",
        "length": 400,
        "width": 1200,
        "heigth": 16,
        "price": 2989
    },
    {
        "id": "602b87a80929bfc248030fa1",
        "name": "OSB-3 Кроноспан - 5",
        "length": 2000,
        "width": 2400,
        "heigth": 20,
        "price": 2069
    },
    {
        "id": "602b87a825f58b5efdb702ca",
        "name": "OSB-3 Кроноспан - 9",
        "length": 2400,
        "width": 1200,
        "heigth": 22,
        "price": 3123
    },
    {
        "id": "602b87a8513a93cc497315db",
        "name": "OSB-3 Кроноспан - 8",
        "length": 2000,
        "width": 2400,
        "heigth": 8,
        "price": 1884
    },
    {
        "id": "602b87a85109329177ba61b9",
        "name": "OSB-3 Кроноспан - 14",
        "length": 2400,
        "width": 2200,
        "heigth": 20,
        "price": 2381
    },
    {
        "id": "602b87a899531efa3f623647",
        "name": "OSB-3 Кроноспан - 4",
        "length": 2000,
        "width": 2200,
        "heigth": 22,
        "price": 1655
    },
    {
        "id": "602b87a80ca1c466faa3f56e",
        "name": "OSB-3 Кроноспан - 6",
        "length": 400,
        "width": 2200,
        "heigth": 16,
        "price": 1751
    },
    {
        "id": "602b87a8134400e754b18f3e",
        "name": "OSB-3 Кроноспан - 13",
        "length": 1600,
        "width": 2400,
        "heigth": 12,
        "price": 1509
    },
    {
        "id": "602b87a838a80666388337ab",
        "name": "OSB-3 Кроноспан - 11",
        "length": 800,
        "width": 2200,
        "heigth": 12,
        "price": 2025
    },
    {
        "id": "602b87a83255c7d10dc2bac4",
        "name": "OSB-3 Кроноспан - 18",
        "length": 1600,
        "width": 2200,
        "heigth": 22,
        "price": 2355
    },
    {
        "id": "602b87a8192ef7f16a3459ad",
        "name": "OSB-3 Кроноспан - 17",
        "length": 400,
        "width": 1200,
        "heigth": 20,
        "price": 1461
    },
    {
        "id": "602b87a828723e3f351a6993",
        "name": "OSB-3 Кроноспан - 7",
        "length": 400,
        "width": 2400,
        "heigth": 20,
        "price": 1483
    },
    {
        "id": "602b87a851f9b75495df9066",
        "name": "OSB-3 Кроноспан - 14",
        "length": 400,
        "width": 2200,
        "heigth": 20,
        "price": 1671
    },
    {
        "id": "602b87a8b913ad2182250497",
        "name": "OSB-3 Кроноспан - 4",
        "length": 2000,
        "width": 2200,
        "heigth": 12,
        "price": 3215
    },
    {
        "id": "602b87a827170b651247b718",
        "name": "OSB-3 Кроноспан - 8",
        "length": 800,
        "width": 1200,
        "heigth": 20,
        "price": 3797
    },
    {
        "id": "602b87a82d665714d29618f2",
        "name": "OSB-3 Кроноспан - 21",
        "length": 400,
        "width": 2200,
        "heigth": 16,
        "price": 3757
    },
    {
        "id": "602b87a8df6e8d9cf5d41111",
        "name": "OSB-3 Кроноспан - 4",
        "length": 1200,
        "width": 2400,
        "heigth": 10,
        "price": 2077
    },
    {
        "id": "602b87a8146fc0dd1777a251",
        "name": "OSB-3 Кроноспан - 21",
        "length": 2000,
        "width": 1200,
        "heigth": 16,
        "price": 2440
    },
    {
        "id": "602b87a89e5e1aa47ded23eb",
        "name": "OSB-3 Кроноспан - 11",
        "length": 2400,
        "width": 2400,
        "heigth": 12,
        "price": 1471
    },
    {
        "id": "602b87a8b3e2c9afbada5266",
        "name": "OSB-3 Кроноспан - 7",
        "length": 1200,
        "width": 1200,
        "heigth": 20,
        "price": 2699
    },
    {
        "id": "602b87a8d615452d2a0f1b50",
        "name": "OSB-3 Кроноспан - 19",
        "length": 2000,
        "width": 2200,
        "heigth": 16,
        "price": 2620
    }
]

function changeSelects(event) {
    if (event.target.getAttribute('id') === 'format_list') {
        formats_select = event.target
        height_select = formats_select.closest('.form').querySelector('.heigth_list')
        height_select.innerHTML = ''
        tmp = []
        let id = formats_select.selectedIndex
        let length = Number(formats_select[id].dataset.length)
        let width = Number(formats_select[id].dataset.width)
        panels.forEach(item => {
            if (item.length == length && item.width == width) {
                createOption(height_select, item.heigth, item)
            }
        })
    }

}

function createOption(domElement, textContent, item) {
    if (domElement) {
        if (tmp.indexOf(textContent) < 0) {
            let el = document.createElement("option")
            el.textContent = textContent
            el.value = item.id
            el.dataset.length = item.length
            el.dataset.width = item.width
            el.dataset.heigth = item.heigth
            domElement.appendChild(el)
            tmp.push(textContent)
        }
    }

}

function getAllValues() {
    let AllForms = document.querySelectorAll('.form')
    let p = []
    AllForms.forEach(square => {
        let form = new FormData(square)
        let obj = {}
        for(let pair of form.entries()) {
            obj[pair[0]] = pair[1]
        }
        p.push(obj)
    })

    return p
}

function renderResults(array) {
    let result_parent = document.getElementById('result_parent')
    let result_template = document.getElementById('result_template')
    let result_child = document.querySelectorAll('.result_child')
    result_child.forEach(item => item.remove())
    let i=1
    array.forEach(result => {
        let clone = result_template.cloneNode()
        let id = Date.now()
        clone.id = id
        clone.classList.add ('result_child')
        clone.style.display = "block"
        clone.innerHTML = result_template.innerHTML
        clone.querySelector('.square_id').innerHTML     = i++
        // clone.querySelector('.panel_name').innerHTML     = result.name
        clone.querySelector('.square').innerHTML        = result.s_user
        clone.querySelector('.panel_count').innerHTML   = result.count
        // clone.querySelector('.panel_cost').innerHTML    = result.price
        clone.querySelector('.total_price').innerHTML   = result.total_cost
        result_parent.appendChild(clone)

    } )
}

let add_square = document.querySelector('.addNewPlane_index')
    if(add_square) {
        add_square.addEventListener('click', (e) => {
        let template = document.getElementById('template')
        if (document.querySelectorAll('.child_element').length >= 4) {
            e.target.classList.add('disabled')
        }
        let clone = template.cloneNode()
        let id = Date.now()
        clone.id = id
        clone.classList.add('child_element')
        clone.innerHTML = template.innerHTML
        parent_container.appendChild(clone)

        })
    }
panels.forEach(item => {
    createOption(formats_select, item.length + 'x' + item.width, item)
    createOption(height_select, item.heigth, item)
})

if (parent_container) {
    parent_container.addEventListener('change', e => changeSelects(e))
}

let calc_button = document.getElementById('calc_button')
    if (calc_button) {
        calc_button.addEventListener('click', () => {
            let AllSquares = getAllValues()
            let results = []
            AllSquares.forEach(square => {
                let panel = panels.filter(item => item.id == square.heigth)
                let obj = {}
                panel.forEach(item => {
                    let s_user = (Number(square.length_field) * Number(square.height_filed)) / 1000000
                    let s_panel = (Number(item.length) * Number(item.width)) / 1000000
                    let count = Math.ceil(s_user / s_panel)
                    let total_cost = count * Number(item.price)
                    obj = {
                        name: item.name,
                        count: count,
                        s_user: parseFloat(s_user).toFixed(2),
                        price: item.price.toLocaleString('ru-RU'),
                        total_cost: total_cost.toLocaleString('ru-RU')
                    }
                    results.push(obj)
                })

            })
            renderResults(results)
        })
    }

// Этот скрипт переключает стили у активных опций доставки и отображает соответсвующую ей картинку
if (document.querySelector('.deliveryButton_delivery')) {
    let btns_delivery = document.querySelectorAll('.deliveryOption_delivery');
    let imgWindow_delivery = document.querySelector('.deliveryContent_delivery');
    let btnsArray_delivery = [];
    let selectBtnArray_delivery = [];

    for (let btn of btns_delivery) {
        btnsArray_delivery.push(btn);
    }

    imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[0].getAttribute("data-src") + ')';


    for (let i = 0; i <= btnsArray_delivery.length - 1; i ++) {
        btnsArray_delivery[i].onclick = function () {
            btnsArray_delivery[i].classList.add('shownButton_delivery');
            selectBtnArray_delivery[0] = btnsArray_delivery[i];
            imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[i].getAttribute("data-src") + ')';
            for (let j = 0; j <= btnsArray_delivery.length - 1; j ++) {
                if (selectBtnArray_delivery[0] !== btnsArray_delivery[j]) {
                    btnsArray_delivery[j].classList.remove('shownButton_delivery');
                }
            }
        }
    }
}
// Этот скрипт фильтрует содержимое вкладок и переключает стиль активной вкладки
if (document.querySelector('.deliveryButton_delivery')) {
    let deliveryBtn_delivery = document.querySelectorAll('.deliveryButton_delivery');
    let btnDelivery_delivery = document.querySelectorAll('.deliveryOption_delivery');
    let btnDeliveryArray_delivery = [];
    let deliveryBtnArray_delivery = [];
    let selectedBtnArray_delivery = [];

    for (let btn of btnDelivery_delivery) {
        btnDeliveryArray_delivery.push(btn);
    }

    for (let btn of deliveryBtn_delivery) {
        deliveryBtnArray_delivery.push(btn);
    }

    // Фильтрация
    let btnsSorting = function (filterValue) {
        for (let i = 0; i <= btnDeliveryArray_delivery.length - 1; i ++) {
            btnDeliveryArray_delivery[i].style.display = "none";
            if (btnDeliveryArray_delivery[i].dataset.criterionFilter === filterValue) {
                btnDeliveryArray_delivery[i].style.display = "block";
            }
        }
    }

    // Состояние фильтра по-умолчанию
    let defaultBtn_delivery = deliveryBtnArray_delivery[0];
    for (let i = 0; i <= btnDelivery_delivery.length - 1; i ++) {
        if (defaultBtn_delivery.dataset.filter !== btnDelivery_delivery[i].dataset.criterionFilter) {
            btnDelivery_delivery[i].style.display = "none";
        }
    }

    // Фильтр
    for (let i = 0; i <= deliveryBtnArray_delivery.length - 1; i ++) {
        deliveryBtnArray_delivery[i].onclick = function () {
            deliveryBtnArray_delivery[i].classList.add('buttonClick_delivery');
            selectedBtnArray_delivery[0] = deliveryBtnArray_delivery[i];
            let filterValue = selectedBtnArray_delivery[0].dataset.filter;
            btnsSorting(filterValue);
            for (let j = 0; j <= deliveryBtnArray_delivery.length - 1; j ++) {
                if (selectedBtnArray_delivery[0] !== deliveryBtnArray_delivery[j]) {
                    deliveryBtnArray_delivery[j].classList.remove('buttonClick_delivery');
                }
            }
        }    
    }
}
// Этот скрипт переключает кнопки карточки товара и и пределяет цену за шт и метр кв в зависимости от выбранного значения толщины 
if (document.querySelector('.productCard')) {
    let cardsProduct_productCard = document.querySelectorAll('.productCard');
    let selectBtn_productCard = [];

    for (let i = 0; i <= cardsProduct_productCard.length - 1; i ++) {
        let firstBtns = cardsProduct_productCard[i].querySelectorAll('.productBtn');
        let defaultPriceVaules = cardsProduct_productCard[i].querySelector('.materialPriceValue');
        let defaultValueNumbers = cardsProduct_productCard[i].querySelector('.materialValueNumber');
        for (let j = 0; j <= firstBtns.length - 1; j ++) {
            firstBtns[0].classList.add('selectButton');
            defaultPriceVaules.textContent = firstBtns[0].dataset.priceFilter;
            defaultValueNumbers.textContent = firstBtns[0].dataset.valueFilter;
        }
    }

    let btnsToggler_productCard = function (card) {
        let list = card.querySelectorAll('.productBtn');
        let priceList = card.querySelector('.materialPriceValue');
        let materialValue = card.querySelector('.materialValueNumber');
        for (let i = 0; i <= list.length - 1; i ++) {
            list[i].addEventListener('click', function () {
                list[i].classList.add('selectButton');
                priceList.textContent = list[i].dataset.priceFilter;
                materialValue.textContent = list[i].dataset.valueFilter;
                selectBtn_productCard[0] = list[i];
                for (let j = 0; j <= list.length - 1; j ++) {
                    if (selectBtn_productCard[0] !== list[j]) {
                        list[j].classList.remove('selectButton');
                    }
                }
            }) 
        }
    }

    for (var i = 0; i <= cardsProduct_productCard.length - 1; i ++) {
        cardsProduct_productCard[i].addEventListener('click', function () {
            btnsToggler_productCard(this);
        }, true)
    }
}
if (document.querySelector('.placeholder1_contacts')) {
    let citySelect3_contacts = document.querySelector('#city_contacts');
    let resetButton3_contacts = document.querySelector('.resetCity_contacts');
    let yourCity3_contacts = document.querySelector('.placeholder1_contacts');

    citySelect3_contacts.oninput = function() {
        if (citySelect3_contacts.value.length >= 1) {
            resetButton3_contacts.classList.add('shown_contacts');
            yourCity3_contacts.classList.add('moveCityText_contacts');
        } else {
            resetButton3_contacts.classList.remove('shown_contacts');
            yourCity3_contacts.classList.remove('moveCityText_contacts');
        };
    };
}
// Этот скрипт отслеживает наличие текста в поле ввода. И отображает её при его наличии. 
if (document.querySelector('.resetCity_delivery')) {
    let citySelect_delivery = document.querySelector('#city_delivery');
    let resetButton_delivery = document.querySelector('.resetCity_delivery');
    let yourCity1_delivery = document.querySelector('.placeholder1_delivery');

    citySelect_delivery.oninput = function() {
        if (citySelect_delivery.value.length >= 1) {
            resetButton_delivery.classList.add('shown_delivery');
            yourCity1_delivery.classList.add('moveCityText_delivery');
        } else {
            resetButton_delivery.classList.remove('shown_delivery');
            yourCity1_delivery.classList.remove('moveCityText_delivery');
        }
    }

    resetButton_delivery.addEventListener('click', function() {
        resetButton_delivery.classList.remove('shown_delivery');
    })
}
if (document.querySelector('.filterCollapse_osbOnFloor')) {
    let filterCheckbox_osbOnFloor = document.querySelector('.filterCollapse_osbOnFloor');

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1006) {
            filterCheckbox_osbOnFloor.classList.remove('show');
        } else {
            filterCheckbox_osbOnFloor.classList.add('show');
        }
    })
}
if (document.querySelector('.slider2LinkShowAll_index')) {
    let tabsFirstFilter_index = document.querySelectorAll('.button_catalog');
    let filterLink_index = document.querySelector('.slider2LinkShowAll_index');
    let tabName_index = document.querySelector('.tabTitle_index');

    tabName_index.textContent = tabsFirstFilter_index[0].textContent;
    filterLink_index.href = tabsFirstFilter_index[0].dataset.link;

    for (let i = 0; i <= tabsFirstFilter_index.length - 1; i ++) {
        tabsFirstFilter_index[i].addEventListener('click', function() {
            tabName_index.textContent = tabsFirstFilter_index[i].textContent;
            filterLink_index.href = tabsFirstFilter_index[i].dataset.link;
        })
    }
}
// Этот скрипт определяет количество дополнительных элементов списка и по нажатию на кнопку "ещё" показывает их.

let footerList = document.querySelector('.footerMenuByApplicationList'); 
let elementsList = footerList.querySelectorAll('li');
let valueHiddenElements = footerList.querySelector('.hiddenListElements');
let moreListElements = footerList.querySelector('.moreEl');
let counter = 0;
let hiddenListElements = [];


for (let i = 0; i <= elementsList.length - 1; i ++) {
    counter ++;
    if (counter > 8) {
        elementsList[i].style.display = "none";
        hiddenListElements.push(elementsList[i]);
        valueHiddenElements.textContent = hiddenListElements.length;
    }
}

moreListElements.addEventListener('click', function() {
    for (let i = 0; i <= hiddenListElements.length - 1; i ++) {
        hiddenListElements[i].style.display = "block";
        moreListElements.style.display = "none";
    }
})
// Этот скрипт отвечает за галлерею страницы. 
if (document.querySelector('.page3ContentImg')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let galleryImgContainer_productCard = document.querySelector('.page3ContentImg');
    let galleryBtns_productCard = document.querySelectorAll('.previewImg_productCard');
    let galleryImgs_productCard = document.querySelectorAll('.galleryBackground_productCard');
    let galleryBtnsArray_productCard = [];
    let selectedBtnsArray_productCard = [];
    let galleryImgsArray_productCard = [];

    if (btns_productCard.length > 0) {
        for (let btn of galleryBtns_productCard) {
            galleryBtnsArray_productCard.push(btn);
        }

        for (let pic of galleryImgs_productCard) {
            galleryImgsArray_productCard.push(pic);
        }
        if (galleryImgsArray_productCard.length > 0) {
            galleryImgContainer_productCard.style.backgroundImage = 'url(' + galleryImgsArray_productCard[0].getAttribute("src") + ')';

            for (let i = 0; i <= galleryBtnsArray_productCard.length - 1; i ++) {
                galleryBtnsArray_productCard[i].onclick = function () {
                    galleryBtnsArray_productCard[i].classList.add('shownIcon_productCard');
                    galleryImgContainer_productCard.style.backgroundImage = 'url(' + galleryImgsArray_productCard[i].getAttribute("src") + ')';
                    selectedBtnsArray_productCard[0] = galleryBtnsArray_productCard[i];
                    for (let j = 0; j <= galleryBtnsArray_productCard.length - 1; j ++) {
                        if (selectedBtnsArray_productCard[0] !== galleryBtnsArray_productCard[j]) {
                            galleryBtnsArray_productCard[j].classList.remove('shownIcon_productCard');
                        }
                    } 
                }
            }
        }
    }
}
// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.mottexPhone_contacts')) {
    var citySelect = document.querySelector('#city_contacts');
    var yourCity1 = document.querySelector('.placeholder1_contacts');
    var resetButton = document.querySelector('.resetCity_contacts');

    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_contacts');
        resetButton_contacts.classList.add('shown_contacts');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_contacts');
    };

    resetButton.addEventListener('click', function() {
        resetButton.classList.remove('shown_contacts');
    })
}


// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.deliveryMenu_delivery')) {
    var citySelect = document.querySelector('#city_delivery');
    var yourCity1 = document.querySelector('.placeholder1_delivery');
    var resetButton = document.querySelector('.resetCity_delivery');


    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_delivery');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_delivery');
        resetButton_delivery.classList.remove('shown_delivery');
    };
}


// Перемещение placeholder'а в поле ввода телефона вверх
if (document.querySelector('#phone') && document.querySelector('.placeholder')) {
    var phoneSelect_page1 = document.querySelector('#phone');
    var yourPhone_page1 = document.querySelector('.placeholder');

    phoneSelect_page1.onclick = function() {
        yourPhone_page1.classList.add('move');
    };
}
// Этот скрипт отображает слайдер главного баннера страницы
if (document.querySelector('.slider1_index')) {
    $('.slider1_index').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        pauseOnDotsHover: false
    });
}
// Маска для поля ввода номера
if (document.querySelector('#phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('#phone'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___)-___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });
    });
}
if (document.querySelector('.popover_productCard')) {
    let popover_productCard = document.querySelector('.popover_productCard');
    let popoverText_productCard = document.querySelector('.popoverText_productCard');

    let fadePopup_productCard = function () {
        popover_productCard.style.opacity = "0";
        popover_productCard.style.display = "none";
    }

    function openPopup (text, type) {
        popover_productCard.style.opacity = "1";
        popoverText_productCard.textContent = text;
        if (type === 'danger') {
            popover_productCard.style.borderColor = "#e84d4d";
            popoverText_productCard.style.color = "#e84d4d";
        }
        if (type === 'info') {
            popover_productCard.style.borderColor = "#5bc793";
            popoverText_productCard.style.color = "#5bc793";
        }
        if (type === 'warning') {
            popover_productCard.style.borderColor = "#d9c836";
            popoverText_productCard.style.color = "#d9c836";
        }
        setTimeout(fadePopup_productCard, 3000);
    }
}

if (document.querySelector('.productCard')) {
    let popup = document.querySelector('.popup');
    let cards = document.querySelectorAll('.productCard');
    let closePopupBtn = popup.querySelector('.popupCloseBtn');
    let body = document.querySelector('body');
    let popupProductName = popup.querySelector('.popupProductName');
    let hiddenFormField = popup.querySelector('.goodName');

    let cardClickHandler = function(item) {
        let productCardBtn = item.querySelector('.refineRemainder');
        productCardBtn.addEventListener('click', function(evt) {
            popup.classList.add('showPopup');
            let prodcutName = item.querySelector('.productDescription > a');
            popupProductName.textContent = prodcutName.textContent;
            hiddenFormField.value = prodcutName.textContent;
            let popupActive = document.querySelector('.popup.showPopup');
        });
    }

    for (let i = 0; i < cards.length; i ++) {
        cardClickHandler(cards[i]);
    };

    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove('showPopup');
    });

    document.addEventListener('keydown', function(evt){
        if (evt.key === 'Escape') {
            popup.classList.remove('showPopup');
        }
    });
}
// Этот скрипт отображает баннер страницы
if (document.querySelector('.slider_osbOnFloor')) {
    $('.slider_osbOnFloor').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        pauseOnFocus: false,
        arrows: true,
        dots: true,
        pauseOnDotsHover: false,
        prevArrow: $('#next_osbOnFloor'),
        nextArrow: $('#previous_osbOnFloor')
    });
}
if (document.querySelector('.secondSectionMenu_osbOnFloor')) {
    $(document).ready(function () {
        var offset = $('#fixed').offset();
        var topPadding = 0,
        bottomPadding = 4905;
        $(window).scroll(function() {
            if (window.innerWidth >= 1006) {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed").height()) $("#fixed").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed').stop().animate({marginTop: 0});
                }
            }
        });  
    });
}
// Перключатель стилей у активных вкладок 
if (document.querySelector('.button_certificates')) {   
   let tabs_certificates = document.querySelectorAll('.button_certificates');
   let certificateName_certificates = document.querySelector('.serificateName_certificates');
   let selectTab;

    certificateName_certificates.textContent = tabs_certificates[0].textContent;
    tabs_certificates[0].classList.add('tabSelect');

    for (let i = 0; i <= tabs_certificates.length - 1; i ++) {
        tabs_certificates[i].addEventListener('click', function () {
            tabs_certificates[i].classList.add('tabSelect');
            selectTab = tabs_certificates[i];
            console.log(certificateName_certificates.textContent);
            certificateName_certificates.textContent = selectTab.textContent;  
            for (let j = 0; j <= tabs_certificates.length - 1; j ++) {
                if (tabs_certificates[j] !== selectTab) {
                    tabs_certificates[j].classList.remove('tabSelect');
                }
            }
        })
    }
}
// Этот скрипт перемещает грузовик и отображает кнопку прокрутки "в начало"
if (document.querySelector('.up-button') && document.querySelector('.track_index')) {
    var upButton = document.querySelector('.up-button');
    var track = document.querySelector('.track_index');

    window.onscroll = function() {
        if (window.pageYOffset > 3200) {
            upButton.classList.add('shown');
            track.classList.add('trackMove_index');
        } else {
            upButton.classList.remove('shown');
        };
    };

    upButton.onclick = function() {
        scrollTo(0, 0);
    };
}
// Этот скрипт переключает состояние кнопок карточки товара и
// определяет значения параметров страницы в зависимости от выбронного значения толщины
// valueSender_productCard.js


if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let price_productCard = document.querySelector('.priceForPieceValue_productCard');
    let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
    let inStock_productCard = document.querySelector('.countInStock_productCard');
    let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
    let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
    let hiddenValue = document.querySelector('.hiddenValue_productCard');

    function renderProductParameters(obj) {
        price_productCard.textContent = obj.price;
        priceForMeter.textContent = obj.priceForMeter;
        inStock_productCard.textContent = obj.count;
        thicknessCharacteristic_productCard.textContent = obj.thicknessFilter;
        weightCharacteristic_productCard.textContent = obj.weightFilter;
        hiddenValue.value = obj.id;
    }

    function getProductParameters(element) {
        let obj = {}

        if (element) {
            obj = {
                price: element.dataset.price,
                priceForMeter: element.dataset.priceForMeter,
                count: element.dataset.count,
                thicknessFilter: element.dataset.thicknessFilter,
                weightFilter: element.dataset.weightFilter,
                id: element.dataset.id
            }
        }

        return obj
    }

    function changeProductName(obj){
        document.querySelectorAll('.productHeight').forEach(element => {
            element.innerHTML = obj.thicknessFilter
        })

    }

    document.addEventListener('DOMContentLoaded',() => {
        let active_btn = getProductParameters(document.querySelector('.selectButton'))
        renderProductParameters(active_btn)
        changeProductName(active_btn)
    })

    btns_productCard.forEach( element => {
        element.addEventListener('click', e => {
            let productParameter = getProductParameters(e.target)
            renderProductParameters(productParameter)
            changeProductName(productParameter)
            document.querySelector('.selectButton').classList.remove('selectButton')
            e.target.classList.add('selectButton')
        })
    })
}


//     for (let i = 0; i <= btnsArray_productCard.length - 1; i ++) {
//         btnsArray_productCard[i].onclick = function () {
//             price_productCard.textContent = btnsArray_productCard[i].dataset.price;
//             priceForMeter.textContent = btnsArray_productCard[i].dataset.priceForMeter;
//             inStock_productCard.textContent = btnsArray_productCard[i].dataset.count;
//             hiddenValue.value = btnsArray_productCard[i].dataset.id;
//             thicknessCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.thicknessFilter;
//             weightCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.weightFilter;
//             selectBtnArray[0] = btnsArray_productCard[i];
//             btnsArray_productCard[i].classList.add('selectButton');
//             for (let j = 0; j <= btnsArray_productCard.length - 1; j ++) {
//                 if (selectBtnArray[0] !== btnsArray_productCard[j]) {
//                     btnsArray_productCard[j].classList.remove('selectButton');
//                 }
//             }
//         }
//     }
// }
