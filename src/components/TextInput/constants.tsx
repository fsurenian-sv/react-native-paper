import { Dimensions, PixelRatio } from 'react-native';

const scale = Dimensions.get('window').width / 960;

export const normalizePixelDensity = (size: number) =>
    Math.round(PixelRatio.roundToNearestPixel(size * scale)) - 2;


export const MAXIMIZED_LABEL_FONT_SIZE = normalizePixelDensity(17);
export const MINIMIZED_LABEL_FONT_SIZE = normalizePixelDensity(15);
export const LABEL_WIGGLE_X_OFFSET = 4;
export const LABEL_PADDING_HORIZONTAL = 12;
