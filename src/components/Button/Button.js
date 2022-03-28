/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import {
    btnCommon, btnDefault, btnPrimary, btnRedAutumn,
} from './Button.style';

export function Button({
 disabled, loading, type, handleClick, children, buttonType, ...props
}) {
    /// /استایل هایی که از props میگیریم را اینجا ست میکنیم
    const btnProps = css({
        ...props,
    });

    /// /استایل های سفارشی خود را با توجه به buttonType اینجا ست میکنیم
    let btnCustom;
    if (buttonType === 'RedAutumn') btnCustom = btnRedAutumn;
    else if (buttonType === 'Primary') btnCustom = btnPrimary;
    else btnCustom = btnDefault;

    return (
        /* eslint-disable react/button-has-type */
      <button
        disabled={disabled}
        type={type}
        onClick={handleClick}
        /// اولویت استایل دهی از سمت راست به چپ است یعنی اولویت با btnProps است
        css={[btnCommon, btnCustom, btnProps]}
      >
        {children}
      </button>
    );
}
