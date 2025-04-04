import { css } from "../../../../styled-system/css";
import { FilledAlertIcon } from "@/ui/icons/filled-alert-icon";

export function WipBanner() {
  return (
    <div
      className={css({
        padding: 4,
        backgroundColor: "#FBAB7E",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      })}
    >
      <div
        className={css({
          container: "true",
          marginX: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          spaceY: 2,
          md: {
            spaceX: 2,
            spaceY: 0,
            flexDirection: "row",
          },
        })}
      >
        <div
          className={css({
            spaceX: 2,
            display: "flex",
            alignItems: "center",
          })}
        >
          <div
            className={css({
              width: 4,
              height: 4,
              animation: "pulse",
              color: "yellow.900",
            })}
          >
            <FilledAlertIcon />
          </div>
          <span
            className={css({
              fontSize: "sm",
              display: "flex",
              color: "yellow.900",
              alignItems: "center",
              fontWeight: "semibold",
              "&::after": {
                display: "none",
                md: { ml: 2, content: "'•'", display: "inline-block" },
              },
            })}
          >
            Work in Progress
          </span>
        </div>
        <p
          className={css({
            fontSize: "sm",
            textAlign: "center",
            color: "yellow.900",
            md: {
              textAlign: "left",
            },
          })}
        >
          This page is currently under construction. Check back soon for
          updates!
        </p>
      </div>
    </div>
  );
}
