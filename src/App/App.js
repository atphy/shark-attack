import React from 'react';
import './App.scss';
import IntroPage from '../components/introPage/introPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IntroPage />
      </div>
    );
  }
}

export default App;
