import type { StorybookConfig } from '@storybook/react-webpack5';

import custom from '../webpack.config';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom({}).module!.rules } };
  },
};

export default config;