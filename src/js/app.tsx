declare function require(m: string): any;

import * as React from 'react';
import {connect} from 'react-redux';

interface AppProps {
  sayings: string[];
  addSaying: () => void;
}

class App extends React.Component<AppProps, {}> {
  render() {
    let sayings = this.props.sayings.map(saying =>
      <div>{saying}</div>
    );
    debugger;
    return <div className="app-root">
      The application root component!
      {sayings}
      <button className="add-button" onClick={this.props.addSaying}>Add Saying</button>
    </div>;
  }

  addSaying() {

  }
}

export default connect(state => {
  return { sayings: state };
}, dispatch => {
  debugger;
  return {
    addSaying() {
      debugger;
      dispatch({type: 'ADD_SAYING', saying: 'a new saying at ' + Date.now()});
    }
  };
})(App as any);
