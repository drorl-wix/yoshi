import { multipleValidOptions } from 'jest-validate';
import { InitialConfig } from './config';

const validConfig: InitialConfig = {
  extends: 'preset',
  // See https://github.com/facebook/jest/pull/8435
  // Relevant for the other @ts-ignores in this file.
  //
  // @ts-ignore
  separateCss: multipleValidOptions(true, 'prod'),
  splitChunks: false,
  cssModules: true,
  tpaStyle: false,
  enhancedTpaStyle: false,
  features: {
    externalizeRelativeLodash: false,
  },
  clientProjectName: 'project',
  keepFunctionNames: false,
  // @ts-ignore
  entry: multipleValidOptions('index.js', ['one.js', 'two.js'], {
    app: 'index.js',
  }),
  servers: {
    cdn: {
      url: 'http://localhost:3200',
      port: 3200,
      dir: 'statics',
      ssl: false,
    },
  },
  // @ts-ignore
  externals: multipleValidOptions(['React'], { react: 'React' }),
  specs: {
    browser: 'test/**/*.spec.js',
    node: 'test/**/*.spec.js',
  },
  petriSpecs: {
    onlyForLoggedInUsers: false,
    scopes: ['me'],
  },
  transpileTests: true,
  externalUnprocessedModules: ['react'],
  exports: '[name]',
  // @ts-ignore
  hmr: multipleValidOptions(true, 'auto'),
  liveReload: false,
  performance: false,
  hooks: {
    prelint: 'npm run stuff',
  },
  umdNamedDefine: false,
  projectType: 'app',
  experimentalBuildHtml: false,
  experimentalMonorepo: false,
  experimentalMinimalPRBuild: false,
  startUrl: 'http://localhost:3000',
};

export default validConfig;
