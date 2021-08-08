import { categories, items } from './data.js'
let add_art = document.querySelector('#add_articles')
let items_2 = document.querySelector('.items2')

add_art.onclick = () =>{
    event.preventDefault()
    items_2.style.display = "grid"
    add_art.style.display = "none"
}
let alls = document.querySelector('#alls')
let intr = document.querySelector('#intr')
let arct = document.querySelector('#arct')
let builds = document.querySelector('#builds')
let repr = document.querySelector('#repr')
let items2 = document.querySelector('.items')
let items3 = document.querySelector('.items2')
let items_link = document.querySelector('.images')

alls.onclick = () =>{
    event.preventDefault()
    items_link.innerHTML = ''
    items2.style.display = "grid"
    items3.style.display = "none"
    alls.classList.remove('active2')
    intr.classList.remove('active')
    arct.classList.remove('active')
    builds.classList.remove('active')
    repr.classList.remove('active')
    add_art.style.display = "block"
    add_art.style.marginTop = "-200px"
}
intr.onclick = () =>{
    items_link.innerHTML = ''
    event.preventDefault()
    for(let item of items){
        if(item.categorie_id === 1){
            let img = document.createElement('img')
            img.src = item.img

            items_link.append(img)
        }
    }
    items2.style.display = "none"
    items3.style.display = "none"
    alls.classList.add('active2')
    intr.classList.add('active')
    arct.classList.remove('active')
    builds.classList.remove('active')
    repr.classList.remove('active')
    add_art.style.display = "none"
}
arct.onclick = () =>{
    items_link.innerHTML = ''
    event.preventDefault()
    for(let item of items){
        if(item.categorie_id === 2){
            let img = document.createElement('img')
            img.src = item.img

            items_link.append(img)
            
        }
    }
    items2.style.display = "none"
    items3.style.display = "none"
    intr.classList.remove('active')
    arct.classList.add('active')
    builds.classList.remove('active')
    repr.classList.remove('active')
    alls.classList.add('active2')
    add_art.style.display = "none"
}
builds.onclick = () =>{
    items_link.innerHTML = ''
    event.preventDefault()
    for(let item of items){
        if(item.categorie_id === 3){
            let img = document.createElement('img')
            img.src = item.img

            items_link.append(img)
            
        }
    }
    items2.style.display = "none"
    items3.style.display = "none"
    intr.classList.remove('active')
    arct.classList.remove('active')
    builds.classList.add('active')
    repr.classList.remove('active')
    alls.classList.add('active2')
    add_art.style.display = "none"
}
repr.onclick = () =>{
    items_link.innerHTML = ''
    event.preventDefault()
    for(let item of items){
        if(item.categorie_id === 4){
            let img = document.createElement('img')
            img.src = item.img

            items_link.append(img)
            
        }
    }
    items2.style.display = "none"
    items3.style.display = "none"
    intr.classList.remove('active')
    arct.classList.remove('active')
    builds.classList.remove('active')
    repr.classList.add('active')
    alls.classList.add('active2')
    add_art.style.display = "none"
}
function generateReport() {
    $('html, body').animate({
      scrollTop: $("#catgr_screen").offset().top
    }, 3000);
  };