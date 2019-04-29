const goodreadsButton = document.querySelector('.button__goodreads');

const goodreadsFetch = (userID) => {
    fetch(`/goodreads?=${userID}`)
    .then(res => res.json())
    .then(JSON => goodreadsProcessor(JSON))
    .catch(err => console.log(err));
}

const goodreadsProcessor = (JSON) => {
    const booksArray = JSON.split('<review>');
    booksArray.shift();
    booksArray.forEach(book => {
        const title = book.split(/<\/*title_without_series>/)[1];
        const image_url = book.split(/<\/*image_url>/)[1];
        const authorDetails = book.split(/<\/*author>/)[1];
        const authorName = authorDetails.split(/<\/*name>/)[1];
        const rating = book.split(/<\/*rating>/)[1];
        const review = book.split(/<\/*body>/)[1];
        console.log(title, image_url, authorName, rating, review);
    });
}

goodreadsButton.addEventListener('click', () => goodreadsFetch(61879175));