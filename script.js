let active = 0;
let mainGirl= document.querySelectorAll('.main__girl');
let list = document.querySelectorAll('.menu__list');
let mainGirlImages = document.querySelectorAll('.main__girl__images img');
let listLength = mainGirlImages.length;
let ul = document.querySelector('ul');

const menuListImages = document.querySelectorAll('.menu__list img');


// map forEach filter reduce(с аккумулятором)
// слева массив
// справа функция
//  massiv.forEach( (e,i,m)=>{ e.addEventListener("click", ()=>{console.log("click")})}  )

const changeActive = (to)=>{

    mainGirlImages[active].style.opacity = '0';
    mainGirlImages[to].style.opacity = '1';
    menuListImages[active].classList.remove('active');
    menuListImages[to].classList.add('active');

    active = to;

}



menuListImages.forEach((e, i) =>{
    e.addEventListener('click', (event)=> {
        
    changeActive(i);
    
    })
})
let nextArrow = document.querySelector('.next-arrow');
nextArrow.addEventListener('click', ()=>{
    
    let next =  (active + 1 ) % listLength;

    changeActive(next);

})



const prevArrow = document.querySelector('.prev-arrow');
prevArrow.addEventListener('click', () =>{
    const  prev = (active - 1 + listLength) %  listLength;
    changeActive(prev);

} )




