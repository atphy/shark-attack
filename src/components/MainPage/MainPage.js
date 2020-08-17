import React from 'react';

import './MainPage.scss';

import studentData from '../../helpers/data/studentData';

import Sharktank from './Sharktank/Sharktank';
import Graveyard from './Graveyard/Graveyard';

class MainPage extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    const { livingStudents } = this.state;

    return (

    <div className="main-page">

      <div className="shark-attack-button">
        <img className="dead-shark" src="https://i.imgur.com/P1sGlcs.png" alt="shark icon" />
        <img className="alive-ship" src="https://i.gifer.com/JHQ.gif" alt="ship icon" />
      </div>

      <div className="students-container">
        <Sharktank students={livingStudents} />
        <Graveyard className="graveyard" />
      </div>

    </div>
    );
  }
}

export default MainPage;
