import React from 'react';

const Book = book => {
  return (
    <div>
      <div className="row  mt-5">
        <div className="col-3">
          <img src={book.image} />
        </div>
        <div className="col-9 text-left">
          <h3>{book.title}</h3>
          {book.author && <p> by {book.author.name}</p>}
          <p>Rating: {book.rating}</p>
          <p>{book.description}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            book.randomize();
          }}
        >
          Random Book
        </button>
      </div>
    </div>
  );
};

export default Book;
