export type confirmType = () => void | boolean;
export type cancelType = () => void | boolean;

export interface Props {
  visible?: boolean;
  width?: string | number;
  center?: boolean;
  title?: string;
  closeOnClickOverlay?: boolean;
  confirm?: confirmType;
  cancel?: cancelType;
}

export interface Emits {
  (e: "update:visible", visible: boolean): void;
}
