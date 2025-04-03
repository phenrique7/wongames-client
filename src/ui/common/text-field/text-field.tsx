import { Children, cloneElement, type InputHTMLAttributes, useId } from "react";
import { flex } from "../../../../styled-system/patterns";
import { css, type Styles } from "../../../../styled-system/css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  React.PropsWithChildren<
    Partial<{
      overrides: Styles;
      errorMessage: string;
    }>
  >;

export function TextField(props: TextFieldProps) {
  const { overrides, children, ...other } = props;

  const findChildByType = (
    type: (props: React.PropsWithChildren) => React.JSX.Element,
  ) => Children.toArray(children).find((child) => (child as any).type === type);

  const label = findChildByType(TextField.Label) ?? null;
  const leftElement = findChildByType(TextField.LeftElement) ?? null;
  const rightElement = findChildByType(TextField.RightElement) ?? null;

  const componentId = useId();
  const inputId = `input-${componentId}`;
  const errorId = `input-${componentId}-error`;

  return (
    <div className={css({ w: "100%" })}>
      {label ? cloneElement(label as React.JSX.Element, { inputId }) : null}
      <div className={css({ position: "relative" })}>
        {leftElement}
        <input
          id={inputId}
          aria-invalid="false"
          aria-errormessage={errorId}
          className={css(
            {
              height: 11,
              padding: 3,
              width: "100%",
              fontSize: "sm",
              borderRadius: "sm",
              backgroundColor: "#EAEAEA",
              ...(leftElement !== null && { pl: 12 }),
              _placeholder: {
                fontSize: "sm",
              },
              _focus: {
                outline: "2px solid rgb(10, 13, 39)",
              },
            },
            overrides,
          )}
          {...other}
        />
        {rightElement}
      </div>
      {props.errorMessage ? (
        <div
          id={errorId}
          aria-live="polite"
          className={css({ fontSize: "xs", color: "red.500", mt: 1 })}
        >
          {props.errorMessage}
        </div>
      ) : null}
    </div>
  );
}

type TextFieldLabelProps = React.PropsWithChildren;

TextField.Label = function TextFieldLabel(props: TextFieldLabelProps) {
  const { inputId } = props as TextFieldLabelProps & { inputId: string };

  return (
    <label
      htmlFor={inputId}
      className={css({
        bottom: 0.5,
        fontSize: "sm",
        color: "wg_black",
        position: "relative",
      })}
    >
      {props.children}
    </label>
  );
};

type TextFieldLeftElementProps = React.PropsWithChildren;

TextField.LeftElement = function TextFieldLeftElement(
  props: TextFieldLeftElementProps,
) {
  return (
    <span
      className={flex({
        width: 5,
        left: 3.5,
        top: "50%",
        justify: "center",
        position: "absolute",
        transform: "translateY(-50%)",
      })}
    >
      {props.children}
    </span>
  );
};

type TextFieldRightElementProps = React.PropsWithChildren;

TextField.RightElement = function TextFieldRightElement(
  props: TextFieldRightElementProps,
) {
  return (
    <span
      className={css({
        top: "50%",
        right: 3.5,
        position: "absolute",
        transform: "translateY(-50%)",
      })}
    >
      {props.children}
    </span>
  );
};
