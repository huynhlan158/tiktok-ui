import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

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

  const handleSearchTextChange = (e) => {
    const searchValue = e.target.value;

    if (searchValue.startsWith(' ')) return;

    setSearchText(searchValue);
  };

  useEffect(() => {
    if (!searchTextDebounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setIsLoading(true);
      const result = await searchService.search(searchTextDebounced, 'less');
      setSearchResult(result);
      setIsLoading(false);
    };

    fetchApi();
  }, [searchTextDebounced]);

  return (
    // Interactive tippy element may not be accessible via keyboard navigation if it is not directly after the reference element in the DOM source order.

    // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.

    <div>
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
        // appendTo={document.body}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            value={searchText}
            onChange={handleSearchTextChange}
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

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
