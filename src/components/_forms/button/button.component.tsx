import React, { FC, PropsWithChildren, useState } from 'react';

import { showAlert } from '~/utils';

import { AnimationComponent, ButtonRaw, ButtonTitle } from './button.styles';

const Button: FC<PropsWithChildren<ButtonComponentProps>> = ({
  children,
  CenterIcon,
  LeftIcon,
  RightIcon,
  onPress,
  customError,
  disabled = false,
  secondary = false,
  tertiary = false,
  flat = false,
  borderLess = false,
  loading = false,
  ...rest
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const primary = !secondary && !tertiary && !flat && !borderLess;
  const handleOnPress = (): void => {
    if (!onPress) return;

    setTimeout(async (): Promise<void> => {
      try {
        setInternalLoading(true);
        await onPress();
      } catch ({ message }) {
        if (customError) {
          return customError();
        }
        showAlert({
          message,
        });
      } finally {
        setInternalLoading(false);
      }
    }, 100);
  };

  return (
    <ButtonRaw
      {...rest}
      $primary={primary}
      $secondary={secondary}
      $tertiary={tertiary}
      $flat={flat}
      $borderLess={borderLess}
      $disabled={!!disabled}
      $loading={loading || internalLoading}
      onClick={handleOnPress}
    >
      {LeftIcon && <LeftIcon />}

      <ButtonTitle>
        {!loading && !internalLoading && CenterIcon && <CenterIcon />}
        {(loading || internalLoading) && !!CenterIcon && <AnimationComponent />}
        {children}
      </ButtonTitle>

      {!loading && !internalLoading && RightIcon && <RightIcon />}
      {(loading || internalLoading) && !CenterIcon && <AnimationComponent />}
    </ButtonRaw>
  );
};

export default Button;
