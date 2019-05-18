const goodreadsButton = document.querySelector('.button__goodreads');
const bookshelf = document.querySelector('.bookshelf');

const goodreadsFetch = (userID) => {
    fetch(`/goodreads?=${userID}`)
    .then(res => res.json())
    .then(JSON => goodreadsProcessor(JSON))
    .catch(err => console.log(err));
}

const goodreadsProcessor = (JSON) => {
    const booksArray = JSON.split('<review>');
    booksArray.shift();
    booksArray.forEach(bookInfo => {
        const title = bookInfo.split(/<\/*title_without_series>/)[1];
        const image_url = bookInfo.split(/<\/*image_url>/)[1];
        const authorDetails = bookInfo.split(/<\/*author>/)[1];
        const authorName = authorDetails.split(/<\/*name>/)[1];
        const rating = bookInfo.split(/<\/*rating>/)[1];
        const review = bookInfo.split(/<\/*body>/)[1];
        console.log(title, image_url, authorName, rating, review);


        const bookTotal = document.createElement('section');
        

        const bookShell = document.createElement('img');
        bookShell.classList.add('bookShell');


        const bookSpine = document.createElement('div');
        bookSpine.classList.add('bookSpine');
        

        const bookTitle = document.createElement('p');
        const bookTitleText = document.createTextNode(title);
        bookTitle.appendChild(bookTitleText);
        bookTitle.classList.add('bookTitle');

        const bookAuthor = document.createElement('p');
        const bookAuthorText = document.createTextNode(authorName);
        bookAuthor.appendChild(bookAuthorText);
        bookAuthor.classList.add('bookAuthor');



        bookTotal.appendChild(bookShell);
        bookTotal.appendChild(bookSpine);

        bookSpine.appendChild(bookTitle);
        bookSpine.appendChild(bookAuthor);
        bookshelf.appendChild(bookTotal);
        
        if (title.length <= 10) {
            bookSpine.classList.add('bookSmall');
            bookShell.src='public/assets/bookSmall.svg';
            bookTotal.classList.add('bookTotalSmall');
        } else if (title.length > 10 && title.length < 20) {
            bookSpine.classList.add('bookMedium');
            bookShell.src='public/assets/bookMedium.svg';
            bookTotal.classList.add('bookTotalMedium');
        } else {
            bookSpine.classList.add('bookLarge');
            bookShell.src='public/assets/bookLarge.svg';
            bookTotal.classList.add('bookTotalLarge');
        }
        
        
    });
}





goodreadsButton.addEventListener('click', () => goodreadsFetch(3297766));