declare type TypographyVariants =
  | 'min'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'max';

declare type TypographyType = {
  variant?: TypographyVariants;
  children?: string | string[] | any;
};

declare type TypographyTypeStyle = TypographyType & {
  lineHeightVariant?: TypographyVariants;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
};

declare type TypographyComponentProps = TypographyType &
  Aggregates.HTMLAttributes<Aggregates.HTMLSpanElement>;
