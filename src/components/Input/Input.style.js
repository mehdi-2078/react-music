/** @jsxRuntime classic */
import { css } from '@emotion/react';
import { theme } from '../../configs/theme';

/** @jsx jsx */

/// //استایل های مشترک بین تمام inputs اینجا نوشته میشود
export const inputCommon = css({
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    border: 0,
    '&:disabled': {
        backgroundColor: theme?.colors.backgroundColorSecondary,
        cursor: 'no-drop',
    },
});

/// //استایل های input پیش فرض اینجا نوشته میشود
export const inputDefault = css({
    padding: 8,
    backgroundColor: 'aqua',
    borderRadius: 4,
});

/// //استایل های input سفارشی اینجا نوشته میشود
export const inputText = css({
    width: '100%',
    backgroundColor: theme.colors.backgroundColorPrimary,
    textDecoration: 'none',
    borderWidth: theme.border[1],
    borderStyle: 'solid',
    borderColor: theme.borderColor.light,
    padding: theme.spaces[4],
    borderRadius: theme.borderRadius[1],
    position: 'relative',
    cursor: 'pointer',
});
