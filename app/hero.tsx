import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import Box from "@/ui/components/box";
import Text from "@/ui/components/text";
import { Theme } from "@/ui/styles/theme";
import { useTheme } from "@shopify/restyle";
import { Button } from "@/ui/components/button";
import { FullLogo } from "@/ui/components/full-logo";

export default function HeroScreen() {
  const theme = useTheme<Theme>();

  return (
    <Box position="relative">
      <Image
        style={{ height: "100%" }}
        contentPosition={{ left: "40%" }}
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
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <FullLogo color="white" size="large" />
        <Text color="white" variant="header" textAlign="center" marginTop="xl" maxWidth={500}>
          All your favorite games in one place
        </Text>
        <Box width="100%" marginTop="xl" gap="m" alignItems="center">
          <Button size="lg" rootStyle={{ borderRadius: 32 }}>
            Get Started
          </Button>
          <Button
            size="lg"
            variant="primary-outlined"
            rootStyle={{ borderRadius: 32 }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
