import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outlinedPrimary,
  outlined,
  rounded,
  disabled,
  small,
  large,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  const classes = cx('wrapper', {
    primary,
    outlinedPrimary,
    outlined,
    rounded,
    disabled,
    small,
    large,
    leftIcon,
    rightIcon,
  });

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  if (disabled) {
    delete props.onClick;
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <i>{leftIcon}</i>}
      <span>{children}</span>
      {rightIcon && <i>{rightIcon}</i>}
    </Comp>
  );
}

export default Button;
