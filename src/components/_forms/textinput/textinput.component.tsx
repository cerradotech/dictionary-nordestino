import { ChangeEvent, FC, useState } from 'react';

import { isEmpty } from '~/modules';

import {
  Caption,
  ClearIcon,
  EyeIcon,
  InputContainer,
  Label,
  OutlineEyeIcon,
  StyledInput,
  Wrapper,
} from './textinput.styles';

const TextInput: FC<TextInputProps> = ({
  label,
  type = 'text',
  error,
  Icon,
  value,
  className,
  disabled,
  onChange,
  onClear,
  mask = '',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const [focus, setFocus] = useState(false);
  const handleFocus = () => setFocus((focus) => !focus);

  const handleClear = () => {
    if (onClear) {
      onClear();
      return;
    }

    const event = {
      target: { value: '' },
    } as unknown as ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  const getType = () => {
    if (type === 'password') {
      if (!showPassword) return 'password';

      return 'text';
    }

    return type;
  };

  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputContainer $focus={focus} $error={!!error} $disabled={disabled}>
        {Icon && <Icon />}
        <StyledInput
          {...rest}
          mask={mask}
          value={value}
          disabled={disabled}
          type={getType()}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        {type === 'password' &&
          (showPassword ? (
            <EyeIcon
              onClick={!disabled ? handleShowPassword : undefined}
              $disabled={disabled}
            />
          ) : (
            <OutlineEyeIcon
              onClick={!disabled ? handleShowPassword : undefined}
              $disabled={disabled}
            />
          ))}
        {!isEmpty(value) && <ClearIcon onClick={handleClear} />}
      </InputContainer>
      {error && <Caption>{error}</Caption>}
    </Wrapper>
  );
};

export default TextInput;
