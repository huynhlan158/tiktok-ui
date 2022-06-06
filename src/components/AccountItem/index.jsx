import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/59086ef86cf4aa1f8a08af97756a65f2~c5_300x300.webp?x-expires=1654657200&x-signature=JgL6fFDYx6eyz54w6tp2w214dLk%3D"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('username')}>
          <span>nguyenvana</span>
          <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />
        </p>
        <span className={cx('name')}>Nguyen Van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
