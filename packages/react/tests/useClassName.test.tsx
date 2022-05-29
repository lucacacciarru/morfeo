import React from 'react';
import { morfeo, Theme } from '@morfeo/web';
import { render, renderHook } from '@testing-library/react';
import { useClassName } from '../src';

const theme = {
  colors: {
    primary: 'black',
  },
} as Theme;

morfeo.setTheme('default', theme);

beforeEach(() => {
  morfeo.setCurrentTheme('default');
});

test('should apply the style with the className generated by `useClassName`', async () => {
  const { result } = renderHook(() => useClassName({ bg: 'primary' }));
  const { getByTestId } = render(
    <button className={result.current} data-testid="button" />,
  );
  const button = getByTestId('button');

  expect(button).toHaveStyle(
    `background-color: ${morfeo.getTheme()['colors']['primary']}`,
  );
});
