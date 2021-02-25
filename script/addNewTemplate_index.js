let formats_select = document.getElementById('format_list')
let height_select = document.getElementById('heigth_list')
let tmp = []
let parent_container = document.getElementById('parent')

//panels  << index

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
