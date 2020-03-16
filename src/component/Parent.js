import React from 'react';
import Child from './Child';
import axios from 'axios';

class Parent extends React.Component {
  state = {
    data: null,
    ErrorText: null
  };
  getDetail = () => {
    debugger;
    axios
      .get('https://jsonplaceholder.typicode1.com/post')
      .then(response => {
        this.setState({ ErrorText: null, data: response.data });
      })
      .catch(err => {
        debugger;
        this.setState({
          ErrorText: 'Service Failed!'
        });
      });
  };

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={() => this.getDetail()}>Get Details</button>
        <Child ErrorText={this.state.ErrorText} data={this.state.data} />
      </div>
    );
  }
}

export default Parent;
