let searchTextIcon = document.getElementById('search-text-icon');
let searchCatIcon = document.getElementById('search-cat-icon');
searchTextIcon.addEventListener('click', toggleSearchText);
searchCatIcon.addEventListener('click', toggleSearchCat);

document.getElementById('tag-teszta').addEventListener('click', toggleTag);
document.getElementById('tag-finom').addEventListener('click', toggleTag);
document.getElementById('tag-harmadik').addEventListener('click', toggleTag);
document.getElementById('tag-cimke04').addEventListener('click', toggleTag);
document.getElementById('tag-cimke05').addEventListener('click', toggleTag);
document.getElementById('tag-cimke06').addEventListener('click', toggleTag);
document.getElementById('tag-mind').addEventListener('click', toggleTag);
document.getElementById('tag-egyiksem').addEventListener('click', toggleTag);


function toggleSearchText() {
    let elSearchTextField = document.getElementById('search-text-field');
    let elSearchCatList = document.getElementById('search-cat-list');
    elSearchCatList.classList.add('search-hidden');
    elSearchTextField.classList.toggle('search-hidden');
}

function toggleSearchCat() {
    let elSearchTextField = document.getElementById('search-text-field');
    let elSearchCatList = document.getElementById('search-cat-list');
    elSearchTextField.classList.add('search-hidden');
    elSearchCatList.classList.toggle('search-hidden');
}

function toggleTag(e) {
    let elClicked = e.target;
    // console.log(elClicked.id);

    if (elClicked.id === 'tag-egyiksem') {
        let arrMind = document.querySelectorAll('.tag-link');
        arrMind.forEach((item) => {
            item.classList.remove('tag-selected');
        })
        elClicked.classList.add('tag-selected');

        let arrFood = document.querySelectorAll('.food-link');
        arrFood.forEach((item) => {
            item.classList.remove('food-visible');
        })
        return;
    }

    if (elClicked.id === 'tag-mind') {
        let arrMind = document.querySelectorAll('.tag-link');
        arrMind.forEach((item) => {
            item.classList.add('tag-selected');
        })
        document.getElementById('tag-egyiksem').classList.remove('tag-selected');

        let arrFood = document.querySelectorAll('.food-link');
        arrFood.forEach((item) => {
            item.classList.add('food-visible');
        })
        return;
    }

    if (elClicked.id === 'tag-teszta') {
        let arrTeszta = document.querySelectorAll('.teszta');
        arrTeszta.forEach((item) => {
            if (elClicked.classList.contains('tag-selected')) {
                item.classList.remove('food-visible');
            } else {
                item.classList.add('food-visible');
            }
        })
    }

    if (elClicked.id === 'tag-finom') {
        let arrFinom = document.querySelectorAll('.finom');
        arrFinom.forEach((item) => {
            if (elClicked.classList.contains('tag-selected')) {
                item.classList.remove('food-visible');
            } else {
                item.classList.add('food-visible');
            }  
        })
    }

    document.getElementById('tag-egyiksem').classList.remove('tag-selected');
    document.getElementById('tag-mind').classList.remove('tag-selected');
    elClicked.classList.toggle('tag-selected');
}