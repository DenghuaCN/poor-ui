type InputTheme = 'normal' | 'success' | 'warning' | 'error';
type InputSize = 'mini' | 'small' | 'medium' | 'large';
type InputElementEvent = Event & {target: HTMLInputElement};

interface Props {
  value: any;
  type: string;
  clearable: boolean;
  maxlength: number;
  placeholder: string | number;
  disabled: boolean;
  readonly: boolean;
  width: string;
  label: string;
  labelRight: string;
  theme: InputTheme;
  size: InputSize
}

export {
  InputTheme,
  InputSize,
  InputElementEvent,
  Props,
}