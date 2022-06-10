import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outlinedPrimary,
  outlined,
  menuItem,
  rounded,
  disabled,
  small,
  large,
  left,
  right,
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  const classes = cx('wrapper', className, {
    primary,
    outlinedPrimary,
    outlined,
    menuItem,
    rounded,
    disabled,
    small,
    large,
    left,
    right,
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

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outlinedPrimary: PropTypes.bool,
  outlined: PropTypes.bool,
  menuItem: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
