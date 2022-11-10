export type ButtonTheme = "button" | "text" | "link" | "primary";
export type ButtonSize = "normal" | "big" | "small";

export interface Props {
  theme: ButtonTheme;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  danger: boolean;
}

export interface Emits {
  (e: "click", event: MouseEvent): void;
}