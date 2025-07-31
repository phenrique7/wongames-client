"use client";

import Link from "next/link";
import { LockIcon } from "@/ui/icons/lock-icon";
import { MailIcon } from "@/ui/icons/mail-icon";
import { Button } from "@/ui/common/button/button";
import { css } from "../../../../styled-system/css";
import { useAuthType } from "@/hooks/use-auth-type";
import { Heading } from "@/ui/common/heading/heading";
import { vstack } from "../../../../styled-system/patterns";
import { TextField } from "@/ui/common/text-field/text-field";
import { AccountCircleIcon } from "@/ui/icons/account-circle-icon";
import { DefaultAuth } from "@/ui/common/default-auth/default-auth";

export default function SignUpPage() {
  const { authType, toggleAuthType } = useAuthType();

  return (
    <div
      className={vstack({
        gap: 7,
        alignItems: "stretch",
        width: { base: 80, md: 96 },
      })}
    >
      <Heading>Sign up</Heading>
      {authType === "DEFAULT" ? (
        <DefaultAuth page="sign-up" toggleAuthType={toggleAuthType} />
      ) : (
        <div className={vstack({ gap: 2, alignItems: "stretch" })}>
          <TextField placeholder="Name" type="text" name="name">
            <TextField.LeftElement>
              <AccountCircleIcon color="#969696" />
            </TextField.LeftElement>
          </TextField>
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
          <TextField
            type="password"
            name="password-confirmation"
            placeholder="Confirm password"
          >
            <TextField.LeftElement>
              <LockIcon color="#969696" />
            </TextField.LeftElement>
          </TextField>
          <div className={css({ mt: 5 })}>
            <Button>Sign up now</Button>
          </div>
          <p className={css({ mt: 2, fontSize: "xs", color: "#616061" })}>
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
                  outline: "3px solid rgba(79, 83, 87, 0.5)",
                },
              })}
            >
              sign up with GitHub or magic link
            </span>
            .
          </p>
        </div>
      )}
      <p
        className={css({
          color: "wg_black",
          fontSize: "sm",
          textAlign: "center",
        })}
      >
        Already have an account?{" "}
        <Link
          href="/sign-in"
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
          Sign in
        </Link>
      </p>
    </div>
  );
}
