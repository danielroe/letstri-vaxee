import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
