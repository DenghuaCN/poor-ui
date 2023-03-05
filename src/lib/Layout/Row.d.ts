export type RowType = 'end' | 'start' | 'center' | 'space-around' | 'space-between';

export interface RowProps {
  gutter: number | string;
  justify: RowType;
}