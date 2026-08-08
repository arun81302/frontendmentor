const submitBtn=document.querySelector('.submit-btn')
const form=document.querySelector('#form')
const error=document.querySelector('.error')
const success=document.querySelector('.success')
const main=document.querySelector('.container')
const input=document.querySelector('.input-email')
const hide=document.querySelector('.hide')
const dismiss=document.querySelector('.dismiss')
const successEmail=document.querySelector('.success-email')
let value

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // const field=e.target('email')
    const formData=new FormData(e.target)
    const email=formData.get('email')
    value=email
    if(email.length<12 || !email.endsWith("@gmail.com")){
        error.classList.remove('hide')
       input.style.backgroundColor = "#f1bfbb";
       input.style.borderColor="red"
    }
    else{
        error.classList.add('hide')
        main.classList.add('hide')
        success.classList.remove('hide')
        error.classList.remove('hide')
          input.style.backgroundColor = "white";
       input.style.borderColor="none"
       successEmail.textContent=email

    }
    
})
// function resetForm(){

// }

dismiss.addEventListener('click',()=>{
    success.classList.add('hide')
    main.classList.remove('hide')
    form.reset()
    error.classList.add('hide')
       input.style.backgroundColor = "none";
       input.style.borderColor="white"

})

