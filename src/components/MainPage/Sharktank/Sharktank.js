import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';

import theShapeOfTheseWaters from '../../../helpers/props/theShapeOfTheseWaters.js/theShapeOfTheseWater';

import './Sharktank.scss';

class Sharktank extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(theShapeOfTheseWaters.studentShape),
  }

  render() {
    const { students } = this.props;
    const studentNames = students.map((student) => (<LiveStudent key={student.id} student={student}/>));

    return (
      <div className="shark-tank">
          {studentNames}
      </div>
    );
  }
}

export default Sharktank;
