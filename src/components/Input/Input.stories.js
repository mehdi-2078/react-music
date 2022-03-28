// Button.stories.js|jsx

import React from 'react';

import { Input } from './Input';

export default {
    title: 'Input',
    component: Input,
};

/// //چند پراپس را بهتر است در یک آبجکت قرار دهیم
const propsInput = {
 width: '250px', padding: 50, fontSize: `${2.4}rem`,
};

export const simple = () => <Input placeholder="simple" />;
export const inputText = () => <Input {...propsInput} type="text" placeholder="input text" />;
export const inputEmail = () => <Input {...propsInput} type="email" placeholder="input email" />;
export const inputPassword = () => <Input {...propsInput} type="password" placeholder="input password" />;
