/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { theme } from '../../configs/theme';
import { RightBarItem } from '../../components';

export function RightSideBar() {
    return (
      <div css={{
 width: '80%', margin: 'auto', backgroundColor: theme.colors.EerieBlack, marginTop: 30,
}}
      >
        <RightBarItem />
      </div>
    );
}
