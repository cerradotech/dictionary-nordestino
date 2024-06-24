import { ChangeEvent, FC, useState } from 'react';

import { isEmpty } from '~/modules';

import {
  Caption,
  ClearIcon,
  Label,
  SelectContainer,
  StyledSelect,
  Wrapper,
} from './selectinput.styles';

const Select: FC<SelectInputProps> = ({
  label,
  error,
  className,
  value,
  Icon,
  disabled,
  onChange,
  options,
  onClear,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => setFocus((focus) => !focus);

  const handleClear = () => {
    if (onClear) {
      onClear();
      return;
    }

    const event = {
      target: { value: '' },
    } as unknown as ChangeEvent<HTMLSelectElement>;
    onChange(event);
  };

  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <SelectContainer $focus={focus} $error={!!error} $disabled={disabled}>
        {Icon && <Icon />}
        <StyledSelect
          {...rest}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        >
          {options?.map((option) => <option key={option.label} {...option} />)}
        </StyledSelect>

        {!isEmpty(value) && <ClearIcon onClick={handleClear} />}
      </SelectContainer>

      {error && <Caption>{error}</Caption>}
    </Wrapper>
  );
};

export default Select;
