import '@testing-library/jest-dom/extend-expect';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { setDefaultOptions } from 'jsdom-screenshot';

const isCI = process.env.CI === 'true';

setDefaultOptions({
  launch: { args: isCI ? ['--no-sandbox'] : [] },
  waitUntilNetworkIdle: true,
});

jest.setTimeout(30_000);

expect.extend({ toMatchImageSnapshot });
