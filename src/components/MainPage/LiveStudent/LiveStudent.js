import React from 'react';
import theShapeOfTheWaters from '../../../helpers/props/theShapeOfTheseWaters.js/theShapeOfTheseWater';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: theShapeOfTheWaters.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
        <h6 className="single-live"> {student.firstName} {student.lastName} &nbsp; &nbsp; </h6>
    );
  }
}

export default LiveStudent;
