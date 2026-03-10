import type { DataTableContent } from "../../../../schema/content";
import { getTypeStyle, withAlpha } from "../../../../designSystem";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: DataTableContent;
}

export const DataTable: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("data-table");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        ...(config.style as React.CSSProperties | undefined),
        ...(handleClick ? editStyle : {}),
      }}
      onClick={handleClick}
    >
      <table
        style={{
          width: "100%",
          height: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          overflow: "hidden",
          borderRadius: 24,
          background: withAlpha("#ffffff", 0.9),
          boxShadow: `0 20px 48px ${withAlpha("#000000", 0.18)}`,
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                ...getTypeStyle("body-md"),
                color: "#111111",
                fontFamily: tokens.fonts.heading,
                textAlign: "left",
                padding: "22px 20px",
                background: withAlpha("#d9d9d9", 0.95),
                width: "34%",
              }}
            >
              {el.columns[0]}
            </th>
            {el.columns.slice(1).map((column, index) => {
              const bg = index % 2 === 0 ? tokens.colors.accent : tokens.colors.muted;
              return (
                <th
                  key={column}
                  style={{
                    ...getTypeStyle("body-md"),
                    color: index % 2 === 0 ? "#ffffff" : "#111111",
                    fontFamily: tokens.fonts.heading,
                    textAlign: "center",
                    padding: "22px 12px",
                    background: bg,
                  }}
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {el.rows.map((row, rowIndex) => (
            <tr key={`${row.label}-${rowIndex}`}>
              <td
                style={{
                  ...getTypeStyle("body-md"),
                  color: "#111111",
                  fontFamily: tokens.fonts.heading,
                  padding: "20px 20px",
                  background:
                    rowIndex % 2 === 0
                      ? withAlpha("#f7f7f7", 0.96)
                      : withAlpha("#ececec", 0.96),
                  borderTop: `1px solid ${withAlpha("#000000", 0.08)}`,
                }}
              >
                {row.label}
              </td>
              {row.values.map((value, valueIndex) => {
                const bg =
                  valueIndex % 2 === 0
                    ? withAlpha(tokens.colors.accent, 0.18)
                    : withAlpha(tokens.colors.muted, 0.28);
                return (
                  <td
                    key={`${row.label}-${valueIndex}`}
                    style={{
                      ...getTypeStyle("body-md"),
                      color: "#2f2436",
                      fontFamily: tokens.fonts.body,
                      textAlign: "center",
                      padding: "20px 12px",
                      background: bg,
                      borderTop: `1px solid ${withAlpha("#ffffff", 0.4)}`,
                    }}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
