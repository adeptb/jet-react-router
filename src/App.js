import React from 'react';
import Link from './Link';
import routes from './config';
import Router from './Router';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Link path='/'>News</Link>
        <Link path='/contacts'>Contacts</Link>
        <Router config={routes}/>
      </div>
    );
  }
}

export default App;
