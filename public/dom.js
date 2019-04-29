const goodreadsButton = document.querySelector('.button__goodreads');

const goodreadsFetch = (userID) => {
    fetch(`/goodreads?=${userID}`)
    .then(res => res.json())
    .then(JSON => console.log(JSON))
    .catch(err => console.log(err));
}

goodreadsButton.addEventListener('click', goodreadsFetch(61879175));

