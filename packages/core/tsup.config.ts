// eslint-disable-next-line import/no-extraneous-dependencies
import {defineConfig, Options} from 'tsup';

const getConfig = (config: Options): Options[] => {
  return [
    {
      ...config,
      format: ['cjs', 'esm'],
      platform: 'node',
      dts: true,
    },
    {
      ...config,
      format: ['iife'],
      platform: 'browser',
    },
  ];
};

export default defineConfig([
  // Default entrypoint
  ...getConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    sourcemap: true,
    clean: false,
    globalName: 'starknetwc.core',
  }),
]);
