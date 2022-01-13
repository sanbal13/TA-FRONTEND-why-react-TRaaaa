let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.movies__list');

let allMovies = JSON.parse(localStorage.getItem('allMovies')) || [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
    event.target.value = '';
    createMovieUI(allMovies, rootElm);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  localStorage.setItem('allMovies', JSON.stringify(allMovies));
  createMovieUI(allMovies, rootElm);
}

/* function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '');
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  } 
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
} */

function createMovieUI(data, root) {
 
  let allLi = data.map((movie, i) => {
    let li = React.createElement(
      'li',
      {},
      React.createElement('label', { for: i }, movie.name),
      React.createElement('button', { id: i, onclick: handleChange }, 
                              movie.watched ? 'Watched' : 'To watch')
    );
  });
  ReactDOM.render(allLi, root);
}

createMovieUI(allMovies, rootElm);
