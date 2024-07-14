import { DarkModeType } from "@/interfaces/context";

export const isDarkMode = (themeConfig: Array<DarkModeType>) =>
  themeConfig.find((item) => item.isSelected)?.type === "dark";
