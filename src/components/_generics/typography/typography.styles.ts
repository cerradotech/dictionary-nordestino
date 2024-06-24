import { getTheme } from '~/core';
import { styled } from '~/modules';
import { getFontSize, getLineHeight } from '~/utils';

const fontFamilyT3 = getTheme('fontFamilies.text.t3');
const fontSizesMd = getTheme('fontSizes.md');

export const Text = styled.span<TypographyTypeStyle>`
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
  font-family: ${fontFamilyT3};
  line-height: ${fontSizesMd}px;
`;
