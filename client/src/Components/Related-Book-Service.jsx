import React from 'react';
import { Carousel } from 'react-bootstrap';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render() {
    const { index, direction } = this.state;
    const { books } = this.props;

    return (
      <Carousel
        style={{ width: '185px', height: '230px' }}
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {books.map(book => (
          <Carousel.Item key={book.id}>
            <img className="d-block w-100" src={book.image} alt={book.title} />
            <Carousel.Caption>
              <p>{book.title}</p>
              <p>{book.author.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default BookCarousel;
