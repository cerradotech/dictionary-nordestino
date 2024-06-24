import { getTheme } from '~/core';
import { ReactModal, styled } from '~/modules';
import { IoClose } from '~/utils';

const sizingSm = getTheme('sizing.sm');

const spacingXs = getTheme('spacing.xs');
const spacingMd = getTheme('spacing.md');

const primary300 = getTheme('colors.primary.300');
const background300 = getTheme('colors.background.300');
const shadeBlackFade = getTheme('colors.shade.blackFade');

const borderRadiusSm = getTheme('borderRadius.sm');

const fontSizesMd = getTheme('fontSizes.md');

export const ModalWrapper = styled(ReactModal).attrs((props) => ({
  style: {
    overlay: {
      backdropFilter: `blur(${sizingSm(props)}px)`,
      background: String(shadeBlackFade(props)),
    },
    content: {
      margin: 'auto',
      position: 'relative',
      padding: Number(spacingMd(props)),
      background: String(background300(props)),
      borderRadius: Number(borderRadiusSm(props)),
    },
  },
}))``;

export const CloseIcon = styled(IoClose)`
  color: ${primary300};
  font-size: ${fontSizesMd}px;
  position: absolute;
  top: ${spacingXs}px;
  right: ${spacingXs}px;
  cursor: pointer;
`;
