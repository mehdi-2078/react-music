/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, useTheme } from '@emotion/react';
import { Icon } from 'components';
import { navBarCommon } from './NavBar.style';

export function NavBar({ name, iconName }) {
    // eslint-disable-next-line no-shadow
    const { theme } = useTheme();

    return (
      <div css={navBarCommon}>
        <Icon iconName={iconName} size={12} color='white' />
        <div css={{
                width: '90%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
          <div css={{ marginLeft: 10, fontWeight: theme.typography.h4.fontWeight }}>{name}</div>
        </div>
      </div>
    );
}
