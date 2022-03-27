/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { btnRedAutumn } from './Button.style';

export function Button(props) {
    const { theme } = useTheme();
    const {
        children, disabled, type, buttonType, handleClick, loading,
        width, height, backgroundColor, color, border, borderColor,
        borderRadius, boxShadow, fontSize, padding,
    } = props;

    console.log({ btnRedAutumn });
    const staticStyle = css({
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        '&:disabled': {
            backgroundColor: theme?.colors.backgroundColorSecondary,
            cursor: 'no-drop',
        },
    });
    let customButtonStyle;
    switch (buttonType) {
        case 'RedAutumn':
            customButtonStyle = css({ btnRedAutumn });
            break;
        default:
            customButtonStyle = css({
                width,
                height,
                padding: padding || 8,
                backgroundColor: backgroundColor || 'aqua',
                color,
                border: 0,
                borderColor,
                borderRadius: 4,
                boxShadow: theme?.boxShadow.light,
                fontSize,
            }, staticStyle);
    }
    console.log({ customButtonStyle });
    return (
        /* eslint-disable react/button-has-type */
      <button
        disabled={disabled || loading}
        type={type}
        onClick={handleClick}
        css={btnRedAutumn}
      >
        {children}
      </button>
    );
}
