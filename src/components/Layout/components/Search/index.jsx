import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const inputSearchRef = useRef('');

  const handleClearSearchText = () => {
    setSearchText('');
    setSearchResult([]);
    inputSearchRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
    }, 0);
  }, []);

  return (
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
      visible={showResult && searchResult.length > 0}
      interactive
      appendTo={document.body}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          type="text"
          placeholder="Search accounts and videos"
          spellCheck={false}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={inputSearchRef}
          onFocus={() => setShowResult(true)}
        />
        {searchText && !isloading && (
          <button className={cx('clear')} onClick={handleClearSearchText}>
            <ClearIcon />
          </button>
        )}
        {isloading && (
          <button className={cx('loading')}>
            <LoadingIcon />
          </button>
        )}
        <span className={cx('slash')}></span>

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
