
const redmorebtn= document.querySelector('.read-more-btn');
const  text= document.querySelector('.text');

redmorebtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(e.redmorebtn.innerHTML === "Read More"){
        e.redmorebtn.innerHTML === "Read Less";
    }else{
        e.redmorebtn.innerHTML === "Read More";
    }

});