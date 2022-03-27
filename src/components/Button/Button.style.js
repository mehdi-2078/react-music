/** @jsxRuntime classic */
import { css } from '@emotion/react';
import { theme } from '../../configs/theme';

/** @jsx jsx */

export const btnRedAutumn = css({
    // width,
    // height,
    padding: 18,
    backgroundColor: theme?.colors.RedAutumn,
    color: theme?.colors.Doctor,
    border: theme?.border[0],
    borderColor: theme?.borderColor.light,
    borderRadius: theme?.borderRadius[2],
    boxShadow: theme?.boxShadow.light,
    fontSize: `${theme?.typography.small.fontSize}rem`,
    '&:hover,&:focus': {
        boxShadow: theme?.boxShadow.light,
        backgroundColor: theme?.colors.secondary,
    },
});
console.log({ btnRedAutumn });
