import { css } from '@emotion/react';
import { theme } from '../../configs/theme';

export const navBarCommon = css({
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'start',
    border: 0,
    color: theme.colors.Doctor,
    backgroundColor: 'transparent',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontWeight: 'bold',

});
