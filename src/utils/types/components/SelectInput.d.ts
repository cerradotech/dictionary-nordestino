declare type SelectOptionsProps = Aggregates.DetailedHTMLProps<
  Aggregates.OptionHTMLAttributes<Aggregates.HTMLOptionElement>,
  Aggregates.HTMLOptionElement
>;

declare type SelectInputProps = Aggregates.DetailedHTMLProps<
  Aggregates.SelectHTMLAttributes<Aggregates.HTMLSelectElement>,
  Aggregates.HTMLSelectElement
> & {
  label?: string;
  error?: string | boolean;
  className?: string;
  value: string | number | readonly string[];
  Icon?: Aggregates.ComponentType<Aggregates.PropsWithChildren>;
  onChange: Aggregates.ChangeEventHandler<Aggregates.HTMLSelectElement>;
  options?: SelectOptionsProps[];
  onClear?(): void;
};

declare type StyledSelectInputProps = {
  $focus?: boolean;
  $error?: boolean;
  $disabled?: boolean;
};
