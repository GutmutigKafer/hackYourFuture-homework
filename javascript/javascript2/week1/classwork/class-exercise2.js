const favouriteDishes = ['Pizza', 'Spaghetti', 'Burger', 'Pasta', 'Lasagna'];
const list = document.createElement('ul');
document.body.appendChild(list);

for (let i = 0; i < favouriteDishes.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = favouriteDishes[i];
    list.appendChild(listItem);
}



const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}];

const list2 = document.createElement('ul');

for (let i = 0; i < podcasts.length; i++) {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    h1.innerHTML = podcasts[i].name;
    li.appendChild(h1);
    if (podcasts[i].imageUrl) {
    const img = document.createElement('img');
    img.src = podcasts[i].imageUrl;
    li.appendChild(img);
    }
    list2.appendChild(li);

}

// document.body.appendChild(list2);
document.body.insertBefore(list2, list);

function imageInserter(imageURL, elementToAppendImageTo) {
const img = document.createElement('img');
img.src = imageURL;
elementToAppendImageTo.appendChild(img);
}



const pictureButton = document.createElement('button');
pictureButton.innerHTML = 'Click me';
pictureButton.classList.add('button');
document.body.appendChild(pictureButton);
pictureButton.addEventListener('click', () => {
    pictureButton.innerHTML = 'Button clicked!';
    imageInserter('https://picsum.photos/536/355', document.querySelector('body'));
})


const darkModeButton = document.createElement('button');
darkModeButton.innerHTML = 'Dark mode';
darkModeButton.classList.add('button');
document.body.appendChild(darkModeButton);
let isDarkMode = false;
darkModeButton.addEventListener('click', () => {
   
    if (isDarkMode) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        darkModeButton.style.backgroundColor = 'black';
        darkModeButton.style.color = 'white';
        pictureButton.style.backgroundColor = 'black';
        pictureButton.style.color = 'white';
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        darkModeButton.style.backgroundColor = 'white';
        darkModeButton.style.color = 'black';
        pictureButton.style.backgroundColor = 'white';
        pictureButton.style.color = 'black';
        isDarkMode = true;
    }

})
    

