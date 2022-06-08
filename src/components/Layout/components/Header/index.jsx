import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faPlus,
  faCloudArrowUp,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import HeadlessTippy from '@tippyjs/react/headless';

import { Menu as PopperMenu, Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { HEADER_MENU_ITEMS, HEADER_USER_MENU_ITEMS } from '~/assets/constants';

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
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentuser ? (
            <>
              <Tippy content="Upload Video" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
              <Tippy content="Message" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCommentDots} />
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
              <img
                className={cx('user-avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/59086ef86cf4aa1f8a08af97756a65f2~c5_300x300.webp?x-expires=1654657200&x-signature=JgL6fFDYx6eyz54w6tp2w214dLk%3D"
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
