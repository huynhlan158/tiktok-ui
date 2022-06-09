import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import { HEADER_MENU_ITEMS, HEADER_USER_MENU_ITEMS } from '~/assets/constants';
import { Menu as PopperMenu } from '~/components/Popper';
import Search from '../Search';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config/';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const currentuser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="tiktok_logo" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentuser ? (
            <>
              <Tippy content="Upload Video" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outlined leftIcon={<FontAwesomeIcon icon={faPlus} />} style={{ padding: '6px 16px' }}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <PopperMenu items={currentuser ? HEADER_USER_MENU_ITEMS : HEADER_MENU_ITEMS} onChange={handleMenuChange}>
            {currentuser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1654844400&x-signature=wi%2B9jM72HU41FcNw0%2FSQ%2Fv0K7BM%3D"
                alt="user_avatar"
              />
            ) : (
              <button className={cx('help-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
