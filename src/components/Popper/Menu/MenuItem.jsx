import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const { title, to, icon, separate } = data;

  const classes = cx('menu-item', {
    separate: separate,
  });

  return (
    <Button menuItem left to={to} leftIcon={icon} onClick={onClick} className={classes}>
      {title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
