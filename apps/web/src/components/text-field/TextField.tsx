import { useId } from 'react';
import * as Label from '@radix-ui/react-label';
import type { InputHTMLAttributes } from 'react';
import styles from '@/components/text-field/TextField.module.css';

type TextFieldProps = {
  label?: string;
  errorMessage?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField(props: TextFieldProps) {
  const { label, errorMessage, rightElement, leftElement, ...other } = props;
  const errorId = useId();

  return (
    <div className={styles.root}>
      {label ? (
        <Label.Root htmlFor={other.id} className={styles.label}>
          {label}
        </Label.Root>
      ) : null}
      <div className={styles.input_box}>
        {leftElement ? (
          <span className={styles.left_element} data-testid="left-element">
            {leftElement}
          </span>
        ) : null}
        <input
          type="text"
          aria-errormessage={errorId}
          aria-invalid={errorMessage ? 'true' : 'false'}
          {...other}
        />
        {rightElement ? (
          <span className={styles.right_element} data-testid="right-element">
            {rightElement}
          </span>
        ) : null}
      </div>
      {errorMessage ? (
        <div className={styles.error} id={errorId} aria-live="polite">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
}
