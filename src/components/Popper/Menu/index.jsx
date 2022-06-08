import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = (title = null) => {
    return (
      <>
        {title && (
          <Header
            title={title}
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            onBack={() => {
              setHistory((prev) => prev.slice(0, prev.length - 1));
            }}
          />
        )}

        {current.data.map((item, index) => {
          const isParrent = !!item.children;

          return (
            <MenuItem
              key={index}
              data={item}
              onClick={() => {
                if (isParrent) {
                  setHistory((prev) => {
                    return [...prev, item.children];
                  });
                } else {
                  onChange(item);
                }
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <Tippy
      render={(attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems(current.title)}</PopperWrapper>
        </div>
      )}
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      appendTo={document.body}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
