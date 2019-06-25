import React from 'react';

export default class WebWorkerWithExternals extends React.Component {
  componentDidMount() {
    new Worker('web-worker-with-externals.js');
  }

  render() {
    return <h1>Test Worker With Externals</h1>;
  }
}
