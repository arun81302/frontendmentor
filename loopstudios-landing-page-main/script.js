let ham_icon=document.querySelector('.ham-icon')
console.log(ham_icon)
let mobile_menu=document.querySelector('#mobile-menu')
console.log(mobile_menu)
let cross_icon=document.querySelector('#close-btn')
console.log(cross_icon)

ham_icon.addEventListener('click',()=>{
    mobile_menu.classList.toggle('hidden')
    
})
cross_icon.addEventListener('click',()=>{
    mobile_menu.classList.toggle('hidden')
})