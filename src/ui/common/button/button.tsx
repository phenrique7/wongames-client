import { buttonSva } from "./button.sva";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    icon: React.ReactNode;
    size: "sm" | "md" | "lg";
    variant: "primary-solid" | "primary-ghost" | "github";
  }>;

export function Button(props: ButtonProps) {
  const { variant, size, icon, children, ...other } = props;

  const styles = buttonSva({ variant, size });

  return (
    <button className={styles.root} {...other}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      {children}
    </button>
  );
}
