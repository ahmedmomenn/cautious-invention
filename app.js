//defining the global variables 

const sections =document.querySelectorAll('section');
const UL = document.querySelector('#navbar__list');
const fragForUL =document.createDocumentFragment();
const navvv = document.querySelector('.navbar__menu');

//creating a link for each section with the same id and data-nave value for that specific section then adding
// an event listener for each link with event type 'click' to scroll to the section that has the same data-nav as the 
// targeted link 

for(section of sections){
    const Li = document.createElement('li');
    const sectionId =section.getAttribute('id');
    const sectionDataNave =section.getAttribute('data-nav');
    Li.innerHTML=`<a class='menu__link' href='${sectionId}' data-nav='${sectionId}'>${sectionDataNave}</a> `;
    UL.appendChild(Li);
    Li.addEventListener('click',function scroll(ev){
        ev.preventDefault();
        if(ev.target.dataset.nav){
         document.getElementById(`${ev.target.dataset.nav}`).scrollIntoView({behavior:"smooth"})
        }
        });
}
fragForUL.appendChild(UL);
navvv.appendChild(fragForUL);

//adding a function to attach a class 'your-active-class' 
// if the the selected section is lookated within the given limts 

window.onscroll= function(){
    document.querySelectorAll('section').forEach(function(activeSec){
        if(activeSec.getBoundingClientRect().top >= -400 && activeSec.getBoundingClientRect().top < 150){
         activeSec.classList.add('your-active-class')
        }
        else{
          activeSec.classList.remove('your-active-class')
            }
    })
}





