declare type ButtonComponentProps = Omit<
  Aggregates.ButtonHTMLAttributes<Aggregates.HTMLButtonElement>,
  'onClick'
> & {
  accessibility: string;
  disabled?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  flat?: boolean;
  borderLess?: boolean;
  loading?: boolean;
  CenterIcon?: Aggregates.ComponentType;
  LeftIcon?: Aggregates.ComponentType;
  RightIcon?: Aggregates.ComponentType;
  onPress?(): Promise<void> | void;
  customError?(): void;
};

declare type StyledButtonProps = {
  $primary?: boolean;
  $secondary?: boolean;
  $tertiary?: boolean;
  $flat?: boolean;
  $borderLess?: boolean;
  $disabled?: boolean;
  $loading?: boolean;
};
