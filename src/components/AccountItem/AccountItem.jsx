import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const { avatar, nickname, full_name, tick } = data;

  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={avatar} alt={nickname} />
      <div className={cx('info')}>
        <p className={cx('username')}>
          <span>{nickname}</span>
          {tick && <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />}
        </p>
        <span className={cx('name')}>{full_name}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
