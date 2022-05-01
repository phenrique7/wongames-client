import clsx from 'clsx';
import * as React from 'react';
import styles from '@/components/icon-button/IconButton.module.css';

type IconButtonProps = {
  'aria-label': string;
  icon: React.ReactElement;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
};

export function IconButton(props: IconButtonProps) {
  const { icon, size = 'md', variant = 'primary', ...other } = props;

  return (
    <button
      className={clsx(styles.root, {
        [styles.root__small]: size === 'sm',
        [styles.root__large]: size === 'lg',
        [styles.root__medium]: size === 'md',
        [styles.root__primary]: variant === 'primary',
        [styles.root__secondary]: variant === 'secondary',
      })}
      {...other}
    >
      <span
        className={clsx(styles.root_icon, {
          [styles.root_icon__small]: size === 'sm',
          [styles.root_icon__medium]: size === 'md',
          [styles.root_icon__large]: size === 'lg',
          [styles.root_icon__primary]: variant === 'primary',
          [styles.root_icon__secondary]: variant === 'secondary',
        })}
      >
        {icon}
      </span>
    </button>
  );
}
