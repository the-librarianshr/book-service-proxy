import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Components/Book-Service.jsx';
import BookCarousel from './Components/Related-Book-Service.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      related_books: [],
      path: 0,
    };
    this.randomizeBook = this.randomizeBook.bind(this);
  }

  getBooks() {
    $.ajax({ url: 'http://localhost:3030/books', method: 'GET' }).then(books => {
      console.log(books);
      this.setState({ books });
    });
  }

  getRelatedBooks() {
    $.ajax({ url: 'http://localhost:3004/books', method: 'GET' }).then(related_books => {
      console.log('related books:', related_books);
      this.setState({ related_books });
    });
  }

  randomizeBook() {
    this.setState({ path: Math.floor(Math.random() * 100) });
  }

  componentDidMount() {
    this.getBooks();
    this.getRelatedBooks();
    this.randomizeBook();
  }
  render() {
    const { books, path, related_books } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-7">
            <Book randomize={this.randomizeBook} {...books[path]} />
          </div>
          <div className="col-5">
            <BookCarousel
              randomize={this.randomizeBook}
              books={related_books.slice(path, path + 5)}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-0'));
