# UI Hooks

This directory contains custom React hooks for the WonGames client application.

## Available Hooks

### useDeviceType

A hook that detects if the app is running on a phone, longPhone, tablet, or longTablet based on screen dimensions.

#### Usage

```tsx
import { useDeviceType } from '@/ui/hooks';

function MyComponent() {
  const { 
    deviceType,    // 'phone' | 'longPhone' | 'tablet' | 'longTablet'
    isPhone,       // boolean
    isLongPhone,   // boolean
    isTablet,      // boolean
    isLongTablet   // boolean
  } = useDeviceType();

  // Use the device type information to render different layouts
  return (
    <View>
      {isPhone && <PhoneLayout />}
      {isLongPhone && <LongPhoneLayout />}
      {isTablet && <TabletLayout />}
      {isLongTablet && <LongTabletLayout />}
    </View>
  );
}
```

#### How it works

The hook uses React Native's `Dimensions` API to get the screen width and height. It then determines the device type based on the following criteria:

- **Phone**: Width <= 767px
- **LongPhone**: Width <= 767px and aspect ratio > 1.6
- **Tablet**: Width > 767px
- **LongTablet**: Width > 767px and aspect ratio > 1.6

The hook also listens for dimension changes (e.g., when the device orientation changes) and updates the device type accordingly.

#### Example

See `useDeviceType.example.tsx` for a complete example of how to use this hook.
