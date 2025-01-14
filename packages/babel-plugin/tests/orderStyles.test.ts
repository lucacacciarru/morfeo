import { theme } from '@morfeo/web';
import { orderStyles } from '../src/utils';
import { theme as THEME } from './theme';

describe('orderStyles', () => {
  beforeEach(() => {
    theme.set(THEME);
  });

  it('should order styles based on the media queries', () => {
    const result = orderStyles([
      [
        'bg-lg-primary',
        {
          bg: { lg: 'primary' },
        },
      ],
      [
        'bg-md-secondary',
        {
          bg: { md: 'secondary' },
        },
      ],
      [
        'bg-sm-accent',
        {
          bg: { sm: 'accent' },
        },
      ],
      [
        'bg-xs-background',
        {
          bg: { xs: 'background' },
        },
      ],
    ]);

    expect(result).toEqual([
      [
        'bg-xs-background',
        {
          bg: { xs: 'background' },
        },
      ],
      [
        'bg-sm-accent',
        {
          bg: { sm: 'accent' },
        },
      ],
      [
        'bg-md-secondary',
        {
          bg: { md: 'secondary' },
        },
      ],
      [
        'bg-lg-primary',
        {
          bg: { lg: 'primary' },
        },
      ],
    ]);
  });

  it('should order even if responsive values are nested inside pseudo selectors', () => {
    const result = orderStyles([
      [
        'bg-hover-lg-primary',
        {
          '&:hover': {
            bg: { lg: 'primary' },
          },
        },
      ],
      [
        'bg-sm-secondary',
        {
          bg: { sm: 'secondary' },
        },
      ],
    ]);

    expect(result).toEqual([
      [
        'bg-sm-secondary',
        {
          bg: { sm: 'secondary' },
        },
      ],
      [
        'bg-hover-lg-primary',
        {
          '&:hover': {
            bg: { lg: 'primary' },
          },
        },
      ],
    ]);
  });
});
