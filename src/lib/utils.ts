import { DarkModeType } from "@/interfaces/context";

export const isDarkMode = (themeConfig: Array<DarkModeType>) =>
  themeConfig.find((item) => item.isSelected)?.type === "dark";

export const formatDate = (isoString: string) => {
  if(!isoString) return isoString;
  
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
