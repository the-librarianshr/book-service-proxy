import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Hello world!</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-0'));