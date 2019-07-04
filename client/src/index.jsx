import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book-Service.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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
  randomizeBook() {
    this.setState({ path: Math.floor(Math.random() * 100) });
  }

  componentDidMount() {
    this.getBooks();
    this.randomizeBook();
  }
  render() {
    const { books, path } = this.state;
    return (
      <div>
        <Book randomize={this.randomizeBook} {...books[path]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-0'));
