"use client";

import Link from "next/link";
import { MailIcon } from "@/ui/icons/mail-icon";
import { LockIcon } from "@/ui/icons/lock-icon";
import { Button } from "@/ui/common/button/button";
import { useAuthType } from "@/hooks/use-auth-type";
import { css } from "../../../../styled-system/css";
import { Heading } from "@/ui/common/heading/heading";
import { vstack } from "../../../../styled-system/patterns";
import { TextField } from "@/ui/common/text-field/text-field";
import { DefaultAuth } from "@/ui/common/default-auth/default-auth";

export default function SignInPage() {
  const { authType, toggleAuthType } = useAuthType();

  return (
    <div
      className={vstack({
        gap: 7,
        alignItems: "stretch",
        width: { base: 80, md: 96 },
      })}
    >
      <Heading>Sign in</Heading>
      {authType === "DEFAULT" ? (
        <DefaultAuth page="sign-in" toggleAuthType={toggleAuthType} />
      ) : (
        <div className={vstack({ gap: 1.5, alignItems: "stretch" })}>
          <TextField placeholder="Email" type="email" name="email">
            <TextField.LeftElement>
              <MailIcon color="#969696" />
            </TextField.LeftElement>
          </TextField>
          <TextField placeholder="Password" type="password" name="password">
            <TextField.LeftElement>
              <LockIcon color="#969696" />
            </TextField.LeftElement>
          </TextField>
          <Link
            href="/forgot-password"
            className={css({
              ml: "auto",
              fontSize: "sm",
              width: "fit-content",
              _hover: {
                textDecoration: "underline",
              },
              _focus: {
                outline: "2px solid rgb(10, 13, 39)",
              },
            })}
          >
            Forgot your password?
          </Link>
          <div className={css({ mt: 5 })}>
            <Button>Sign in now</Button>
          </div>
          <p className={css({ mt: 2, fontSize: "xs", color: "shadow_gray" })}>
            If you prefer, you can go back and{" "}
            <span
              role="link"
              tabIndex={0}
              onClick={toggleAuthType}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleAuthType();
              }}
              className={css({
                cursor: "pointer",
                fontWeight: "semibold",
                _hover: {
                  textDecoration: "underline",
                },
                _focus: {
                  outline: "2px solid rgb(10, 13, 39)",
                },
              })}
            >
              sign in with GitHub or magic link
            </span>
            .
          </p>
        </div>
      )}
      <p
        className={css({
          fontSize: "sm",
          color: "wg_black",
          textAlign: "center",
        })}
      >
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className={css({
            color: "wg_green_dk",
            fontWeight: "semibold",
            _hover: {
              textDecoration: "underline",
            },
            _focus: {
              outline: "2px solid rgb(10, 13, 39)",
            },
          })}
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
