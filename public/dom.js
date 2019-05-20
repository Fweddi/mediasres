const goodreadsButton = document.querySelector('.button__goodreads');
const bookshelf = document.querySelector('.bookshelf');

const goodreadsFetch = (userID) => {
    fetch(`/goodreads?=${userID}`)
    .then(res => res.json())
    .then(JSON => goodreadsProcessor(JSON))
    .catch(err => console.error(err));
}

const goodreadsProcessor = (JSON) => {
    const booksArray = JSON.split('<review>');
    booksArray.shift();

    let counter = 1;

    booksArray.forEach(bookInfo => {
        const title = bookInfo.split(/<\/*title_without_series>/)[1];
        const image_url = bookInfo.split(/<\/*image_url>/)[1];
        const authorDetails = bookInfo.split(/<\/*author>/)[1];
        const authorName = authorDetails.split(/<\/*name>/)[1];
        const rating = bookInfo.split(/<\/*rating>/)[1];
        const review = bookInfo.split(/<\/*body>/)[1];
        
        if (counter < booksArray.length) {
            populateBook(title, authorName, 'normal');
        } else {
            populateBook(title, authorName, 'leaning');
        }

        counter++;
    });
}

const populateBook = (title, authorName, bookType) => {
            const bookTotal = document.createElement('section');
            const bookShell = document.createElement('img');
            const bookSpine = document.createElement('div');
            const bookTitle = document.createElement('p');
            const bookTitleText = document.createTextNode(title);
            const bookAuthor = document.createElement('p');
            const bookAuthorText = document.createTextNode(authorName);
            
            bookTotal.appendChild(bookShell);
            bookTotal.appendChild(bookSpine);
            bookSpine.appendChild(bookTitle);
            bookTitle.appendChild(bookTitleText);
            bookSpine.appendChild(bookAuthor);
            bookAuthor.appendChild(bookAuthorText);
            bookshelf.appendChild(bookTotal);

            if (bookType === 'normal') {
                bookShell.classList.add('bookShell');
                bookSpine.classList.add('bookSpine');
                bookTitle.classList.add('bookTitle');
                bookAuthor.classList.add('bookAuthor');

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
            } else if (bookType === 'leaning') {
                bookShell.classList.add('bookShellLeaning');
                bookSpine.classList.add('bookSpineLeaning');
                bookTitle.classList.add('bookTitleLeaning');
                bookAuthor.classList.add('bookAuthorLeaning');

                if (title.length <= 10) {
                    bookSpine.classList.add('bookSmallLeaning');
                    bookShell.src='public/assets/bookSmallLeaning.svg';
                    bookTotal.classList.add('bookTotalSmallLeaning');
                } else if (title.length > 10 && title.length < 20) {
                    bookSpine.classList.add('bookMediumLeaning');
                    bookShell.src='public/assets/bookMediumLeaning.svg';
                    bookTotal.classList.add('bookTotalMediumLeaning');
                } else {
                    bookSpine.classList.add('bookLargeLeaning');
                    bookShell.src='public/assets/bookLargeLeaning.svg';
                    bookTotal.classList.add('bookTotalLargeLeaning');
                }
            } else {
                console.error('populateBook was called without specifying a type of book');
            }
}

//Anna
goodreadsButton.addEventListener('click', () => goodreadsFetch(27116564));

//Joko
// goodreadsButton.addEventListener('click', () => goodreadsFetch(3297766));