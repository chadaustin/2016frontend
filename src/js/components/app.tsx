import * as React from 'react';
import {connect} from 'react-redux';

import Saying from 'saying';
import AppHeader from 'components/app_header';
import SayingsList from 'components/sayings_list';
import AddSayingButton from 'components/add_saying';

interface AppProps {
  sayings: Saying[];
  addSaying: () => void;
}

class App extends React.Component<AppProps, {}> {
  render() {
    let sayings = this.props.sayings.map(saying =>
      <div>{saying}</div>
    );
    return <div className="app-root">
      <AppHeader />
      <AddSayingButton addSaying={this.props.addSaying} />
      <SayingsList sayings={this.props.sayings} />
    </div>;
  }
}

export default connect(state => {
  return { sayings: state };
}, dispatch => {
  return {
    addSaying(quote: string, author: string) {
      dispatch({
        type: 'ADD_SAYING',
        quote,
        author,
      });
    }
  };
})(App as any);
