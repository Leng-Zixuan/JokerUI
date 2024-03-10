/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');
export default {
  stories: [
    "../docs/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async config => {
    // 确保 'sass' 扩展名被识别
    config.resolve.extensions.push('.scss');

    // 添加 SCSS 处理规则
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'), // 根据你的项目结构调整路径
    });

    // 返回修改后的配置
    return config;
  },
};