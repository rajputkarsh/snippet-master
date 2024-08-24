import { DarkModeType } from "@/interfaces/context";

export const isDarkMode = (themeConfig: Array<DarkModeType>) =>
  themeConfig.find((item) => item.isSelected)?.type === "dark";

export const formatDate = (isoString: string) => {
  if(!isoString) return isoString;
  
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};
