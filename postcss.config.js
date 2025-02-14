module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        ident: "postcss",
        plugins: () => [postcssNesting(/* pluginOptions */)],
      },
    ],
  ],
};
