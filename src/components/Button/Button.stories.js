// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
};

const propsButton = {
 buttonType: 'RedAutumn', width: '250px', padding: 50,
};

export const simple = () => <Button {...propsButton}>Button</Button>;
export const simple2 = () => <Button {...propsButton} buttonType=''>Button2</Button>;
