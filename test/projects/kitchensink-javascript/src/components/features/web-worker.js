import React from 'react';

export default class WebWorker extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    const worker = new Worker('http://localhost:3200/worker.bundle.js');
  }

  render() {
    return (
      <div>
        <h1>Test Worker in Work</h1>
      </div>
    );
  }
}
