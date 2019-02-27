module.exports = {
  presets: [
    ["@babel/preset-env", {targets: {node: 'current'}}],
    "transform-es2015-modules-commonjs",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    "styled-components",
    "react-hot-loader/babel"
  ]
}
