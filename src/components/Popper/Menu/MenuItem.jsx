import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data: { title, to, icon, separate }, onClick }) {
  const classes = cx('menu-item', {
    separate: separate,
  });
  return (
    <Button menuItem left to={to} leftIcon={icon} onClick={onClick} className={classes}>
      {title}
    </Button>
  );
}

export default MenuItem;
