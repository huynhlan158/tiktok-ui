import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Menu as PopperMenu, Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { HEADER_MENU_ITEMS } from '~/assets/constants';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok_logo" />
        </div>

        <Tippy
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
        </Tippy>

        <div className={cx('actions')}>
          <Button outlined leftIcon={<FontAwesomeIcon icon={faPlus} />} style={{ padding: '6px 16px' }}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          <PopperMenu items={HEADER_MENU_ITEMS}>
            <button className={cx('help-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
