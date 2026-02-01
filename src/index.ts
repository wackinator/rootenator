export interface WackyConfig {
  exportPath?: string;
  scss?: {
    enable: boolean;
    underscore?: boolean;
  };
  colorOptions?: {
    prefix?: string;
    mixColors?: string[];
    colors?: Record<string, string>;
    darks?: Record<string, string>;
  };
  sizingOptions?: {
    prefix?: string;
    sizingUnit?: string;
    sizes?: Record<string, string | number>;
  };
}

export function defineConfig(config: WackyConfig): WackyConfig {
  return config;
}
