const shareBtn=document.querySelector('.share-cont')
const wrap=document.querySelector('.wrap')
console.log(shareBtn)

shareBtn.addEventListener('click',()=>{
wrap.classList.toggle('hide')
})