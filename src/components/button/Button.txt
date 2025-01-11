import clsx from 'clsx';
import * as React from 'react';
import styles from 'src/components/button/Button.module.css';

type ButtonProps = {
  full?: boolean;
  icon?: React.ReactElement;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
};

export function Button(props: ButtonProps) {
  const {
    icon,
    children,
    size = 'md',
    full = false,
    variant = 'primary',
  } = props;

  return (
    <button
      className={clsx(styles.root, {
        [styles.root__primary]: variant === 'primary',
        [styles.root__secondary]: variant === 'secondary',
        [styles.root__small]: size === 'sm',
        [styles.root__medium]: size === 'md',
        [styles.root__large]: size === 'lg',
        [styles.root__full]: full,
      })}
    >
      {icon ? (
        <span
          className={clsx(styles.icon, {
            [styles.icon__small]: size === 'sm',
            [styles.icon__large]: size === 'lg',
            [styles.icon__medium]: size === 'md',
            [styles.icon__primary]: variant === 'primary',
            [styles.icon__secondary]: variant === 'secondary',
          })}
        >
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
