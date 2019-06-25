import readPkg from 'read-pkg';
import cosmiconfig from 'cosmiconfig';
import { defaultsDeep } from 'lodash';
import { validate } from 'jest-validate';
import { Config, InitialConfig } from './config';
import validConfig from './validConfig';
import normalize from './normalize';

const explorer = cosmiconfig('yoshi', {
  searchPlaces: ['package.json', 'yoshi.config.js'],
});

export default (): Config => {
  const result = explorer.searchSync();
  const initialConfig = <InitialConfig>(result ? result.config : {});

  // Load and copy values from a file that extends the config
  if (initialConfig.extends) {
    const extendsConfig: Partial<InitialConfig> = require(initialConfig.extends)
      .defaultConfig;

    defaultsDeep(initialConfig, extendsConfig);
  }

  // Validate correctness
  validate(initialConfig, {
    exampleConfig: validConfig,
  });

  // Load package.json
  const pkgJson = readPkg.sync({ cwd: process.cwd() });

  // Normalize values
  const config = normalize(initialConfig, pkgJson);

  return config;
};
