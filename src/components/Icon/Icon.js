// /** @jsxRuntime classic */
// /** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import * as FontAwesome from 'react-icons/fa';
import React from 'react';

export function Icon({ iconName, size, color }) {
    const { theme } = useTheme();
    const icon = React.createElement(FontAwesome[iconName]);
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
      <div css={{
            fontSize: theme.typography.h3.fontSize,
            color: theme.colors.Doctor,
        }}
      >
        {icon}
      </div>
    );
}
