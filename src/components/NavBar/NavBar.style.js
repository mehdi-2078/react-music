import { css } from '@emotion/react';
import { theme } from '../../configs/theme';

export const navBarCommon = css({
    width: '90%',
    margin: 'auto',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'start',
    border: 0,
    color: theme.colors.Doctor,
    backgroundColor: 'transparent',
    padding: '12px 0 ',
    fontWeight: 'bold',

});
