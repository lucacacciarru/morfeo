import {
  fontsMap,
  radiiMap,
  sizesMap,
  colorsMap,
  shadowsMap,
  bordersMap,
  spacingsMap,
  zIndicesMap,
  fontSizesMap,
  opacitiesMap,
  gradientsMap,
  componentsMap,
  fontWeightsMap,
  lineHeightsMap,
  transitionsMap,
  borderWidthsMap,
  borderStylesMap,
  colorSchemasMap,
  letterSpacingsMap,
} from './properties';
import { createPropertiesMap } from './createPropertiesMap';

export const radiiProperties = createPropertiesMap(radiiMap, 'radii');
export const fontProperties = createPropertiesMap(fontsMap, 'fonts');
export const spacingsProperties = createPropertiesMap(spacingsMap, 'spacings');
export const sizesProperties = createPropertiesMap(sizesMap, 'sizes');
export const colorProperties = createPropertiesMap(colorsMap, 'colors');
export const gradientProperties = createPropertiesMap(
  gradientsMap,
  'gradients',
);
export const shadowsProperties = createPropertiesMap(shadowsMap, 'shadows');
export const fontSizeProperties = createPropertiesMap(
  fontSizesMap,
  'fontSizes',
);
export const fontWeightProperties = createPropertiesMap(
  fontWeightsMap,
  'fontWeights',
);
export const lineHeightProperties = createPropertiesMap(
  lineHeightsMap,
  'lineHeights',
);
export const letterSpacingProperties = createPropertiesMap(
  letterSpacingsMap,
  'letterSpacings',
);
export const bordersProperties = createPropertiesMap(bordersMap, 'borders');
export const borderWidthsProperties = createPropertiesMap(
  borderWidthsMap,
  'borderWidths',
);
export const borderStylesProperties = createPropertiesMap(
  borderStylesMap,
  'borderStyles',
);
export const opacitiesProperties = createPropertiesMap(
  opacitiesMap,
  'opacities',
);
export const zIndicesProperties = createPropertiesMap(zIndicesMap, 'zIndices');
export const transitionsProperties = createPropertiesMap(
  transitionsMap,
  'transitions',
);
export const colorSchemasProperties = createPropertiesMap(
  colorSchemasMap,
  'colorSchemas',
);

export const componentsProperties = createPropertiesMap(
  componentsMap,
  'components',
);

export const allPropertiesBySlice = {
  fonts: fontsMap,
  radii: radiiMap,
  colors: colorsMap,
  sizes: sizesMap,
  shadows: shadowsMap,
  borders: bordersMap,
  spacings: spacingsMap,
  zIndices: zIndicesMap,
  fontSizes: fontSizesMap,
  gradients: gradientsMap,
  opacities: opacitiesMap,
  components: [...componentsMap, 'variant', 'state'],
  fontWeights: fontWeightsMap,
  lineHeights: lineHeightsMap,
  transitions: transitionsMap,
  borderWidths: borderWidthsMap,
  borderStyles: borderStylesMap,
  colorSchemas: colorSchemasMap,
  letterSpacings: letterSpacingsMap,
};

export const allProperties = {
  ...fontProperties,
  ...radiiProperties,
  ...colorProperties,
  ...sizesProperties,
  ...shadowsProperties,
  ...bordersProperties,
  ...fontSizeProperties,
  ...spacingsProperties,
  ...zIndicesProperties,
  ...gradientProperties,
  ...opacitiesProperties,
  ...componentsProperties,
  ...fontWeightProperties,
  ...lineHeightProperties,
  ...transitionsProperties,
  ...borderWidthsProperties,
  ...borderStylesProperties,
  ...colorSchemasProperties,
  ...letterSpacingProperties,
};
