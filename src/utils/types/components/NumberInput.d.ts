declare type NumberInputProps = Omit<
  Aggregates.InputHTMLAttributes<Aggregates.HTMLInputElement>,
  'type'
> & {
  label?: string;
  error?: string | boolean;
  value?: number;
  minValue?: number;
  maxValue?: number;
  onChange: Aggregates.ChangeEventHandler<Aggregates.HTMLInputElement>;
  onPlus?(): void;
  onMinus?(): void;
  disabled?: boolean;
};

declare type StyledNumberInputProps = {
  $focus?: boolean;
  $error?: boolean;
  $disabled?: boolean;
};
