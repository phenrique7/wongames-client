import { css, type Styles } from "../../../../styled-system/css";
import { iconButtonSva } from "@/ui/common/icon-button/icon-button.sva";

type IconButtonProps = React.PropsWithChildren<
  Partial<{
    size: "sm" | "md" | "lg";
    variant: "solid" | "ghost";
    overrides: Partial<{ root: Styles; icon: Styles }>;
  }>
>;

export function IconButton(props: IconButtonProps) {
  const { size, variant, overrides, ...other } = props;
  const styles = iconButtonSva.raw({ size, variant });

  return (
    <button className={css(styles.root, overrides?.root)} {...other}>
      <span className={css(styles.icon, overrides?.icon)}>
        {props.children}
      </span>
    </button>
  );
}
