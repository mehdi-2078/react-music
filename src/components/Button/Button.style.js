/** @jsxRuntime classic */
import { css } from '@emotion/react';
import { theme } from '../../configs/theme';

/** @jsx jsx */

/// //استایل های مشترک بین تمام باتن ها اینجا نوشته میشود
export const btnCommon = css({
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

/// //استایل های باتن پیش فرض اینجا نوشته میشود
export const btnDefault = css({
    padding: 8,
    backgroundColor: 'aqua',
    borderRadius: 4,
});

/// //استایل های باتن سفارشی اینجا نوشته میشود
export const btnRedAutumn = css({
    padding: 18,
    backgroundColor: theme?.colors.RedAutumn,
    color: theme?.colors.Doctor,
    borderColor: theme?.borderColor.light,
    borderRadius: theme?.borderRadius[2],
    boxShadow: theme?.boxShadow.light,
    fontSize: `${theme?.typography.small.fontSize}rem`,
    '&:hover,&:focus': {
        boxShadow: theme?.boxShadow.light,
        backgroundColor: theme?.colors.secondary,
    },
});

export const btnPrimary = css({
    padding: 18,
    backgroundColor: theme?.colors.Primary,
    color: theme?.colors.Doctor,
    borderColor: theme?.borderColor.light,
    borderRadius: theme?.borderRadius[2],
    boxShadow: theme?.boxShadow.light,
    fontSize: `${theme?.typography.small.fontSize}rem`,
    '&:hover,&:focus': {
        boxShadow: theme?.boxShadow.light,
        backgroundColor: theme?.colors.secondary,
    },
});
