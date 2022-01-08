const input = document.querySelector(`input[type="text"]`);
const rootElm = document.querySelector(`.movies_list`);


let allMovies = [
    {
        name: 'Forest Grump',
        watched: false,
    },
    {
        name: 'Inception',
        watched: true,
    },
];

input.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        console.log(allMovies);
        event.target.value ='';
        createMovieUI();
    }
});

function deleteMovie(event) {
    // event.target.parentElement.remove();
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

function createMovieUI () {
    rootElm.innerHTML = "";
    allMovies.forEach((movie) => {
        const li = document.createElement('li');
        const movieName = document.createElement('div');
        const button = document.createElement('button');
        const label = movie.watched ? 'Watched': 'To Watch';
        button.innerText = label;
        button.addEventListener('click', (event) => {
            movie.watched = !movie.watched;
            createMovieUI();
        });
        movieName.innerText = movie.name; 
        li.append(movieName, button);
        rootElm.append(li);
    });
}