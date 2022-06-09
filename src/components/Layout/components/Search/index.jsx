import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const searchTextDebounced = useDebounce(searchText, 500);

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
    if (!searchText.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setIsLoading(true);
      const result = await searchServices.search(searchTextDebounced, 'less');
      setSearchResult(result);
      setIsLoading(false);
    };

    fetchApi();
  }, [searchTextDebounced]);

  console.log({ searchText, searchResult });

  return (
    <HeadlessTippy
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.length > 0 && searchResult.map((result) => <AccountItem key={result.id} data={result} />)}
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
        {searchText && !isLoading && (
          <button className={cx('clear')} onClick={handleClearSearchText}>
            <ClearIcon />
          </button>
        )}
        {isLoading && (
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
