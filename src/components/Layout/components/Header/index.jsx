import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { HEADER_MENU_ITEMS, HEADER_USER_MENU_ITEMS } from '~/assets/constants';
import { Menu as PopperMenu, Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentuser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok_logo" />
        </div>

        <HeadlessTippy
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
          visible={searchResult.length > 0}
          interactive
          appendTo={document.body}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <span className={cx('slash')}></span>

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

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
