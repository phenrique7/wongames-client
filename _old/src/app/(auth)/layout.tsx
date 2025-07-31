import { css } from "../../../styled-system/css";
import { FullLogo } from "@/ui/common/full-logo/full-logo";
import { flex, grid, vstack } from "../../../styled-system/patterns";

type AuthLayoutProps = Readonly<React.PropsWithChildren>;

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <div
      className={grid({
        gap: 0,
        minH: "100dvh",
        columns: { base: 1, lg: 2 },
      })}
    >
      <div
        className={flex({
          hideBelow: "lg",
          position: "relative",
          background: `no-repeat 35% 50% / cover url('/images/auth-layout-bg.jpg')`,
          _before: {
            content: "''",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            bgColor: "rgba(9, 9, 11, 0.8)",
          },
        })}
      >
        <div
          className={flex({
            p: 9,
            zIndex: 1,
            direction: "column",
            justifyContent: "space-between",
          })}
        >
          <a
            href="/_old/public"
            className={css({
              width: "fit-content",
              _focus: {
                outline: "2px solid rgb(10, 13, 39)",
              },
            })}
          >
            <FullLogo color="white" />
          </a>
          <div className={css({ color: "wg_white", mt: -32 })}>
            <p
              className={css({
                fontSize: "5xl",
                fontWeight: "bold",
                lineHeight: "120%",
              })}
            >
              All your favorite games in one place
            </p>
            <p className={css({ fontSize: "2xl", mt: 4 })}>
              <span
                className={css({
                  color: "transparent",
                  fontWeight: "semibold",
                  backgroundClip: "text",
                  backgroundImage:
                    "linear-gradient(to right, #F231A5, #FF66C2)",
                })}
              >
                WON
              </span>{" "}
              is the best and most complete gaming platform.
            </p>
          </div>
          <small
            className={css({
              fontSize: "xs",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.8)",
            })}
          >
            Won Games {new Date().getFullYear()} © All rights reserved
          </small>
        </div>
      </div>
      <div
        className={vstack({
          p: 4,
          gap: 16,
          alignSelf: "center",
          justifySelf: "center",
          mt: { base: 0, sm: -12 },
        })}
      >
        <FullLogo size="large" />
        {props.children}
      </div>
    </div>
  );
}
