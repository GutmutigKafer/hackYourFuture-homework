function changeLogo() {
    let logo = document.getElementById('logo');
    logo.src = "https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0";
    logo.style.width = '500px';
  
    let newTitle = document.createElement('h1');
    newTitle.innerHTML = 'My new title'; // <h1>My new title</h1>
  
    let title = document.getElementById('title');
    document.body.removeChild(title);
    document.body.appendChild(newTitle);
  }

  let button = document.getElementById('button');
  button.addEventListener('mouseover', changeLogo);
  