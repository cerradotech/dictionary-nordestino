import { useWindowDimensions } from '.';

const guidelineBaseWidth = 1366; // or 1920, 2560, etc.
const guidelineBaseHeight = 768; // or 1080, 1440, etc.

export const useScale = (size: number): number => {
  const { width } = useWindowDimensions();
  return (width / guidelineBaseWidth) * size;
};

export const useVerticalScale = (size: number): number => {
  const { height } = useWindowDimensions();
  return (height / guidelineBaseHeight) * size;
};

export const useModerateScale = (size: number, factor = 0.5): number => {
  const scale = useScale(size);
  return size + (scale - size) * factor;
};
