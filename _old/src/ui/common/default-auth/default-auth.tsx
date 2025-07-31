import { GithubIcon } from "@storybook/icons";
import { MailIcon } from "@/ui/icons/mail-icon";
import { MagicIcon } from "@/ui/icons/magic-icon";
import { Button } from "@/ui/common/button/button";
import { css } from "../../../../styled-system/css";
import { TextField } from "@/ui/common/text-field/text-field";
import { flex, vstack } from "../../../../styled-system/patterns";

type DefaultAuthProps = {
  toggleAuthType: () => void;
  page: "sign-up" | "sign-in";
};

export function DefaultAuth(props: DefaultAuthProps) {
  return (
    <div>
      <form>
        <div className={vstack({ gap: 4, alignItems: "stretch", mb: 9 })}>
          <Button type="button" variant="github" icon={<GithubIcon />}>
            Continue with GitHub
          </Button>
          <span
            className={flex({
              fontSize: "sm",
              alignItems: "center",
              _before: {
                mr: 3,
                flex: 1,
                content: '""',
                height: "1px",
                width: "100%",
                backgroundColor: "#DBDCDF",
              },
              _after: {
                ml: 3,
                flex: 1,
                content: '""',
                height: "1px",
                width: "100%",
                backgroundColor: "#DBDCDF",
              },
            })}
          >
            or
          </span>
          <TextField placeholder="Email">
            <TextField.LeftElement>
              <MailIcon color="#969696" />
            </TextField.LeftElement>
          </TextField>
        </div>
        <Button>
          Sign {props.page === "sign-up" ? "up" : "in"} with email
        </Button>
      </form>
      <div
        className={flex({
          mt: 8,
          p: 1.5,
          fontSize: "xs",
          align: "center",
          borderRadius: "md",
          height: { base: 20, md: 14 },
          backgroundColor: "rgba(255, 114, 95, 0.125)",
        })}
      >
        <span className={css({ mx: 3 })}>
          <MagicIcon color="#FF725F" />
        </span>
        <p>
          We’ll email you a magic code for a password-free sign{" "}
          {props.page === "sign-up" ? "up" : "in"}. Or you can{" "}
          <span
            role="link"
            tabIndex={0}
            onClick={props.toggleAuthType}
            onKeyDown={(e) => {
              if (e.key === "Enter") props.toggleAuthType();
            }}
            className={css({
              fontWeight: "semibold",
              cursor: "pointer",
              _hover: {
                textDecoration: "underline",
              },
              _focus: {
                outline: "2px solid rgb(10, 13, 39)",
              },
            })}
          >
            sign {props.page === "sign-up" ? "up" : "in"} with password instead
          </span>
          .
        </p>
      </div>
    </div>
  );
}
