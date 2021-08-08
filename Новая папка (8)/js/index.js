let main = document.querySelector('main')
let first_screen = document.querySelector('.first_screen')
let insp_2 = document.querySelector('.inspiration-item_2')
let insp_3 = document.querySelector('.inspiration-item_3')
let insp_4 = document.querySelector('.inspiration-item_4')
let line_2 = document.querySelector('.line2')
let line_3 = document.querySelector('.line3')
let art = document.querySelector('#article')
let images_2 = document.querySelector('.images_2')
let links_a = document.querySelectorAll('.links_a')
let link_p = document.querySelectorAll('.link_p')
let link2_p = document.querySelector('.link2_p')
let img_5 = document.querySelector('#img_5')
let btn = document.querySelector('#btn_1')
let inp_1 = document.querySelector('.inp_1')
let inp_2 = document.querySelector('.inp_2')
let circle_1 = document.querySelector('.circle_1')
let circle_2 = document.querySelector('.circle_2')
let img_center = document.querySelector('.image_center')

btn.onclick = () =>{
    event.preventDefault()
    if(inp_1.value == '' ){
        circle_1.style.backgroundColor = 'red'
    }else{
        circle_1.style.backgroundColor = 'green'
    }
    if(inp_2.value == ''){
        circle_2.style.backgroundColor = 'red'
    }else{
        circle_2.style.backgroundColor = 'green'
    }
}



insp_2.onmouseenter = () =>{
    
    first_screen.classList.add("first_screen_2")   
    first_screen.classList.remove('first_screen') 
    insp_2.style.backgroundColor = "#D49697FF"  
    // insp_2.style.opacity = "0.7" 
}
insp_2.onmouseleave = () =>{
    first_screen.classList.remove("first_screen_2")   
    first_screen.classList.add('first_screen') 
    insp_2.style.backgroundColor = "transparent" 
}
insp_3.onmouseenter = () =>{
    
    first_screen.classList.add("first_screen_3")   
    first_screen.classList.remove('first_screen') 
    insp_3.style.backgroundColor = "#6895B9FF" 
    // insp_3.style.opacity = "0.7"  
}
insp_3.onmouseleave = () =>{
    first_screen.classList.remove("first_screen_3")   
    first_screen.classList.add('first_screen') 
    insp_3.style.backgroundColor = "transparent" 
}
insp_4.onmouseenter = () =>{
    
    first_screen.classList.add("first_screen_4")   
    first_screen.classList.remove('first_screen') 
    insp_4.style.backgroundColor = "#C77A50FF" 
    // insp_4.style.opacity = "0.7" 
}
insp_4.onmouseleave = () =>{
    first_screen.classList.remove("first_screen_4")   
    first_screen.classList.add('first_screen') 
    insp_4.style.backgroundColor = "transparent" 
}
function generateReport() {
    $('html, body').animate({
      scrollTop: $("#footer").offset().top
    }, 1000);
  };

art.onclick = () =>{
    event.preventDefault()
    images_2.style.display = "flex"
    art.style.display = "none"
}
for(let item of links_a){
    item.onclick = () =>{
        event.preventDefault()
        // link2_p.style.display = "block"
        // link2_p.style.marginTop = "-14"
        // item.style.display = "none"
        item.innerText = '  Проекты премиум-класса со смелыми архитектурными решениями и комфортной инфраструктурой.Мы создаём комфорт для жизни в центре событий и за городом.'
        item.style.color = "gray"
        
    } 
}

