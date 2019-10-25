import React from 'react';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import { createGlobalStyle } from 'styled-components';
import { Text } from './Text';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  * {
    font-family: 'Open Sans'
  }

  body {
    font-size: 16px;
  }
`;

function renderImage(ui: React.ReactNode): ReturnType<typeof generateImage> {
  render(
    <>
      <GlobalStyle />
      {ui}
    </>,
  );
  return generateImage({ targetSelector: 'body > div > *' });
}

describe('Button', () => {
  it('should render without visual regression', async () => {
    expect(await renderImage(<Text>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>)).toMatchImageSnapshot();
  });
});
