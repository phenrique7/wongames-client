import { headingCva } from "@/ui/common/heading/heading.cva";
import { css, type Styles } from "../../../../styled-system/css";

type HeadingProps = React.PropsWithChildren<{
  overrides?: Styles;
  size?: "sm" | "md";
  color?: "white" | "black";
  linePosition?: "left" | "bottom";
}>;

export function Heading(props: HeadingProps) {
  const headingClasses = headingCva.raw({
    size: props.size,
    color: props.color,
    linePosition: props.linePosition,
  });

  return (
    <h2 className={css(headingClasses, props.overrides)}>{props.children}</h2>
  );
}
