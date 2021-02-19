let formats_select = document.getElementById('format_list')
let height_select = document.getElementById('heigth_list')
let tmp = []
let parent_container = document.getElementById('parent')
if (parent_container && formats_select &&  height_select )
{
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

    if (document.querySelector('.addNewPlane_index')){
        document.querySelector('.addNewPlane_index').addEventListener('click', (e) => {
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

    parent_container.addEventListener('change', e => changeSelects(e))

    document.getElementById('calc_button').addEventListener('click', () => {
        let AllSquares = getAllValues()
        let results = []
        AllSquares.forEach(square => {
            let panel = panels.filter(item => item.id == square.heigth)
            let obj = {}
            panel.forEach(item => {
                let s_user = (Number(square.length_field)* Number(square.height_filed))/1000000
                let s_panel = (Number(item.length) * Number(item.width))/1000000
                let count = Math.ceil(s_user/s_panel)
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
