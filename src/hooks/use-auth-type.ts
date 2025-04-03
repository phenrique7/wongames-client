import { useState } from "react";

export function useAuthType() {
  const [authType, setAuthType] = useState<"DEFAULT" | "PASSWORD">("DEFAULT");

  function toggleAuthType() {
    setAuthType(authType === "PASSWORD" ? "DEFAULT" : "PASSWORD");
  }

  return { authType, toggleAuthType };
}
