declare type SelectProps = {
  value: string | number;
  label: string;
};

declare type ChangeFieldValue = {
  name: string;
  value: File | string | number;
  shouldValidate?: boolean;
};
