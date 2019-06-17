import { classNamesFunction, IStyle } from 'office-ui-fabric-react';
import { NeutralColors, FontSizes } from '@uifabric/fluent-theme';

interface IHeaderStyles {
  header?: IStyle;
  headerDiv?: IStyle;
  flexContainer?: IStyle;
  homeLink?: IStyle;
  logo?: IStyle;
  logo_text?: IStyle;
  nav?: IStyle;
}

const headerStyles: IHeaderStyles = {
  header: [
    'header',
    {
      background:
        'linear-gradient(to top, rgba(0, 61, 84, .94) 0%, rgba(0, 91, 112, .97))',
      color: NeutralColors.gray20,
      boxShadow: '0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108)',
      position: 'fixed',
      left: 0,
      top: 18,
      zIndex: 1,
      width: '100%',
      userSelect: 'none',
    },
  ],
  headerDiv: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    selectors: {
      '@media(max-width: 780px)': {
        width: '90%',
      },
      '@media(min-width: 1300px)': {
        maxWidth: 1280,
      },
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: 80,
    selectors: {
      '@media(max-width: 1000px)': {
        height: 60,
      },
    },
  },
  homeLink: {
    display: 'flex',
    flex: '1 0 auto',
    minWidth: 250,
    alignItems: 'center',
    outline: 0,
    height: 55,
    textDecoration: 'none',
    selectors: {
      '@media(max-width: 1000px)': {
        height: 35,
      },
      ':hover, :focus, :active': {
        textDecoration: 'none',
      },
    },
  },
  logo: {
    height: '100%',
    flex: '0 0',
  },
  logo_text: {
    flex: '1 0',
    marginLeft: 15,
    fontWeight: 100,
    fontSize: 27,
    lineHeight: 27,
    color: '#C6E6E8',
    selectors: {
      '@media(max-width: 1000px)': {
        fontSize: 24,
      },
    },
  },
  nav: ['header-nav', {
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    fontFamily: 'Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontWeight: 100,
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    position: 'relative',
    fontSize: 20,
    height: '100%',
    selectors: {
      '@media(max-width: 1000px)': {
        fontSize: 18,
        mask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      },
      '@media (max-width: 599px)': {
        display: 'none',
      },

      '& > span': {
        flex: '0 0',
        marginLeft: 12,
        background: 'transparent',
        height: '100%',
        lineHeight: 24,
        cursor: 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 85,
        selectors: {
          ':hover': {
            background: 'rgba(255, 255, 255, .2)',
          },
          ':active': {
            background: 'rgba(255, 255, 255, .9)',
            color: NeutralColors.gray180,
          },
          '@media(max-width: 1000px)': {
            minWidth: 75,
          },
        },
      },
    },
  }],
};

const getClassNames = classNamesFunction<{}, IHeaderStyles>();
export default getClassNames(headerStyles, {});
