module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          components: './src/components',
          config: './src/config',
          lib: './src/lib',
          navigation: './src/navigation',
          utils: './src/utils',
          store: './src/store',
          screens: './src/screens',
          api: './src/api',
        },
      },
    ],
  ],
};
