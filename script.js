let active = 3;
let mainGirl= document.querySelectorAll('.main__girl');
let list = document.querySelectorAll('.menu__list');
let listLength = list.length;

let ul = document.querySelector('ul');


let nextArrow = document.querySelector('.next-arrow');
nextArrow.addEventListener('click', ()=>{
    
    let next =  (active + 1 ) % listLength;
    let position = next * 400;

    console.log(`${position}px;`)
    ul.style.left = `-${position}px`

    // console.log(`next is ${next} `)
    // list[active].classList.remove('active');
    // list[next].classList.add('active');
    
    active = next;

})





