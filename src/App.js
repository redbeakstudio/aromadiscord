'use strict';

const e = React.createElement;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
    <h1>Aroma Discord</h1>
    Olfactory tech community.
    </div>
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);
