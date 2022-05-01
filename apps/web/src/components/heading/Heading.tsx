import clsx from 'clsx';
import * as React from 'react';
import styles from '@/components/heading/Heading.module.css';

type HeadingProps = {
  line?: 'left' | 'bottom';
  children: React.ReactNode;
  color?: 'white' | 'black';
};

export function Heading(props: HeadingProps) {
  const { children, line, color = 'black' } = props;

  return (
    <h2
      className={clsx(styles.root, {
        [styles.root__white]: color === 'white',
        [styles.root__line_left]: line === 'left',
        [styles.root__line_bottom]: line === 'bottom',
      })}
    >
      {children}
    </h2>
  );
}
