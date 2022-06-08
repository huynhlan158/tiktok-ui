import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/32ae12e15fd097c12ab4e0a6e5debfdb~c5_100x100.jpeg?x-expires=1654830000&x-signature=h%2BnwulTe79MPNwNszDgtkaw7dm0%3D"
        alt="avatar"
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
