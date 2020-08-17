import React from 'react';

import './MainPage.scss';

import LiveStudent from './LiveStudent/LiveStudent';
// import Sharktank from './Sharktank/Sharktank';
// import GraveStone from './GraveStone/GraveStone';
import Graveyard from './Graveyard/Graveyard';

class MainPage extends React.Component {
  render() {
    return (

    <div className="main-page">

      <div className="shark-attack-button">
        <img className="dead-shark" src="https://i.imgur.com/P1sGlcs.png" alt="shark icon" />
        <img className="alive-ship" src="https://i.gifer.com/JHQ.gif" alt="ship icon" />
      </div>

      <div className="students-container">
        <LiveStudent className="live-student" />
        <Graveyard className="graveyard" />
      <h2>hello</h2>
      </div>

    </div>
    );
  }
}

export default MainPage;
