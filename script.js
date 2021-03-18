const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const passcheck = () =>{
if(pass.value.length>minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
    p.innerHTML="Your password is strong"
    p.style.color="lime"
}else if(pass.value.length>minValue && pass.value.match(letters) && pass.value.match(numbers) ){
    p.innerHTML="Your password is good"
    p.style.color="yellow"
}else{
    p.innerHTML="Your password is low"
    p.style.color="tomato"
}
}







pass.addEventListener('keyup',function(){
    if(pass.value !== ""){
passcheck()
    }else{
        p.textContent="Provide the password..."
        p.style.color="tomato"
    }
})






