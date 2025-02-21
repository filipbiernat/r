import { createContext, useState, useMemo } from "react";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

// color design tokens export
interface ColorShades {
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
    500: string;
    550: string;
    600: string;
    650: string;
    700: string;
    750: string;
    800: string;
    850: string;
    900: string;
}

interface Tokens {
    grey: ColorShades;
    primary: ColorShades;
    greenAccent: ColorShades;
    redAccent: ColorShades;
    blueAccent: ColorShades;
}

export const tokens = (mode: "light" | "dark"): Tokens => ({
    ...(mode === "dark"
        ? {
              grey: {
                  100: "#e0e0e0",
                  150: "#d1d1d1",
                  200: "#c2c2c2",
                  250: "#b3b3b3",
                  300: "#a3a3a3",
                  350: "#949494",
                  400: "#858585",
                  450: "#767676",
                  500: "#666666",
                  550: "#575757",
                  600: "#525252",
                  650: "#434343",
                  700: "#3d3d3d",
                  750: "#2e2e2e",
                  800: "#292929",
                  850: "#1a1a1a",
                  900: "#141414",
              },
              primary: {
                  100: "#d0d1d5",
                  150: "#bfc1c8",
                  200: "#a1a4ab",
                  250: "#8f9198",
                  300: "#727681",
                  350: "#5e616d",
                  400: "#1F2A40",
                  450: "#192234",
                  500: "#141b2d",
                  550: "#101624",
                  600: "#101624",
                  650: "#0d121e",
                  700: "#0c101b",
                  750: "#090d16",
                  800: "#080b12",
                  850: "#05080d",
                  900: "#040509",
              },
              greenAccent: {
                  100: "#dbf5ee",
                  150: "#c8ebde",
                  200: "#b7ebde",
                  250: "#a4e2cd",
                  300: "#94e2cd",
                  350: "#81d8bd",
                  400: "#70d8bd",
                  450: "#5dcdb0",
                  500: "#4cceac",
                  550: "#3ab58a",
                  600: "#3da58a",
                  650: "#2e8c67",
                  700: "#2e7c67",
                  750: "#1b6345",
                  800: "#1e5245",
                  850: "#0b3922",
                  900: "#0f2922",
              },
              redAccent: {
                  100: "#f8dcdb",
                  150: "#f3c7c6",
                  200: "#f1b9b7",
                  250: "#eaa4a2",
                  300: "#e99592",
                  350: "#e2807d",
                  400: "#e2726e",
                  450: "#db5d59",
                  500: "#db4f4a",
                  550: "#c63f3b",
                  600: "#af3f3b",
                  650: "#9a2f2c",
                  700: "#832f2c",
                  750: "#6e1f1e",
                  800: "#58201e",
                  850: "#43100f",
                  900: "#2c100f",
              },
              blueAccent: {
                  100: "#e1e2fe",
                  150: "#d0d1fd",
                  200: "#c3c6fd",
                  250: "#b2b5fc",
                  300: "#a4a9fc",
                  350: "#9398fb",
                  400: "#868dfb",
                  450: "#757cfa",
                  500: "#6870fa",
                  550: "#575fc8",
                  600: "#535ac8",
                  650: "#424996",
                  700: "#3e4396",
                  750: "#2d3274",
                  800: "#2a2d64",
                  850: "#191c42",
                  900: "#151632",
              },
          }
        : {
              grey: {
                  100: "#141414",
                  150: "#1a1a1a",
                  200: "#292929",
                  250: "#2e2e2e",
                  300: "#3d3d3d",
                  350: "#434343",
                  400: "#525252",
                  450: "#575757",
                  500: "#666666",
                  550: "#6b6b6b",
                  600: "#858585",
                  650: "#8a8a8a",
                  700: "#a3a3a3",
                  750: "#a8a8a8",
                  800: "#c2c2c2",
                  850: "#c7c7c7",
                  900: "#e0e0e0",
              },
              primary: {
                  100: "#040509",
                  150: "#06070d",
                  200: "#080b12",
                  250: "#0a0d16",
                  300: "#0c101b",
                  350: "#0e121f",
                  400: "#f2f0f0", // manually changed
                  450: "#e0e0e0",
                  500: "#141b2d",
                  550: "#121724",
                  600: "#1F2A40",
                  650: "#1c2638",
                  700: "#727681",
                  750: "#6b6b6b",
                  800: "#a1a4ab",
                  850: "#9a9a9a",
                  900: "#d0d1d5",
              },
              greenAccent: {
                  100: "#0f2922",
                  150: "#132f28",
                  200: "#1e5245",
                  250: "#235a4e",
                  300: "#2e7c67",
                  350: "#33856f",
                  400: "#3da58a",
                  450: "#42ae92",
                  500: "#4cceac",
                  550: "#55d6b5",
                  600: "#70d8bd",
                  650: "#7adfc5",
                  700: "#94e2cd",
                  750: "#9de9d5",
                  800: "#b7ebde",
                  850: "#c0f2e6",
                  900: "#dbf5ee",
              },
              redAccent: {
                  100: "#2c100f",
                  150: "#331312",
                  200: "#58201e",
                  250: "#662624",
                  300: "#832f2c",
                  350: "#993838",
                  400: "#af3f3b",
                  450: "#c54845",
                  500: "#db4f4a",
                  550: "#e25a55",
                  600: "#e2726e",
                  650: "#e97d79",
                  700: "#e99592",
                  750: "#f1a09d",
                  800: "#f1b9b7",
                  850: "#f8c4c2",
                  900: "#f8dcdb",
              },
              blueAccent: {
                  100: "#151632",
                  150: "#1a1a3a",
                  200: "#2a2d64",
                  250: "#2e3170",
                  300: "#3e4396",
                  350: "#4347a2",
                  400: "#535ac8",
                  450: "#575ed4",
                  500: "#6870fa",
                  550: "#6b74ff",
                  600: "#868dfb",
                  650: "#8a91ff",
                  700: "#a4a9fc",
                  750: "#a8adff",
                  800: "#c3c6fd",
                  850: "#c7caff",
                  900: "#e1e2fe",
              },
          }),
});

// mui theme settings
interface PaletteColor {
    main: string;
}

interface NeutralPalette {
    dark: string;
    main: string;
    light: string;
}

interface BackgroundPalette {
    default: string;
}

interface Palette {
    mode: "light" | "dark";
    primary: PaletteColor;
    secondary: PaletteColor;
    neutral: NeutralPalette;
    background: BackgroundPalette;
}

import { CSSProperties } from "react";

interface TypographyVariant extends CSSProperties {
    fontFamily: string;
    fontSize: number;
}

interface Typography {
    fontFamily: string;
    fontSize: number;
    h1: TypographyVariant;
    h2: TypographyVariant;
    h3: TypographyVariant;
    h4: TypographyVariant;
    h5: TypographyVariant;
    h6: TypographyVariant;
}

export const themeSettings = (mode: "light" | "dark"): ThemeOptions => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                  }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
