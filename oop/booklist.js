class Booklist {
	constructor(nextBookToRead, currentBookToRead, lastBookToRead) {
		this.arrBooks = []
		this.numberOfBooksRead = 0
		this.numberOfBooksUnread = 0
		this.nextBookToRead = nextBookToRead
		this.currentBookToRead = currentBookToRead
		this.lastBookToRead = lastBookToRead
	}

	numberAccum() {
		let res1 = 0;
		let res2 = 0;

		this.arrBooks.filter((book) => (book.read === true) ? res1++ : res2++)
		this.numberOfBooksRead = res1;
		this.numberOfBooksUnread = res2;
		this.updateBooks()
	}

	add(book) {
		this.arrBooks.push(book)
		this.currentBookToRead = book
		this.nextBookToRead = this.updateBooks()
		this.numberAccum()
	}

	updateBooks() {
		if (this.arrBooks.length > 1) {
			let arr = this.arrBooks
			for (let [index, value] of Object.entries(arr)) {
				if (arr[index].read === false && this.currentBookToRead !== arr[index]) {
					return arr[index]
				}
			}
		}
	}

	finishCurrentBook() {
		this.currentBookToRead.read = true
		this.lastBookToRead = this.currentBookToRead
		this.currentBookToRead = this.updateBooks()
		this.nextBookToRead = this.updateBooks()
		this.numberAccum()
	}
}

class Book {
	constructor(title, genre, author, read, readDate) {
		this.title = title
		this.genre = genre
		this.author = author
		this.read = read
		this.readDate = readDate
	}
}

const booklist = new Booklist();
const book1 = new Book('Sherlok Holmes', 'The Advantures', 'Artur C. Doyle', false, new Date(Date.now()))

booklist.add(book1);

const book2 = new Book('Management in the style of Man United','Business','Sir Alex Ferguson')

booklist.add(book2);

booklist.currentBookToRead = book1;
booklist.finishCurrentBook();
booklist.finishCurrentBook();

console.log(booklist);