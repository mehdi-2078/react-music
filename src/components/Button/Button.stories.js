// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
};

/// //چند پراپس را بهتر است در یک آبجکت قرار دهیم
const propsButton = {
 width: '250px', padding: 50, fontSize: `${2.4}rem`,
};

export const simple = () => <Button>simple</Button>;
export const btnDefault = () => <Button {...propsButton}>btn Default</Button>;
export const btnRedAutumn = () => <Button buttonType='RedAutumn'>btn RedAutumn</Button>;
export const btnPrimary = () => <Button buttonType='Primary'>btn Primary</Button>;
export const btnProps = () => <Button {...propsButton} color="yellow" backgroundColor="green">btn props</Button>;
