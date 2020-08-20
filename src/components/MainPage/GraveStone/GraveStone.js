import React from 'react';
import theShapeOfTheWaters from '../../../helpers/props/theShapeOfTheseWaters.js/theShapeOfTheseWater';

class GraveStone extends React.Component {
  static propTypes = {
    student: theShapeOfTheWaters.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
        <h6 className="single-dead"> {student.firstName} {student.lastName} &nbsp; &nbsp; &nbsp; &nbsp; </h6>
    );
  }
}

export default GraveStone;
