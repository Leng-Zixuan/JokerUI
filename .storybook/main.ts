const config = {
  stories: [
    "../docs/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ['@storybook/addon-essentials'],
  docs: { autodocs: "tag" },
  framework: 'webpack',
};
export default config;