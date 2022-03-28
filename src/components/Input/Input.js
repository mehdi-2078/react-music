/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {
    inputCommon, inputText,
} from './Input.style';

export function Input({
 type = 'text', placeholder, handleChange, disabled, children, ...props
}) {
    /// /استایل هایی که از props میگیریم را اینجا ست میکنیم
    const inputProps = css({
        ...props,
    });

    /// /استایل های سفارشی خود را با توجه به inputType اینجا ست میکنیم
    let InputCustom;
    if (type === 'text') InputCustom = inputText;
    else if (type === 'email') InputCustom = inputText;
    else if (type === 'password') InputCustom = inputText;

    return (
      <input
        disabled={disabled}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
            /// اولویت استایل دهی از سمت راست به چپ است یعنی اولویت با inputProps است
        css={[inputCommon, InputCustom, inputProps]}
      />
    );
}
