let after_share=document.querySelector('.bottom-share')
let main=document.querySelector('.bottom-avatar-section')
let main_icon=document.querySelector('.icon-image')
let after_icon=document.querySelector('.icon')
console.log(after_share)
console.log(main)
console.log(main_icon)
console.log(after_icon)
main_icon.addEventListener('click',()=>{
    after_share.style.display='flex'
    main.style.display='none'
})
after_icon.addEventListener('click',()=>{
        after_share.style.display='none'
    main.style.display='flex'
})