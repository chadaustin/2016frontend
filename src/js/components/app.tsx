import * as React from 'react';
import {connect} from 'react-redux';

import Saying from 'saying';

interface SayingsProps {
  sayings: Saying[];
}

class Sayings extends React.Component<SayingsProps, {}> {
  render() {
    return <div className="sayings-list">
      {this.props.sayings.map(saying =>
        <div className="saying">
          <blockquote>
            {saying.quote}
            <footer>- <cite>{saying.author}</cite></footer>
          </blockquote>
        </div>
      )}
    </div>;
  }
}

let AppHeader = () => {
  return <header>
    <h1>Sayings Database</h1>
    <div className="byline">2016 Frontend Project Template</div>
  </header>;
};

interface AddSayingButtonProps {
  addSaying: (quote: string, author: string) => void;
}

interface AddSayingButtonState {
  popped: boolean;
}

class AddSayingButton extends React.Component<AddSayingButtonProps, AddSayingButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      popped: false,
    };
  }

  render() {
    if (this.state.popped) {
      return <div className="add-modal">
        <label className="quote">Quote <input ref="quote" type="text" /></label>
        <label className="author">Author <input ref="author" type="text" /></label>
        <div className="button-group">
          <button className="cancel-button" onClick={this.onCancel.bind(this)}>Cancel</button>
          <button className="submit-button" onClick={this.onSubmit.bind(this)}>Submit</button>
        </div>
      </div>;
    } else {
      return (
        <button
          className="add-saying-button"
          onClick={this.onClick.bind(this)}
        >Add Saying</button>
      );
    }
  }

  onClick() {
    this.setState({popped: true});
  }

  onCancel() {
    this.setState({popped: false});
  }

  onSubmit() {
    const quote = (this.refs['quote'] as HTMLInputElement).value;
    const author = (this.refs['author'] as HTMLInputElement).value;
    this.props.addSaying(quote, author);
    this.setState({popped: false});
  }
}

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
      <Sayings sayings={this.props.sayings} />
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
