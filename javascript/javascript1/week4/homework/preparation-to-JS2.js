const divTitle = document.getElementById('title');
divTitle.style.color = 'red'; 


    let fontSize = 18;
    let increment = 1;
function changeSize() {
    divTitle.style.fontSize = fontSize + 'px';
    fontSize += increment;

    if (fontSize > 24 || fontSize < 12){
        increment = -increment;
    }
}
 // setInterval(changeSize, 50);


const divNavigation = document.getElementById('nav');
divNavigation.addEventListener('mouseover', function(){
    divNavigation.style.color = 'green'});

divNavigation.addEventListener('mouseout', function(){
    divNavigation.style.color = ''});

const newNav = document.createElement('li');
newNav.innerText = 'Collections';
divNavigation.appendChild(newNav);

divLogo = document.getElementById('logo');

const heart = document.createElement('p');
heart.innerText = 'This Is Heart';
divLogo.appendChild(heart);

divLogo.addEventListener('click', function(){
    heart.style.display = heart.style.display === 'none' ? 'block' : 'none';
})

