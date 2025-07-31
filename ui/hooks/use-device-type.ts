import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

// Device type definitions
export type DeviceType = "PHONE" | "LONG_PHONE" | "TABLET" | "LONG_TABLET";

// Breakpoints for different device types
const BREAKPOINTS = {
  PHONE_MAX_WIDTH: 767, // Max width for phones
  TABLET_MIN_WIDTH: 768, // Min width for tablets
  TABLET_MAX_WIDTH: 1024, // Max width for tablets
  ASPECT_RATIO_THRESHOLD: 1.6, // Threshold to determine if a device is "long"
};

/**
 * Hook to determine the device type based on screen dimensions
 * @returns An object containing boolean flags for each device type and the current device type
 */
export function useDeviceType() {
  // Initialize state with default values
  const [deviceType, setDeviceType] = useState<DeviceType>("PHONE");

  useEffect(() => {
    // Function to update a device type based on dimensions
    function updateDeviceType() {
      const { width, height } = Dimensions.get("window");
      const aspectRatio = height / width;
      const isLong = aspectRatio > BREAKPOINTS.ASPECT_RATIO_THRESHOLD;

      if (width <= BREAKPOINTS.PHONE_MAX_WIDTH) {
        // Device is a phone
        if (isLong) {
          setDeviceType("LONG_PHONE");
        } else {
          setDeviceType("PHONE");
        }
      } else {
        // Device is a tablet
        if (isLong) {
          setDeviceType("LONG_TABLET");
        } else {
          setDeviceType("TABLET");
        }
      }
    }

    // Initial update
    updateDeviceType();

    // Add event listener for dimension changes
    const dimensionsChangeSubscription = Dimensions.addEventListener(
      "change",
      updateDeviceType,
    );

    // Cleanup subscription on unmount
    return () => {
      dimensionsChangeSubscription.remove();
    };
  }, []);

  return { deviceType };
}
