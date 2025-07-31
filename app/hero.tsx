import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Box from "@/ui/components/box";
import Text from "@/ui/components/text";
import { Theme } from "@/ui/styles/theme";
import { useTheme } from "@shopify/restyle";
import { Button } from "@/ui/components/button";
import { FullLogo } from "@/ui/components/full-logo";
import { useDeviceType } from "@/ui/hooks/use-device-type";

export default function HeroScreen() {
  const router = useRouter();
  const { deviceType } = useDeviceType();
  const theme = useTheme<Theme>();

  return (
    <Box position="relative">
      <Image
        style={{ height: "100%" }}
        contentPosition={{ left: "39%" }}
        source={{ uri: "hero_layout_bg" }}
      />
      <LinearGradient
        colors={["transparent", theme.colors.black]}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
        }}
      />
      <Box
        zIndex={1}
        bottom={0}
        width="100%"
        paddingLeft="l"
        paddingRight="l"
        paddingBottom="xl"
        alignItems="center"
        position="absolute"
      >
        <FullLogo color="white" size="large" />
        <Text
          marginTop="xl"
          color="wgGray"
          maxWidth={500}
          variant="heading3"
          textAlign="center"
        >
          All your favorite games in one place
        </Text>
        <Box width="100%" marginTop="xxl" gap="m" alignItems="center">
          <Button size="lg" rootStyle={styles.buttonRounded}>
            Get started
          </Button>
          <Button
            size="lg"
            variant="primary-outlined"
            rootStyle={styles.buttonRounded}
            onPress={() => router.navigate("/sign-in")}
          >
            Log in
          </Button>
          <Link
            href="/sign-up"
            style={
              deviceType === "TABLET"
                ? styles.linkTabletAlignment
                : styles.linkMobileAlignment
            }
          >
            <Text variant="body2" color="wgGray">
              Don&#39;t have an account?{" "}
              <Text textDecorationLine="underline">Sign up</Text>.
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  buttonRounded: {
    borderRadius: 32,
  },
  linkTabletAlignment: {
    alignSelf: "flex-end",
  },
  linkMobileAlignment: {
    alignSelf: "center",
  },
});
