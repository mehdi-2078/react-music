/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Icon } from 'components';
import { navBarCommon } from './NavBar.style';

export function NavBar({
 name, iconName, size, color,
}) {
    return (
      <div css={navBarCommon}>
        <div css={{ width: '98%' }}>
          <div>{name}</div>
          {/* <Icon iconName={iconName} size={size} color={color} /> */}
        </div>
      </div>
    );
}
