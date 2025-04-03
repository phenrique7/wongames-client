import Link from "next/link";
import Image from "next/image";
import { SentIcon } from "@/ui/icons/sent-icon";
import { MailIcon } from "@/ui/icons/mail-icon";
import { Button } from "@/ui/common/button/button";
import { css } from "../../../../styled-system/css";
import { Heading } from "@/ui/common/heading/heading";
import gmailImage from "@/assets/images/gmail-icon.png";
import outlookImage from "@/assets/images/outlook-icon.png";
import { TextField } from "@/ui/common/text-field/text-field";
import { flex, hstack, vstack } from "../../../../styled-system/patterns";

export default function ForgotPasswordPage() {
  const email = "pauloh1288@gmail.com";
  const resetLinkSent = false;

  return (
    <div className={css({ width: { base: 80, md: 96 } })}>
      {resetLinkSent ? (
        <div className={vstack({ gap: 6, alignItems: "stretch" })}>
          <div
            className={flex({
              py: 3,
              px: 2,
              align: "center",
              borderRadius: "md",
              backgroundColor: "#F0FDF4",
            })}
          >
            <span className={css({ mx: 3, width: 8 })}>
              <SentIcon color="#059669" />
            </span>
            <h2
              className={css({ color: "emerald.600", fontWeight: "semibold" })}
            >
              Reset link sent!
            </h2>
          </div>
          <p className={css({ fontSize: "sm", color: "#616061" })}>
            Check your{" "}
            <span className={css({ fontWeight: "semibold" })}>{email}</span>{" "}
            inbox for instructions from us on how to reset your password.
          </p>
          <p className={css({ fontSize: "sm", color: "#616061" })}>
            Wrong email address? Please{" "}
            <span
              role="link"
              tabIndex={0}
              className={css({
                cursor: "pointer",
                color: "wg_black",
                _hover: { textDecoration: "underline" },
                _focus: {
                  outline: "3px solid rgba(79, 83, 87, 0.5)",
                },
              })}
            >
              re-enter email address
            </span>
            .
          </p>
          <div
            className={flex({
              mt: 2,
              align: "center",
              justify: "space-around",
            })}
          >
            <Link
              target="_blank"
              href="https://mail.google.com/mail/u/0/"
              className={hstack({
                gap: 2,
                fontSize: "xs",
                _hover: { textDecoration: "underline" },
                _focus: {
                  outline: "3px solid rgba(79, 83, 87, 0.5)",
                },
              })}
            >
              <Image width="21" height="21" src={gmailImage} alt="Gmail icon" />
              Open Gmail
            </Link>
            <Link
              target="_blank"
              href="https://outlook.live.com/mail/0/inbox"
              className={hstack({
                gap: 2,
                fontSize: "xs",
                _hover: { textDecoration: "underline" },
                _focus: {
                  outline: "3px solid rgba(79, 83, 87, 0.5)",
                },
              })}
            >
              <Image
                width="22"
                height="22"
                src={outlookImage}
                alt="Outlook icon"
              />
              Open Outlook
            </Link>
          </div>
        </div>
      ) : (
        <form className={vstack({ gap: 7, alignItems: "stretch" })}>
          <Heading>Reset password request</Heading>
          <p className={css({ fontSize: "sm", color: "#616061" })}>
            Enter the email address you use to sign in to Won Games so we can
            send you a link to reset your password.
          </p>
          <TextField placeholder="Email" type="email" name="email">
            <TextField.RightElement>
              <MailIcon color="#969696" />
            </TextField.RightElement>
          </TextField>
          <Button>Get a reset link</Button>
        </form>
      )}
    </div>
  );
}
