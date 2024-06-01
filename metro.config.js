const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

const styleConfig = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-sass-transformer")
  },
  resolver: {
    sourceExts: [...sourceExts, "scss", "sass"]
  }
};


module.exports = mergeConfig(defaultConfig, [styleConfig, svgConfig]);