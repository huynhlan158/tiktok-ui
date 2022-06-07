import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data: { title, to, icon }, onClick }) {
  return (
    <Button menuItem left to={to} leftIcon={icon} onClick={onClick} style={{ marginLeft: 0 }}>
      {title}
    </Button>
  );
}

export default MenuItem;
