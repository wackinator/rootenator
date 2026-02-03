# Rootenator
A lightweight CSS root variable generator for colors and sizing

## Installation
```
npm i rootenator/@alpha
```

## Features
- Generates either a .css or .scss file to any directory
- Updates style when config detects an update
- Provide a sizing list
- Provide a color list (with dark mode and forced light/dark mode)
- Mix colors from your color sheets and save them as variables for color scheme consistency

## Usage
Create a rootenator.config.ts or rootenator.config.js in your root directory. View [example config](#example-config) to see how to define.
```ts
export interface WackyConfig {
  exportPath?: string; // Default: process.cwd()
  scss?: {
    enable: boolean; // Default: false
    underscore?: boolean; // Default: false
  };
  colorOptions?: {
    prefix?: string; // Default: cl-
    mixColors?: string[];
    colors?: Record<string, string>;
    darks?: Record<string, string>;
  };
  sizingOptions?: {
    prefix?: string; // Default: s
    sizingUnit?: string; // Default: rem
    sizes?: Record<string, string | number>;
  };
}
```
Then run:
```
npx rootenator
```

## Color Mixing Usage
- In the config file, you can create a mixColors array to mix your provided colors 

Mode 1: (takes from root colors [not dark mode])

```1>color1:color2:weight>name```

Mode 2: (aware of light and dark mode)

```2>lightColor1:lightColor2:weight>darkColor1:darkColor2:weight>name```

## Example Config:
```js
import { defineConfig } from "@wacky/rootenator";

export default defineConfig({
  exportPath: './src/scss',
  scss: {
    enable: true,
    underscore: true,
  },
  colorOptions: {
    mixColors: ["1>secondary:purple:50>purpMix"],
    colors: {
      primary: "#fff",
      secondary: "#e0d8d8",
      tertiary: "#c3b0b0",
      contrast: "#253237",
      disabled: "#7a7a7a",
      red: "#ff594d",
      orange: "#ff7f3d",
      green: "#15ce53",
      pink: "#ff4d6d",
      gold: "#ffd11a",
      white: "#fff"
    },
    darks: {
      primary: "#121113",
      secondary: "#1e2021",
      tertiary: "#54595b",
      contrast: "#f7f7f2"
    }
  },
  sizingOptions: {
    prefix: "s",
    sizes: {
      xxxs: 0.4,
      xxs: 0.8,
      xms: 1,
      xs: 1.2,
      mxs: 1.4,
      s: 1.8,
      ms: 2,
      sm: 2.4,
      m: 3,
      ml: 3.6,
      l: 4.8,
    }
  }
});
```
