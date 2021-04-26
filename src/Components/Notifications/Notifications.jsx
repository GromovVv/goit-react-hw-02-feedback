  
import PropTypes from 'prop-types';
import './Notifications.scss'

const Notifications = ({ message }) => (
  <p className="notifications">{message}</p>
);

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string,
};