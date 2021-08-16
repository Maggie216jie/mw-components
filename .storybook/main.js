
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}

// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app"
//   ]
// }


// module.exports = {
//   // 1. register the docs panel (as opposed to '@storybook/addon-docs' which
//   //    will configure everything with a preset)
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     '@storybook/addon-docs'],
//     typescript: {
//       reactDocgen: 'none',
//     },
//   // 2. manually configure webpack, since you're not using the preset
//   webpackFinal: async (config) => {

  
//       config.module.rules.push({
//         test: /\.(ts|tsx)$/,
//         use: [
       
//           {
//             loader: require.resolve('react-docgen-typescript-loader'),
//           },
//         ]
//       });
//       config.resolve.extensions.push(".ts", ".tsx");
//       return config;

    
//   //   config.module.rules.push({
//   //     // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
//   //     //     the docs page from the markdown
//   //     test: /\.(ts|tsx)$/,
//   //     use: [
//   //       {
//   //         // Need to add babel-loader as dependency: `yarn add -D babel-loader`
//   //         loader: require.resolve('babel-loader'),
//   //         // may or may not need this line depending on your app's setup
//   //         options: {
//   //           plugins: ['@babel/plugin-transform-react-jsx'],
//   //         },
//   //       },
//   //       {
//   //         loader: '@mdx-js/loader',
//   //         options: {
//   //           compilers: [createCompiler({})],
//   //         },
//   //       },
//   //       {
//   //         loader: require.resolve('react-docgen-typescript-loader'),
//   //       },
//   //     ],
//   //   });
//   //   // 2b. Run `source-loader` on story files to show their source code
//   //   //     automatically in `DocsPage` or the `Source` doc block.
//   //   config.module.rules.push({
//   //     test: /\.(stories|story)\.[tj]sx?$/,
//   //     loader: require.resolve('@storybook/source-loader'),
//   //     exclude: [/node_modules/],
//   //     enforce: 'pre',
//   //   });
//   //   return config;
//   // 
// },
// };