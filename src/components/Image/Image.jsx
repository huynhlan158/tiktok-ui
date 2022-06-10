import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallback: customFalback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFalback);
  };

  return (
    <img
      {...props}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
