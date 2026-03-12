import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { stackStyle, accentEyebrow, teamMemberArea } from "../helpers";

export const newGeneralTeamGridLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header header header" "memberA memberB memberC memberD"`,
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: stackStyle("62px 84px 14px 84px", 10, {
        alignItems: "center",
        textAlign: "center",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
          textAlign: "center",
        },
        subheadline: {
          ...accentEyebrow({ textAlign: "center", textTransform: "none", letterSpacing: "0" }),
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 860 },
        },
      },
    },
    memberA: teamMemberArea("14px 10px 72px 78px"),
    memberB: teamMemberArea("14px 10px 72px 10px"),
    memberC: teamMemberArea("14px 10px 72px 10px"),
    memberD: teamMemberArea("14px 78px 72px 10px"),
  },
});
