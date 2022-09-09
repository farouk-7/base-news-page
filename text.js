const send=document.querySelector('.button')
const email=document.querySelector('#email')




send.addEventListener('click',()=>{
    if(email.value.includes("@" && ".")){
        document.querySelector('#email').style.border="1px solid green"
        document.querySelector('.checked').style.display='block'   
    }
    else{
        document.querySelector('.icon').style.display="block"
        document.querySelector('#email').style.border="1px solid red"
        document.querySelector('.email-error').innerHTML="Please provide a valid Email Address"
        return false
    }
})
