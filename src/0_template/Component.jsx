import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Component.module.scss';

const cx = classNames.bind(styles);

function Component() {
  return <h2>Component</h2>;
}

Component.propTypes = {};

export default Component;
