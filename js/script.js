window.addEventListener('load', function(){
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ var ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

var h1 = document.querySelector('h1');
var menuList = document.querySelector('.menu-list');
var menuListPlus = document.querySelector('.menu-list-plus');
var menuListArrows = document.querySelector('.menu-list-arrows');
var itemSettings = document.querySelector('.item-settings');

var food = document.querySelectorAll('.menu-list .food');
var plus = document.querySelector('.menu-list-plus .plus');
var arrows = document.querySelectorAll('.menu-list-arrows .arrow');
var item = document.querySelector('.item-settings .col-12');
var totalH3 = document.querySelector('.item-settings .totalH3 span');
var priceH3 = document.querySelector('.item-settings .priceH3 span');
var printBill = document.querySelector('.item-settings .print-bill');
var printBillBefore = document.querySelector('.item-settings .print-bill .before');
var printBillAfter = document.querySelector('.item-settings .print-bill .after');
var yourBill = document.querySelector('.item-settings .your-bill pre.main');

var onfood

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ h1 ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

h1.addEventListener('click', function (e) {
    menuList.style.opacity = '1'

    for (f of food) {
        f.style.transform = 'translate(0, 0)'
        f.style.visibility = 'visible'
    }

    plus.style.visibility = 'visible'
});

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ food ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

for (let i = 0; i < food.length; i++) {
    food[i].addEventListener('mousedown', function (e) {
        e.preventDefault()
    });
    food[i].addEventListener('contextmenu', function (e) {
        e.preventDefault()
    });

    food[i].addEventListener('mouseover', function (e) {
        plus.style.opacity = .5
        plus.style.transform = `translate(${this.offsetWidth * i}px, -${this.offsetHeight}px)`
        onfood = i
    });

    food[i].addEventListener('mouseout', function (e) {
        plus.style.opacity = 0
    });

    food[i].addEventListener('click', doAllStuff);
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ plus ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

plus.addEventListener('mousedown', function (e) {
    e.preventDefault()
});
plus.addEventListener('contextmenu', function (e) {
    e.preventDefault()
});

plus.addEventListener('mouseover', function (e) {
    this.style.opacity = .5
});

plus.addEventListener('mouseout', function (e) {
    this.style.opacity = 0
});

plus.addEventListener('click', doAllStuff);


//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ arrows ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/////transform-up/////
menuListArrows.style.transform = `translateY(-${plus.offsetHeight}px)`

/////no copy/////
for (arrow of arrows) {
    arrow.addEventListener('mousedown', function (e) {
        e.preventDefault()
    });
    arrow.addEventListener('contextmenu', function (e) {
        e.preventDefault()
    });
}

/////manage arrows/////
function manageArrows(o) {
    for (arrow of arrows) {
        arrow.style.transform = 'translate(0, 100px)'
        arrow.style.opacity = 0
    }

    arrows[o].style.transform = 'translate(0, 0)'
    arrows[o].style.opacity = 1
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ items ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/////transform-up/////
itemSettings.style.transform = `translate(0, -${plus.offsetHeight}px)`

/////add items/////
function addItems() {
    printBill.classList.remove('disable')

    var cln = item.cloneNode(true)

    cln.style.display = 'block'
    cln.classList.add('item')
    cln.classList.add(`item${onfood + 1}`)

    itemSettings.prepend(cln);

    var pPrice = document.querySelector('.item-settings .item p');

    if      (onfood == 0) { pPrice.innerText = '7$' }
    else if (onfood == 1) { pPrice.innerText = '5$' }
    else if (onfood == 2) { pPrice.innerText = '6$' }
    else if (onfood == 3) { pPrice.innerText = '15$' }

    cln.setAttribute('data-price', pPrice.innerText)
}

/////remove items/////
function removeItems(a) {
    setTimeout(() => {
        a.offsetParent.offsetParent.offsetParent.style.animation = 'item-minus .5s'
    }, 200);
    setTimeout(() => {
        try {
            itemSettings.removeChild(a.offsetParent.offsetParent.offsetParent)

            var itm1 = document.querySelector('.item-settings .item');
            var offo

            if      (itm1.classList.contains('item1')) { offo = 0 }
            else if (itm1.classList.contains('item2')) { offo = 1 }
            else if (itm1.classList.contains('item3')) { offo = 2 }
            else if (itm1.classList.contains('item4')) { offo = 3 }

            manageArrows(offo)
        }
        catch (err) {
            if (err.message == 'itm1 is null') {
                for (arrow of arrows) {
                    arrow.style.opacity = 0
                }
            }
        }
    }, 700);
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ sizes ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function manageSizes() {
    var sizes = document.querySelectorAll('.item-settings .item .size');

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', function () {
            var col12 = this.offsetParent.offsetParent.offsetParent
            var pp = col12.children[0].children[3].children[0]
            var inp = col12.children[0].children[2].children[1].value

            switch (this.offsetHeight) {
                case 20: /////small/////
                case 28:
                    this.classList.add('active')
                    sizes[i + 1].classList.remove('active')
                    sizes[i + 2].classList.remove('active')

                    if (col12.classList.contains('item1')) { pp.innerText = '5$' }
                    else if (col12.classList.contains('item2')) { pp.innerText = '4$' }
                    else if (col12.classList.contains('item3')) { pp.innerText = '5$' }
                    else if (col12.classList.contains('item4')) { pp.innerText = '12$' }

                    break;
                case 36: /////medium/////
                case 58:
                    this.classList.add('active')
                    sizes[i - 1].classList.remove('active')
                    sizes[i + 1].classList.remove('active')

                    if (col12.classList.contains('item1')) { pp.innerText = '7$' }
                    else if (col12.classList.contains('item2')) { pp.innerText = '5$' }
                    else if (col12.classList.contains('item3')) { pp.innerText = '6$' }
                    else if (col12.classList.contains('item4')) { pp.innerText = '15$' }

                    break;
                case 60: /////large/////
                case 90:
                    this.classList.add('active')
                    sizes[i - 1].classList.remove('active')
                    sizes[i - 2].classList.remove('active')

                    if (col12.classList.contains('item1')) { pp.innerText = '9$' }
                    else if (col12.classList.contains('item2')) { pp.innerText = '6$' }
                    else if (col12.classList.contains('item3')) { pp.innerText = '7$' }
                    else if (col12.classList.contains('item4')) { pp.innerText = '18$' }

                    break;
            }

            col12.setAttribute('data-price', pp.innerText)
            pp.innerText = parseInt(pp.innerText) * inp + '$'

            totalprice()
        })
    }
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ spinners ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function doSpinners() {
    var spinnerMinus = document.querySelectorAll('.item-settings .item .spinner-minus'); /////spinnerMinus/////

    for (let i = 0; i < spinnerMinus.length; i++) {
        spinnerMinus[i].addEventListener('mousedown', function (e) {
            e.preventDefault()
        });
        spinnerMinus[i].addEventListener('contextmenu', function (e) {
            e.preventDefault()
        });

        spinnerMinus[i].addEventListener('click', function () {
            var inp = this.offsetParent.children[1].value

            inp = +inp - 1

            if (inp == -1) {
                this.offsetParent.children[1].value = 0
            } else {
                this.offsetParent.children[1].value = inp
            }

            if (this.offsetParent.children[1].value < 1) {
                removeItems(this)
            }

            var dataPrice = this.offsetParent.offsetParent.offsetParent.getAttribute('data-price')
            var pp = this.offsetParent.offsetParent.offsetParent.children[0].children[3].children[0]

            if (inp > -1) {
                pp.innerText = parseInt(pp.innerText) - parseInt(dataPrice) + '$'
            }

            totalprice()

            if (totalH3.innerText == 0) {
                printBill.classList.add('disable')
            } else{
                printBill.classList.remove('disable')
            }
        })
        i = spinnerMinus.length
    }

    var spinnerPlus = document.querySelectorAll('.item-settings .item .spinner-plus'); /////spinnerPlus/////

    for (let i = 0; i < spinnerPlus.length; i++) {
        spinnerPlus[i].addEventListener('mousedown', function (e) {
            e.preventDefault()
        });
        spinnerPlus[i].addEventListener('contextmenu', function (e) {
            e.preventDefault()
        });

        spinnerPlus[i].addEventListener('click', function () {
            var inp = this.offsetParent.children[1].value

            inp = +inp + 1

            if (`${inp}`.length > 3) {
                this.offsetParent.children[1].value = 999
                alert("Can't add more than 999 items in one place. Please add another line :)")
            } else {
                this.offsetParent.children[1].value = inp

                var dataPrice = this.offsetParent.offsetParent.offsetParent.getAttribute('data-price')
                var pp = this.offsetParent.offsetParent.offsetParent.children[0].children[3].children[0]

                pp.innerText = parseInt(pp.innerText) + parseInt(dataPrice) + '$'
            }

            totalprice()
        })
        i = spinnerPlus.length
    }
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ inputs ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function getInputs() {
    var inputs = document.querySelectorAll('.item-settings .item input');

    for (let i = 0; i < inputs.length; i++) {

        inputs[i].addEventListener('input', function () { /////input/////
            var numDots = this.value.replace(/[^0-9]/g, '')

            if (numDots[0] == 0) {
                numDots = numDots.slice(1)
            }

            if (numDots.length > 3) {
                this.value = numDots.slice(0, -1)
                alert("Can't add more than 999 items in one place. Please add another line :)")
                numDots = 999
            }

            this.value = numDots

            var dataPrice = this.offsetParent.offsetParent.offsetParent.getAttribute('data-price')
            var pp = this.offsetParent.offsetParent.offsetParent.children[0].children[3].children[0]

            pp.innerText = parseInt(dataPrice) * this.value + '$'

            /////totalprice part 1/////
            var items = document.querySelectorAll('.item-settings .item');

            totalH3.offsetParent.style.opacity = '1'
            totalH3.offsetParent.style.visibility = 'visible'

            var total = 0
            var price = 0

            for (let i = 0; i < items.length; i++) {
                price += parseInt(items[i].children[0].children[3].children[0].innerText)
                total += +items[i].children[0].children[2].children[1].value
            }

            totalH3.innerText = total
            priceH3.innerText = price

            if (total == 0) {
                printBill.classList.add('disable')
            } else{
                printBill.classList.remove('disable')
            }
        })

        inputs[i].addEventListener('change', function () { /////change/////
            if (this.value < 1) {
                removeItems(this)
            }

            /////totalprice part 2/////
            total = totalH3.innerText
            price = priceH3.innerText

            if (total == 0) {
                totalH3.offsetParent.style.opacity = '0'
                totalH3.offsetParent.style.visibility = 'hidden'
        
                for (arrow of arrows) {
                    arrow.style.opacity = 0
                }
            }
        })
    }
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ total price ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function totalprice() {
    var items = document.querySelectorAll('.item-settings .item');

    totalH3.offsetParent.style.opacity = '1'
    totalH3.offsetParent.style.visibility = 'visible'

    var total = 0
    var price = 0

    for (let i = 0; i < items.length; i++) {
        price += parseInt(items[i].children[0].children[3].children[0].innerText)
        total += +items[i].children[0].children[2].children[1].value
    }

    totalH3.innerText = total
    priceH3.innerText = price

    if (total == 0) {
        totalH3.offsetParent.style.opacity = '0'
        totalH3.offsetParent.style.visibility = 'hidden'

        for (arrow of arrows) {
            arrow.style.opacity = 0
        }
    }
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ all in one ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function doAllStuff(e) {
    manageArrows(onfood)
    addItems()
    manageSizes()
    doSpinners()
    getInputs()
    totalprice()
}

//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ print bill ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

printBill.addEventListener('click', function (e) {
    if (this.children[1].innerHTML == 'Done!') {
        setTimeout(() => { this.children[1].innerHTML = 'Good bye :)' }, 100);
        setTimeout(() => { this.children[1].innerHTML = 'Good bye :))' }, 500);
        setTimeout(() => { this.children[1].innerHTML = 'Good bye :)))' }, 900);
        setTimeout(() => { this.children[1].innerHTML = 'Good bye :)' }, 1300);
        setTimeout(() => { location.reload(); }, 1400);
    }
    else if (this.children[1].innerHTML == 'Print bill') {
        var items = document.querySelectorAll('.item-settings .item');
        var size = [' Small  ', ' Medium ', ' Large  ']
        var item1234 = { a0: 'Burger   ', a1: 'Hotdog   ', a2: 'Sandwich ', a3: 'Pizza    ' }

        bill = ''

        function spaceGenerator(a, b) {
            if (a.length == 1) { nmr = `    ${a} ` }
            else if (a.length == 2) { nmr = `   ${a} ` }
            else if (a.length == 3) { nmr = `  ${a} ` }
            else if (a.length == 4) { nmr = ` ${a} ` }
            else { nmr = ` ∞∞∞∞ ` }

            if (b.length == 1) { prc = `     ${b}$` }
            else if (b.length == 2) { prc = `    ${b}$` }
            else if (b.length == 3) { prc = `   ${b}$` }
            else if (b.length == 4) { prc = `  ${b}$` }
            else if (b.length == 5) { prc = ` ${b}$` }
            else { prc = ` ∞∞∞∞∞∞` }
        }

        for (let i = 0; i < 4; i++) { /////item1234/////
            splitLines = false

            for (let j = 0; j < 3; j++) { /////size/////
                nnn = 0
                ppp = 0

                nmr = 0
                prc = 0

                for (let k = 0; k < items.length; k++) {
                    var SML = [items[k].children[0].children[0].children[0], items[k].children[0].children[0].children[1], items[k].children[0].children[1].children[0]]

                    if (i == 0) { name = item1234.a0 }
                    else if (i == 1) { name = item1234.a1 }
                    else if (i == 2) { name = item1234.a2 }
                    else if (i == 3) { name = item1234.a3 }

                    if (items[k].classList.contains(`item${i + 1}`) && SML[j].classList.contains('active')) {
                        nnn += +items[k].children[0].children[2].children[1].value
                        ppp += parseInt(items[k].children[0].children[3].children[0].innerText)

                        spaceGenerator(`${nnn}`, `${ppp}`)
                    }
                }

                if (nmr != 0) {
                    bill += `${name}|${size[j]}|${nmr}|${prc}<br>`
                    splitLines = true
                }
            }

            if (splitLines == true) {
                bill += `—————————————————————————————————<br>`
            }
        }

        spaceGenerator(totalH3.innerText, priceH3.innerText)

        bill += `Total    |        |${nmr}|${prc}`

        yourBill.innerHTML = bill

        this.offsetParent.children[2].children[0].style.transform = `translateY(-${this.offsetParent.children[2].children[0].offsetHeight + 30}px)`

        printBillBefore.style.animation = 'before 1.2s 3 linear'
        printBillAfter.style.animation = 'after 1.2s 3 linear'

        this.children[1].innerHTML = 'Calculating'

        /////set timeouts/////
        setTimeout(() => {
            printBillBefore.style.top = '100%'
            printBillBefore.style.right = '100%'
            printBillAfter.style.top = '100%'
            printBillAfter.style.left = '100%'

            printBillBefore.style.animationPlayState = "paused";
            printBillAfter.style.animationPlayState = "paused";
        }, 3100);

        setTimeout(() => {
            this.offsetParent.children[2].children[0].style.opacity = '1'
            this.offsetParent.children[2].children[0].style.transform = 'translateY(0)'

            this.children[1].innerHTML = 'Printing'
        }, 3300);

        setTimeout(() => {
            this.children[1].innerHTML = 'Done!'
        }, 5500);

        /////disable background/////
        h1.classList.add('disable')
        menuList.classList.add('disable')
        menuListPlus.classList.add('disable')
        menuListArrows.classList.add('disable')
        itemSettings.children[items.length + 1].children[0].classList.add('disable')

        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('disable')
        }
    }
});

})
