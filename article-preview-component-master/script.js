const shareBtn=document.querySelector('.share-cont')
const wrap=document.querySelector('.wrap')
const mobile_wrap=document.querySelector('.mobile-share')
const user=document.querySelector('.user')
const mobileBtn=document.querySelector('.mobile-share-icon-btn')
// console.log(shareBtn)

shareBtn.addEventListener('click',()=>{
    if(window.innerWidth<=767){
        mobile_wrap.classList.toggle('mobile-hide')
        user.classList.toggle('mobile-hide')

    }else{
        wrap.classList.toggle('hide')
    }

})
mobileBtn.addEventListener("click", () => {
    mobile_wrap.classList.toggle('mobile-hide')
        user.classList.toggle('mobile-hide')
})