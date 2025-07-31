import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from "react-native";

import theme from "@/ui/styles/theme";
import Text from "@/ui/components/text";

type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary-solid" | "primary-ghost" | "primary-outlined" | "github";
  rootStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary-solid",
    size = "md",
    icon,
    children,
    rootStyle,
    textStyle,
    ...other
  } = props;

  // Get styles based on variant and size
  const buttonStyle = [
    styles.button,
    styles[`button_${size}`],
    variant === "primary-ghost" && styles.button_ghost,
    variant === "primary-outlined" && styles.button_outlined,
    variant === "github" && styles.button_github,
    rootStyle,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${size}`],
    (variant === "primary-ghost" || variant === "primary-outlined") &&
      styles.text_ghost,
    variant === "github" && styles.text_white,
    variant === "primary-solid" && styles.text_white,
    textStyle,
  ];

  // For primary-solid variant, use LinearGradient
  if (variant === "primary-solid") {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        accessibilityRole="button"
        style={[styles.buttonContainer, rootStyle]}
        {...other}
      >
        <LinearGradient
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 0 }}
          style={[styles.button, styles[`button_${size}`], rootStyle]}
          colors={[theme.colors.wgOrange, theme.colors.wgPink]}
        >
          {icon ? <View style={styles.icon}>{icon}</View> : null}
          {typeof children === "string" ? (
            <Text variant="body" style={textStyles}>
              {children}
            </Text>
          ) : (
            children
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // For other variants
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyle}
      accessibilityRole="button"
      {...other}
    >
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      {typeof children === "string" ? (
        <Text variant="body" style={textStyles}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: 4, // borderRadius: "sm"
  },
  button: {
    width: "100%",
    borderRadius: 4, // borderRadius: "sm"
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button_sm: {
    paddingHorizontal: 28, // px: 7 (7*4)
    paddingVertical: 8, // py: 2 (2*4)
  },
  button_md: {
    paddingHorizontal: 32, // px: 8 (8*4)
    paddingVertical: 12, // py: 3 (3*4)
  },
  button_lg: {
    paddingHorizontal: 48, // px: 12 (12*4)
    paddingVertical: 16, // py: 4 (4*4)
  },
  button_ghost: {
    backgroundColor: "transparent",
  },
  button_outlined: {
    borderWidth: 2,
    borderColor: theme.colors.wgPink,
    backgroundColor: "transparent",
  },
  button_github: {
    backgroundColor: "#24292E",
  },
  text: {
    fontWeight: "500", // fontWeight: "medium"
  },
  text_sm: {
    fontSize: 12, // fontSize: "xs"
  },
  text_md: {
    fontSize: 14, // fontSize: "sm"
  },
  text_lg: {
    fontSize: 16,
  },
  text_white: {
    color: theme.colors.white, // color: "white"
  },
  text_ghost: {
    color: theme.colors.wgPink, // color: "wg_pink"
  },
  icon: {
    marginRight: 8,
    display: "flex",
  },
});
