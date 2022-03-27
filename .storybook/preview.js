import React from 'react';
import { ThemeProvider} from '@emotion/react';
import {theme} from '../src/configs/theme'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => (
    <ThemeProvider theme={{ theme }}>
        {storyFn()}
    </ThemeProvider>
))
