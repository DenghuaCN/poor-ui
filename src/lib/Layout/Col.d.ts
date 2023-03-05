export type SizeType = {
  span?: number | string;
  offset?: number | string;
}

export interface ColProps {
  span: number | string;
  offset: number | string;
  xs: number | string | SizeType;
  sm: number | string | SizeType;
  md: number | string | SizeType;
  lg: number | string | SizeType;
  xl: number | string | SizeType;
}