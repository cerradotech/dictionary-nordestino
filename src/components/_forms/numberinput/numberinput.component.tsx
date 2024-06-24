import React, { FC, memo, useMemo, useState } from 'react';

import {
  Button,
  Caption,
  InputContainer,
  Label,
  MinusIcon,
  PlusIcon,
  StyledInput,
  Wrapper,
} from './numberinput.styles';

const NumberInput: FC<NumberInputProps> = ({
  label,
  error,
  minValue,
  maxValue,
  value = 0,
  disabled,
  onChange,
  onMinus,
  onPlus,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => setFocus((focus) => !focus);

  const defValue = useMemo(() => {
    return minValue || value;
  }, [value, minValue]);

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputContainer $focus={focus} $error={!!error} $disabled={disabled}>
        <Button accessibility="minus" onPress={onMinus}>
          <MinusIcon />
        </Button>
        <StyledInput
          {...rest}
          min={minValue}
          max={maxValue}
          value={defValue}
          type="number"
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <Button accessibility="plus" onPress={onPlus}>
          <PlusIcon />
        </Button>
      </InputContainer>
      {error && <Caption>{error}</Caption>}
    </Wrapper>
  );
};

export default memo(NumberInput);
