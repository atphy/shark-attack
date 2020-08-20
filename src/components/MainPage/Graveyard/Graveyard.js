import React from 'react';
import PropTypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';

import theShapeOfTheseWaters from '../../../helpers/props/theShapeOfTheseWaters.js/theShapeOfTheseWater';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(theShapeOfTheseWaters.studentShape),
  }

  render() {
    const { students } = this.props;
    const studentNames = students.map((student) => (<GraveStone key={student.id} student={student}/>));

    return (
      <div className="graveyard">
          {studentNames}
      </div>
    );
  }
}

export default Graveyard;
