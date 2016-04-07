declare function require(m: string): any;

import * as React from 'react';

export default class App extends React.Component<{}, {}> {
  render() {
    return <div>The application root component! <button onClick={this.addSaying.bind(this)}>Add Saying</button></div>;
  }

  addSaying() {
    
  }
}
