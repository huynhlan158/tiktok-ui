import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

import images from '~/assets/images';

function Image({ className, src, alt, fallback: customFalback = images.noImage, ...props }, ref) {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFalback);
  };

  return (
    <img
      ref={ref}
      src={fallBack || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
