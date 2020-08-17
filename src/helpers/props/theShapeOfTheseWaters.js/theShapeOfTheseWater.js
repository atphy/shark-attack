import PropTypes from 'prop-types';

const studentShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.toString.isRequired,
  lastName: PropTypes.toString.isRequired,
  isDead: PropTypes.bool.isRequired,
});

export default { studentShape };
