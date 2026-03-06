// SlideComposition.tsx
// The main Remotion composition. One instance = one slide.
// Accepts a Slide object as props, renders layout + elements + avatar + transitions.

import {
    AbsoluteFill,
    interpolate,
    Sequence,
    useCurrentFrame,
    useVideoConfig,
  } from "remotion";
  import { z } from "zod";
  import { AvatarOverlay } from "./components/AvatarOverlay";
  import { PALETTES, getTypeStyle } from "./designSystem";
  import { Slide, SlideElement, Layout } from "./types";
  
  // ─── Transition Hook ──────────────────────────────────────────────────────────
  // Returns a style object with opacity/transform based on current frame
  // and the slide's in/out transition config.
  
  const useTransitionStyle = (slide: Slide): React.CSSProperties => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
  
    const { in: transIn, out: transOut } = slide.transition;
  
    // --- Opacity (always fades in and out) ---
    const opacity = interpolate(
      frame,
      [
        0,
        transIn.durationFrames,
        durationInFrames - transOut.durationFrames,
        durationInFrames,
      ],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  
    // --- Transform for IN transition ---
    let transformIn = "none";
  
    if (transIn.type === "slide-up") {
      const y = interpolate(frame, [0, transIn.durationFrames], [60, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      transformIn = `translateY(${y}px)`;
    } else if (transIn.type === "slide-down") {
      const y = interpolate(frame, [0, transIn.durationFrames], [-60, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      transformIn = `translateY(${y}px)`;
    } else if (transIn.type === "zoom-in") {
      const scale = interpolate(frame, [0, transIn.durationFrames], [0.92, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      transformIn = `scale(${scale})`;
    }
  
    // --- Transform for OUT transition ---
    let transformOut = "none";
  
    if (transOut.type === "slide-down") {
      const y = interpolate(
        frame,
        [durationInFrames - transOut.durationFrames, durationInFrames],
        [0, 60],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );
      transformOut = `translateY(${y}px)`;
    } else if (transOut.type === "slide-up") {
      const y = interpolate(
        frame,
        [durationInFrames - transOut.durationFrames, durationInFrames],
        [0, -60],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );
      transformOut = `translateY(${y}px)`;
    }
  
    // Combine in/out transforms (simple - one dominates at a time)
    const transform =
      frame < transIn.durationFrames
        ? transformIn
        : frame > durationInFrames - transOut.durationFrames
        ? transformOut
        : "none";
  
    return { opacity, transform };
  };
  
  // ─── Element Renderers ────────────────────────────────────────────────────────
  
  const renderElement = (el: SlideElement, palette: ReturnType<typeof PALETTES[keyof typeof PALETTES] extends infer T ? () => T : never>, colors: ReturnType<typeof PALETTES[keyof typeof PALETTES]>) => {
    switch (el.type) {
      case "headline":
        return (
          <h1
            key={el.id}
            style={{
              ...getTypeStyle(el.scale),
              color: colors[el.color],
              margin: 0,
              padding: 0,
            }}
          >
            {el.content}
          </h1>
        );
  
      case "subheadline":
        return (
          <h2
            key={el.id}
            style={{
              ...getTypeStyle(el.scale),
              color: colors[el.color],
              margin: "16px 0 0 0",
              padding: 0,
            }}
          >
            {el.content}
          </h2>
        );
  
      case "body-text":
        return (
          <p
            key={el.id}
            style={{
              ...getTypeStyle(el.scale),
              color: colors[el.color],
              margin: "24px 0 0 0",
            }}
          >
            {el.content}
          </p>
        );
  
      case "bullet-list":
        return (
          <ul
            key={el.id}
            style={{
              ...getTypeStyle(el.scale),
              color: colors[el.color],
              margin: "32px 0 0 0",
              padding: "0 0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {el.items.map((item, i) => (
              <li key={i} style={{ lineHeight: 1.4 }}>
                {item}
              </li>
            ))}
          </ul>
        );
  
      case "stat-number":
        return (
          <div
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                ...getTypeStyle(el.scale),
                color: el.accent ? colors.accent : colors.primary,
              }}
            >
              {el.content}
            </span>
            <span
              style={{
                ...getTypeStyle("body-md"),
                color: colors.secondary,
                textAlign: "center",
                maxWidth: 280,
              }}
            >
              {el.label}
            </span>
          </div>
        );
  
      case "image":
        return (
          <img
            key={el.id}
            src={el.src}
            alt={el.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        );
  
      default:
        return null;
    }
  };
  
  // ─── Layout Components ────────────────────────────────────────────────────────
  
  const TitleCenterLayout: React.FC<{ slide: Slide }> = ({ slide }) => {
    const colors = PALETTES[slide.palette];
    const textEls = slide.elements.filter((e) => e.type !== "image");
  
    return (
      <AbsoluteFill
        style={{
          backgroundColor: colors.background,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0,
          padding: 120,
          textAlign: "center",
        }}
      >
        {textEls.map((el) => renderElement(el, null, colors))}
      </AbsoluteFill>
    );
  };
  
  const BulletWithImageLayout: React.FC<{ slide: Slide }> = ({ slide }) => {
    const colors = PALETTES[slide.palette];
    const imageEl = slide.elements.find((e) => e.type === "image");
    const textEls = slide.elements.filter((e) => e.type !== "image");
  
    return (
      <AbsoluteFill style={{ backgroundColor: colors.background, display: "flex", flexDirection: "row" }}>
        {/* Left: text content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 60px 80px 100px",
          }}
        >
          {textEls.map((el) => renderElement(el, null, colors))}
        </div>
  
        {/* Right: image */}
        {imageEl && (
          <div style={{ width: "45%", position: "relative", overflow: "hidden" }}>
            {renderElement(imageEl, null, colors)}
            {/* Gradient blend with background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to right, ${colors.background} 0%, transparent 30%)`,
              }}
            />
          </div>
        )}
      </AbsoluteFill>
    );
  };
  
  const StatGridLayout: React.FC<{ slide: Slide }> = ({ slide }) => {
    const colors = PALETTES[slide.palette];
    const headlineEl = slide.elements.find((e) => e.type === "headline");
    const statEls = slide.elements.filter((e) => e.type === "stat-number");
  
    return (
      <AbsoluteFill
        style={{
          backgroundColor: colors.background,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 120px",
          gap: 64,
        }}
      >
        {headlineEl && (
          <div style={{ textAlign: "center" }}>
            {renderElement(headlineEl, null, colors)}
          </div>
        )}
  
        {/* Subtle divider */}
        <div style={{ width: 80, height: 3, backgroundColor: colors.accent, borderRadius: 2 }} />
  
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 80,
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {statEls.map((el) => renderElement(el, null, colors))}
        </div>
      </AbsoluteFill>
    );
  };
  
  // Maps layout name → layout component
  const LAYOUT_MAP: Record<Layout, React.FC<{ slide: Slide }>> = {
    "title-center": TitleCenterLayout,
    "bullet-with-image": BulletWithImageLayout,
    "stat-grid": StatGridLayout,
    // Stubs for future layouts - renders a placeholder
    "quote-focus": ({ slide }) => {
      const colors = PALETTES[slide.palette];
      return (
        <AbsoluteFill style={{ backgroundColor: colors.background, alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: colors.muted, fontSize: 32 }}>quote-focus layout — coming soon</span>
        </AbsoluteFill>
      );
    },
    "full-bleed-image": ({ slide }) => {
      const colors = PALETTES[slide.palette];
      return (
        <AbsoluteFill style={{ backgroundColor: colors.background, alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: colors.muted, fontSize: 32 }}>full-bleed-image layout — coming soon</span>
        </AbsoluteFill>
      );
    },
  };
  
  // ─── Main Composition ─────────────────────────────────────────────────────────
  
  export const SlideComposition: React.FC<{ slide: Slide }> = ({ slide }) => {
    const transitionStyle = useTransitionStyle(slide);
    const LayoutComponent = LAYOUT_MAP[slide.layout];
  
    return (
      <AbsoluteFill>
        <Sequence name="Slide">
          <AbsoluteFill style={transitionStyle}>
            <LayoutComponent slide={slide} />
          </AbsoluteFill>
        </Sequence>

        <Sequence name="Avatar">
          <AvatarOverlay {...slide.avatar} />
        </Sequence>
      </AbsoluteFill>
    );
  };