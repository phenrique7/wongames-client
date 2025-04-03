import Link from "next/link";
import { XIcon } from "@/ui/icons/x-icon";
import { Logo } from "@/ui/common/logo/logo";
import { MenuIcon } from "@/ui/icons/menu-icon";
import { css } from "../../../styled-system/css";
import { SearchIcon } from "@/ui/icons/search-icon";
import { GitHubIcon } from "@/ui/icons/github-icon";
import { Heading } from "@/ui/common/heading/heading";
import { LinkedinIcon } from "@/ui/icons/linkedin-icon";
import { InstagramIcon } from "@/ui/icons/instagram-icon";
import { FullLogo } from "@/ui/common/full-logo/full-logo";
import { ArrowBackIcon } from "@/ui/icons/arrow-back-icon";
import { TextField } from "@/ui/common/text-field/text-field";
import { IconButton } from "@/ui/common/icon-button/icon-button";
import { ShoppingCartIcon } from "@/ui/icons/shopping-cart-icon";
import { AccountCircleIcon } from "@/ui/icons/account-circle-icon";
import {
  flex,
  hstack,
  vstack,
  container,
} from "../../../styled-system/patterns";

type MainLayoutProps = Readonly<React.PropsWithChildren>;

export default function MainLayout(props: MainLayoutProps) {
  const isLoggedIn = false;

  return (
    <div
      className={flex({
        minH: "100dvh",
        flexDir: "column",
        alignItems: "stretch",
        bgColor: "charcoal_onyx",
      })}
    >
      <div className={container({ maxW: "7xl", width: "100%" })}>
        <header>
          <nav className={flex({ pt: 8, justify: "space-between" })}>
            {/*first column*/}
            <div className={flex({ flex: 1, hideFrom: "lg" })}>
              <IconButton variant="ghost">
                <MenuIcon color="white" />
              </IconButton>
            </div>
            <div
              className={hstack({
                gap: 10,
                alignItems: "center",
                flex: 1,
                hideBelow: "lg",
              })}
            >
              <Link
                href="/"
                className={css({
                  width: "fit-content",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <FullLogo color="white" />
              </Link>
              <Link
                href="/"
                className={css({
                  color: "wg_white",
                  fontWeight: "medium",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                Home
              </Link>
              <Link
                href="/store"
                className={css({
                  color: "wg_white",
                  fontWeight: "medium",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                Store
              </Link>
            </div>
            {/*second column*/}
            <div className={css({ flex: 1, hideFrom: "lg" })}>
              <Link
                href="/"
                className={css({
                  w: 12,
                  mx: "auto",
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <Logo />
              </Link>
            </div>
            {/*third column*/}
            <div
              className={hstack({
                gap: 9,
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              })}
            >
              <IconButton
                variant="ghost"
                overrides={{ root: css.raw({ mr: -6, lg: { mr: -3 } }) }}
              >
                <SearchIcon color="#FAFAFA" />
              </IconButton>
              <IconButton variant="ghost">
                <ShoppingCartIcon color="#FAFAFA" />
              </IconButton>
              <div className={css({ hideBelow: "lg" })}>
                {isLoggedIn ? (
                  <div
                    className={hstack({
                      gap: 2.5,
                      color: "wg_white",
                      alignItems: "center",
                    })}
                  >
                    <AccountCircleIcon />
                    <span>John</span>
                    <span
                      className={css({
                        width: 2,
                        display: "block",
                        transform: "rotate(-90deg)",
                      })}
                    >
                      <ArrowBackIcon color="#8F8F8F" />
                    </span>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className={css({
                      px: 8,
                      py: 2,
                      color: "white",
                      fontSize: "sm",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "sm",
                      alignItems: "center",
                      whiteSpace: "nowrap",
                      fontWeight: "medium",
                      display: "inline-flex",
                      justifyContent: "center",
                      background: "linear-gradient(#ff5f5f, #f062c0)",
                      _hover: {
                        background: "linear-gradient(#e35565, #d958a6)",
                      },
                      _focus: {
                        outline: "2px solid rgb(10, 13, 39)",
                      },
                    })}
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className={css({ py: 24, px: 8, flex: 1 })}>{props.children}</div>
      <footer className={css({ bgColor: "wg_white" })}>
        <div
          className={css({
            height: 10,
            bgColor: "charcoal_onyx",
            clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
            sm: { height: 14 },
            lg: { height: 20 },
          })}
        ></div>
        <div
          className={container({
            pb: 8,
            pt: 12,
            maxW: "7xl",
            display: "flex",
            flexDir: "column",
          })}
        >
          <div
            className={flex({
              gap: 8,
              flexDirection: "column",
              lg: {
                gap: 6,
                flexDirection: "row",
              },
            })}
          >
            <div className={css({ flexBasis: "12%" })}>
              <Link
                href="/"
                className={css({
                  width: 8,
                  height: 6,
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <Logo />
              </Link>
            </div>
            <div
              className={flex({
                gap: 8,
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "space-between",
                lg: { justifyContent: "flex-start" },
              })}
            >
              <ul
                className={vstack({
                  gap: 2.5,
                  flexBasis: "11rem",
                  alignItems: "flex-start",
                  "& li:not(:first-child)": {
                    fontSize: "sm",
                    color: "shadow_gray",
                  },
                })}
              >
                <li>
                  <Heading linePosition="bottom" size="sm">
                    {" "}
                    COMPANY{" "}
                  </Heading>
                </li>
                <li>About</li>
                <li>Stores</li>
                <li>Partners</li>
                <li>Franchises & Multibrands</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
              <ul
                className={vstack({
                  gap: 2.5,
                  flexBasis: "11rem",
                  alignItems: "flex-start",
                  "& li:not(:first-child)": {
                    fontSize: "sm",
                    color: "shadow_gray",
                  },
                })}
              >
                <li>
                  <Heading linePosition="bottom" size="sm">
                    {" "}
                    RESOURCES{" "}
                  </Heading>
                </li>
                <li>Blog</li>
                <li>Payments</li>
                <li>Refund</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
              <ul
                className={vstack({
                  gap: 2.5,
                  alignItems: "flex-start",
                  "& li:not(:first-child)": {
                    fontSize: "sm",
                    color: "shadow_gray",
                  },
                })}
              >
                <li>
                  <Heading linePosition="bottom" size="sm">
                    {" "}
                    PRIVACY{" "}
                  </Heading>
                </li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <form
              className={vstack({
                gap: 2,
                w: "100%",
                lg: { w: 72 },
                alignItems: "flex-start",
              })}
            >
              <Heading
                size="sm"
                linePosition="bottom"
                overrides={css.raw({ mb: 2 })}
              >
                NEWSLETTER
              </Heading>
              <TextField
                placeholder="Enter your email"
                overrides={css.raw({ pr: 20 })}
              >
                <TextField.RightElement>
                  <button
                    className={css({
                      padding: 3,
                      right: -3.5,
                      fontSize: "xs",
                      color: "wg_black",
                      fontWeight: "medium",
                      position: "relative",
                      _hover: {
                        cursor: "pointer",
                        color: "rgba(10, 13, 39, 0.8)",
                      },
                      _focus: {
                        outline: "2px solid rgb(10, 13, 39)",
                      },
                    })}
                  >
                    Subscribe
                  </button>
                </TextField.RightElement>
              </TextField>
              <p className={css({ color: "shadow_gray", fontSize: "sm" })}>
                Get the latest game news and behind the scenes updates.
                Unsubscribe at any time.
              </p>
            </form>
          </div>
          <div
            className={flex({
              mt: 12,
              gap: 4,
              fontSize: "xs",
              color: "shadow_gray",
              flexDirection: "column",
              alignItems: "flex-start",
              sm: {
                mt: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              },
            })}
          >
            <small>© {new Date().getFullYear()} Won Games, Inc.</small>
            <div
              className={flex({
                gap: 5,
                color: "shadow_gray",
                alignItems: "center",
              })}
            >
              <Link
                target="_blank"
                href="https://instagram.com"
                className={css({
                  width: 4,
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <InstagramIcon />
              </Link>
              <Link
                target="_blank"
                href="https://x.com"
                className={css({
                  width: 4,
                  height: 4,
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <XIcon />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com"
                className={css({
                  width: 4,
                  height: 4,
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <LinkedinIcon />
              </Link>
              <Link
                target="_blank"
                href="https://github.com"
                className={css({
                  width: 4,
                  display: "block",
                  _focus: {
                    outline: "2px solid rgb(10, 13, 39)",
                  },
                })}
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
