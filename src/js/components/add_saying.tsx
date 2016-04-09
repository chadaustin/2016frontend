import * as React from 'react';

interface AddSayingButtonProps {
  addSaying: (quote: string, author: string) => void;
}

interface AddSayingButtonState {
  popped: boolean;
}

export default class AddSayingButton extends React.Component<AddSayingButtonProps, AddSayingButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      popped: false,
    };
  }

  render() {
    if (this.state.popped) {
      return <div className="add-modal">
        <textarea className="quote" ref="quote" placeholder="Quote..." rows="5" />
        <label className="author">- <input ref="author" placeholder="Author" type="text" /></label>
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
