import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      render={(attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      appendTo={document.body}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
