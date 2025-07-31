import { LockIcon } from "@/ui/icons/lock-icon";
import { Button } from "@/ui/common/button/button";
import { css } from "../../../../styled-system/css";
import { Heading } from "@/ui/common/heading/heading";
import { vstack } from "../../../../styled-system/patterns";
import { TextField } from "@/ui/common/text-field/text-field";

export default function ResetPasswordPage() {
  return (
    <div
      className={vstack({
        gap: 7,
        alignItems: "stretch",
        width: { base: 80, md: 96 },
      })}
    >
      <Heading>Reset password</Heading>
      <p className={css({ fontSize: "sm", color: "#616061" })}>
        Enter a new password for pauloh1288@gmail.com.
      </p>
      <div className={vstack({ gap: 2, alignItems: "stretch" })}>
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
      </div>
      <Button>Reset password</Button>
    </div>
  );
}
