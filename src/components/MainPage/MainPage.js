import React from 'react';

import './MainPage.scss';

import studentData from '../../helpers/data/studentData';

import Sharktank from './Sharktank/Sharktank';
import Graveyard from './Graveyard/Graveyard';

class MainPage extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (

    <div className="main-page">

      <div className="shark-attack-button">
        <img className="dead-shark" id="dead-shark" src="https://i.imgur.com/P1sGlcs.png" alt="shark icon" />
        <img className="alive-ship" id="alive-ship" src="https://i.gifer.com/JHQ.gif" alt="ship icon" />
      </div>

      <div className="students-container">
        <Sharktank className="main-sharktank" students={livingStudents} />
        <Graveyard className="main-graveyard" students={deadStudents} />
      </div>

    </div>
    );
  }
}

export default MainPage;
