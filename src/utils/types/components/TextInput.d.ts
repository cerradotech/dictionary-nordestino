declare type TextInputProps = Omit<Aggregates.InputMaskProps, 'mask'> & {
  label?: string;
  error?: string | boolean;
  className?: string;
  value: string | number | readonly string[];
  Icon?: Aggregates.ComponentType<Aggregates.PropsWithChildren>;
  onChange: Aggregates.ChangeEventHandler<Aggregates.HTMLInputElement>;
  onClear?(): void;
  mask?: string | Array<string | RegExp>;
};

declare type StyledTextInputProps = {
  $focus?: boolean;
  $error?: boolean;
  $disabled?: boolean;
};
