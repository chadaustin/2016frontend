import * as React from 'react';

import Saying from 'saying';

interface SayingsListProps {
  sayings: Saying[];
}

export default class SayingsList extends React.Component<SayingsListProps, {}> {
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
